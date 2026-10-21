<template>
	<div class="bg-white text-neutral-950">
		<LandingNav />
		<main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
			<header class="flex flex-col gap-4">
				<h1 class="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">Blog</h1>
				<p class="max-w-2xl text-lg text-neutral-500">Notes and opinions on crypto markets, onchain businesses, and the ideas behind them.</p>
			</header>


			<NuxtLink v-if="featured" :to="featured.path" class="group mt-10 grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50/60 transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:grid-cols-[1.2fr_1fr]">
				<div class="aspect-[16/10] overflow-hidden bg-neutral-100 md:aspect-auto">
					<img v-if="featured.cover" :src="featured.cover" :alt="featured.title" class="size-full object-cover transition duration-700 group-hover:scale-[1.03]" />
				</div>
				<div class="flex flex-col justify-center gap-4 p-6 md:p-10">
					<PostMeta :post="featured" featured />
					<h2 class="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{{ featured.title }}</h2>
					<p class="leading-relaxed text-neutral-500">{{ featured.summary }}</p>
				</div>
			</NuxtLink>

			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<NuxtLink v-for="r in rest" :key="r.path" :to="r.path" class="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
					<div class="aspect-[16/9] overflow-hidden bg-neutral-100">
						<img v-if="r.cover" :src="r.cover" :alt="r.title" loading="lazy" class="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
					</div>
					<div class="flex flex-1 flex-col gap-3 p-6">
						<PostMeta :post="r" />
						<h3 class="text-lg font-bold leading-snug tracking-tight">{{ r.title }}</h3>
						<p class="text-sm leading-relaxed text-neutral-500">{{ r.summary }}</p>
					</div>
				</NuxtLink>
			</div>

			<p v-if="!posts.length" class="mt-16 text-center text-neutral-500">No posts yet.</p>
		</main>
		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-all", () => queryCollection("blog").order("date", "DESC").all(), { default: () => [] });
const featured = computed(() => posts.value.find((r) => r.featured) ?? posts.value[0]);
const rest = computed(() => posts.value.filter((r) => r !== featured.value));

const title = "Blog | Aethereal";
const description = "Notes and opinions on crypto markets, onchain businesses, and the ideas behind them, from Aethereal.";
useSeoMeta({ title, ogTitle: title, twitterTitle: title, description, ogDescription: description, twitterDescription: description });
useHead({ link: [{ rel: "canonical", href: "https://aethereal.top/blog" }] });
</script>
