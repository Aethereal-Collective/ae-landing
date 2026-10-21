<template>
	<footer class="w-full border-t border-neutral-200 bg-neutral-50 px-4 pt-16 pb-8">
		<div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
			<div>
				<NuxtLink to="/" class="flex items-center gap-2 text-lg font-extrabold tracking-tight text-neutral-950">
					<NuxtImg src="/logo.jpg" alt="Aethereal logo" width="28" height="28" class="size-7 rounded-full" loading="lazy" />
					æthereal
				</NuxtLink>
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">An Indonesia-based organization working on AI, data science, blockchain, and fintech.</p>
			</div>

			<div v-for="col in columns" :key="col.title">
				<h3 class="text-sm font-semibold text-neutral-950">{{ col.title }}</h3>
				<ul class="mt-4 space-y-3 text-sm text-neutral-500">
					<li v-for="l in col.links" :key="l.label">
						<NuxtLink v-if="l.to" :to="l.to" class="hover:text-neutral-950">{{ l.label }}</NuxtLink>
						<a v-else :href="l.href" target="_blank" rel="noopener noreferrer" class="hover:text-neutral-950">{{ l.label }}</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-400 md:flex-row">
			<p>&copy; {{ new Date().getFullYear() }} Aethereal (æthereal). All rights reserved.</p>
			<p>Not financial advice. Do your own research.</p>
		</div>
		<p aria-hidden="true" class="chrome-text mx-auto mt-10 max-w-6xl select-none text-center text-[clamp(4rem,18vw,15rem)] font-extrabold leading-none tracking-[-0.05em] opacity-60">æthereal</p>
	</footer>
</template>

<script setup lang="ts">
import { LINKS, PROJECTS } from "~/data/site";

const columns = [
	{
		title: "Organization",
		links: [
			{ label: "About", to: "/about" },
			{ label: "Products", to: "/products" },
			{ label: "Partners", to: "/#partners" },
			{ label: "Research", to: "/research" },
		],
	},
	{
		title: "Products",
		links: PROJECTS.map((p) => ({ label: p.name, href: p.url })),
	},
	{
		title: "Community",
		links: [
			{ label: "Discord", href: LINKS.discord },
			{ label: "X / Twitter", href: LINKS.x },
			{ label: "LinkedIn", href: LINKS.linkedin },
			{ label: "GitHub", href: LINKS.github },
			{ label: "Medium", href: LINKS.medium },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "FAQ", to: "/#faq" },
			{ label: "Brand Assets", href: LINKS.brandAssets },
			{ label: "Contact", href: LINKS.email },
		],
	},
];
</script>
