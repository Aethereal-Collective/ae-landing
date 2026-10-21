<template>
	<div class="bg-white text-neutral-950">
		<LandingNav />
		<main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
			<header class="flex flex-col gap-4">
				<h1 class="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">Research</h1>
				<p class="max-w-2xl text-lg text-neutral-500">Analysis on crypto markets, onchain businesses, and the ideas behind them.</p>
			</header>

			<nav class="mt-10 flex flex-wrap gap-2" aria-label="Filter by category">
				<NuxtLink v-for="tab in tabs" :key="tab.id" :to="tab.id ? { query: { type: tab.id } } : { query: {} }" :class="active === tab.id ? 'bg-neutral-950 text-white' : 'border border-neutral-200 text-neutral-600 hover:bg-neutral-50'" class="rounded-full px-4 py-2 text-sm font-semibold transition-colors">
					{{ tab.label }} <span class="ml-1 opacity-60">{{ tab.count }}</span>
				</NuxtLink>
			</nav>
			<p v-if="activeCategory" class="mt-4 text-sm text-neutral-500">{{ activeCategory.description }}</p>

			<NuxtLink v-if="featured" :to="featured.path" class="group mt-10 grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50/60 transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:grid-cols-[1.2fr_1fr]">
				<div class="aspect-[16/10] overflow-hidden bg-neutral-100 md:aspect-auto">
					<img v-if="featured.cover" :src="featured.cover" :alt="featured.title" class="size-full object-cover transition duration-700 group-hover:scale-[1.03]" />
				</div>
				<div class="flex flex-col justify-center gap-4 p-6 md:p-10">
					<ReportMeta :report="featured" featured />
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
						<ReportMeta :report="r" />
						<h3 class="text-lg font-bold leading-snug tracking-tight">{{ r.title }}</h3>
						<p class="text-sm leading-relaxed text-neutral-500">{{ r.summary }}</p>
					</div>
				</NuxtLink>
			</div>

			<p v-if="!filtered.length" class="mt-16 text-center text-neutral-500">No reports in this category yet.</p>
		</main>
		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
import { CATEGORIES } from "~/data/research";

const route = useRoute();
const { data: reports } = await useAsyncData("research-all", () => queryCollection("research").order("date", "DESC").all(), { default: () => [] });

const active = computed(() => (typeof route.query.type === "string" ? route.query.type : ""));
const activeCategory = computed(() => CATEGORIES.find((c) => c.id === active.value));
const filtered = computed(() => (active.value ? reports.value.filter((r) => r.category === active.value) : reports.value));
const featured = computed(() => filtered.value.find((r) => r.featured) ?? filtered.value[0]);
const rest = computed(() => filtered.value.filter((r) => r !== featured.value));

// Only show categories that have reports, so no tab leads to an empty page.
const tabs = computed(() => [
	{ id: "", label: "All", count: reports.value.length },
	...CATEGORIES.map((c) => ({ id: c.id, label: c.label, count: reports.value.filter((r) => r.category === c.id).length })).filter((t) => t.count),
]);

const title = "Research | Aethereal";
const description = "Analysis on crypto markets, onchain businesses, and the ideas behind them, from Aethereal.";
useSeoMeta({ title, ogTitle: title, twitterTitle: title, description, ogDescription: description, twitterDescription: description });
</script>
