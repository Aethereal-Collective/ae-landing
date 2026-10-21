<template>
	<header class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
		<nav class="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-neutral-200/80 bg-white/70 py-2 pl-4 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl" aria-label="Main">
			<NuxtLink to="/" class="flex items-center gap-2 font-extrabold tracking-tight text-neutral-950">
				<NuxtImg src="/logo.jpg" alt="Aethereal logo" width="28" height="28" class="size-7 rounded-full" />
				<span>æthereal</span>
			</NuxtLink>

			<ul class="hidden items-center gap-1 text-sm font-medium text-neutral-600 md:flex">
				<li v-for="link in links" :key="link.to">
					<NuxtLink :to="link.to" class="rounded-full px-3 py-2 transition-colors hover:bg-neutral-100 hover:text-neutral-950">{{ link.label }}</NuxtLink>
				</li>
			</ul>

			<div class="flex items-center gap-2">
				<a :href="LINKS.discord" target="_blank" rel="noopener noreferrer" class="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex">Join Discord</a>
				<button type="button" class="inline-flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 md:hidden" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
					<Icon :name="open ? 'ph:x' : 'ph:list'" class="text-xl" />
				</button>
			</div>
		</nav>

		<div v-if="open" class="absolute inset-x-4 top-16 rounded-3xl border border-neutral-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
			<NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="block rounded-2xl px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-100" @click="open = false">{{ link.label }}</NuxtLink>
			<a :href="LINKS.discord" target="_blank" rel="noopener noreferrer" class="mt-2 block rounded-2xl bg-neutral-950 px-4 py-3 text-center font-semibold text-white">Join Discord</a>
		</div>
	</header>
</template>

<script setup lang="ts">
import { LINKS } from "~/data/site";

const open = ref(false);
const links = [
	{ label: "What We Do", to: "/#focus" },
	{ label: "Products", to: "/products" },
	{ label: "Partners", to: "/#partners" },
	{ label: "Research", to: "https://research.aethereal.top" },
	{ label: "Blog", to: "/blog" },
	{ label: "Data", to: "https://dataset.aethereal.top" },
	{ label: "About", to: "/about" },
];
</script>
