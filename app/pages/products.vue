<template>
	<div class="bg-white text-neutral-950">
		<LandingNav />
		<main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
			<header class="flex flex-col gap-4">
				<h1 class="text-5xl font-extrabold tracking-[-0.03em] md:text-7xl">Products</h1>
				<p class="max-w-2xl text-lg text-neutral-500">What we build and ship.</p>
			</header>

			<div class="mt-12 flex flex-col gap-8">
				<a v-for="p in PROJECTS" :key="p.name" :href="p.url" target="_blank" rel="noopener noreferrer" class="group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-4 transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:p-6 lg:grid-cols-[1.4fr_1fr]">
					<div class="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
						<div class="flex items-center gap-1.5 border-b border-neutral-200 px-4 py-3" aria-hidden="true">
							<span class="size-2.5 rounded-full bg-neutral-300" /><span class="size-2.5 rounded-full bg-neutral-300" /><span class="size-2.5 rounded-full bg-neutral-300" />
							<span class="ml-3 truncate rounded-full bg-neutral-100 px-3 py-1 text-[11px] text-neutral-400">{{ host(p.url) }}</span>
						</div>
						<NuxtImg v-if="p.image" :src="p.image" :alt="`${p.name} screenshot`" width="1440" height="900" class="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
					</div>
					<div class="flex flex-col gap-4 p-2 md:p-4">
						<span class="w-fit rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">{{ p.tag }}</span>
						<h2 class="text-3xl font-extrabold tracking-tight md:text-4xl">{{ p.name }}</h2>
						<p class="leading-relaxed text-neutral-500">{{ p.description }}</p>
						<span class="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-transform group-hover:scale-[1.03]">
							Open {{ p.name }} <Icon name="ph:arrow-up-right" aria-hidden="true" />
						</span>
					</div>
				</a>
			</div>

			<div class="mt-12 flex justify-center">
				<a :href="LINKS.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-50">
					<Icon name="ph:github-logo" class="text-lg" aria-hidden="true" /> Follow us on GitHub
				</a>
			</div>
		</main>
		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
import { LINKS, PROJECTS } from "~/data/site";

const host = (url: string) => new URL(url).host;

const title = "Products | Aethereal";
const description = "Products built by Aethereal.";
useSeoMeta({ title, ogTitle: title, twitterTitle: title, description, ogDescription: description, twitterDescription: description });
</script>
