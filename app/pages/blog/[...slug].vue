<template>
	<div v-if="post" class="bg-white text-neutral-950">
		<LandingNav />
		<main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
			<nav class="text-sm text-neutral-400" aria-label="Breadcrumb">
				<NuxtLink to="/blog" class="hover:text-neutral-950">Blog</NuxtLink>
				<span class="mx-2">/</span>
				<span>{{ post.topic }}</span>
			</nav>

			<header class="mt-6 max-w-3xl">
				<PostMeta :post="post" featured />
				<h1 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-6xl">{{ post.title }}</h1>
				<p class="mt-5 text-lg leading-relaxed text-neutral-500">{{ post.summary }}</p>
			</header>

			<img v-if="post.cover" :src="post.cover" :alt="post.title" class="mt-10 aspect-[16/8] w-full rounded-[2rem] border border-neutral-200 object-cover" />

			<div class="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
				<aside v-if="toc.length" class="hidden lg:block">
					<div class="sticky top-28">
						<p class="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">Contents · {{ activeIndex + 1 }} of {{ toc.length }}</p>
						<ol class="mt-4 space-y-1 border-l border-neutral-200 text-sm">
							<li v-for="(item, i) in toc" :key="item.id">
								<a :href="`#${item.id}`" :class="[i === activeIndex ? 'border-neutral-950 font-semibold text-neutral-950' : 'border-transparent text-neutral-500 hover:text-neutral-950', item.depth === 3 ? 'pl-7' : 'pl-4']" class="-ml-px block border-l-2 py-1.5">{{ item.text }}</a>
							</li>
						</ol>
					</div>
				</aside>

				<article class="max-w-3xl" :class="{ 'lg:col-span-2': !toc.length }">
					<ContentRenderer :value="post" class="prose prose-lg prose-neutral max-w-none prose-headings:scroll-mt-28 prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-neutral-950 [&_h2_a]:no-underline [&_h3_a]:no-underline [&_h2_a]:[font-weight:inherit] [&_h3_a]:[font-weight:inherit] prose-img:rounded-2xl prose-img:border prose-img:border-neutral-200" />

					<aside class="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm leading-relaxed text-neutral-500">
						<p class="font-semibold text-neutral-950">Disclosure</p>
						<p class="mt-2">{{ post.disclosure ?? DEFAULT_DISCLOSURE }}</p>
						<p v-if="post.source" class="mt-2">Originally published on <a :href="post.source" target="_blank" rel="noopener noreferrer" class="underline">Medium</a>.</p>
					</aside>
				</article>
			</div>

			<section v-if="similar.length" class="mt-24 border-t border-neutral-200 pt-12">
				<div class="flex items-end justify-between">
					<h2 class="text-2xl font-extrabold tracking-tight">More from the blog</h2>
					<NuxtLink to="/blog" class="text-sm font-semibold hover:underline">See all</NuxtLink>
				</div>
				<div class="mt-8 grid gap-6 md:grid-cols-3">
					<NuxtLink v-for="r in similar" :key="r.path" :to="r.path" class="group flex flex-col gap-3 rounded-3xl border border-neutral-200 p-6 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
						<PostMeta :post="r" />
						<h3 class="text-lg font-bold leading-snug tracking-tight group-hover:underline">{{ r.title }}</h3>
					</NuxtLink>
				</div>
			</section>
		</main>
		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
import { DEFAULT_DISCLOSURE } from "~/data/blog";

const route = useRoute();
const { data: post } = await useAsyncData(`blog-${route.path}`, () => queryCollection("blog").path(route.path).first());
if (!post.value) throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true });

const { data: others } = await useAsyncData(`blog-others-${route.path}`, () => queryCollection("blog").where("path", "<>", route.path).order("date", "DESC").all(), { default: () => [] });
// Same topic first, then the newest of the rest.
const similar = computed(() => [...others.value.filter((r) => r.topic === post.value!.topic), ...others.value.filter((r) => r.topic !== post.value!.topic)].slice(0, 3));

type TocLink = { id: string; text: string; depth: number; children?: TocLink[] };
const toc = computed(() => ((post.value?.body?.toc?.links ?? []) as TocLink[]).flatMap((l) => [l, ...(l.children ?? [])]));

// Highlight the section currently in view.
const activeIndex = ref(0);
onMounted(() => {
	const els = toc.value.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
	if (!els.length) return;
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) if (e.isIntersecting) activeIndex.value = Math.max(0, toc.value.findIndex((t) => t.id === e.target.id));
		},
		{ rootMargin: "-20% 0px -70% 0px" },
	);
	els.forEach((el) => io.observe(el));
	onBeforeUnmount(() => io.disconnect());
});

const r = post.value;
const title = `${r.title} | Aethereal Blog`;
useSeoMeta({ title, ogTitle: title, twitterTitle: title, description: r.summary, ogDescription: r.summary, twitterDescription: r.summary, ogType: "article", ...(r.cover && { ogImage: r.cover, twitterImage: r.cover }) });
useHead({
	// Posts first published on Medium keep their ranking there; new posts written here rank for aethereal.top.
	...(r.source && { link: [{ rel: "canonical", href: r.source }] }),
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: r.title,
				description: r.summary,
				datePublished: r.date,
				image: r.cover,
				author: { "@type": "Organization", name: "Aethereal", url: "https://aethereal.top" },
				publisher: { "@type": "Organization", name: "Aethereal", logo: { "@type": "ImageObject", url: "https://aethereal.top/logo.jpg" } },
			}),
		},
	],
});
</script>
