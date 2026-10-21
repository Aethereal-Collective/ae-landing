<template>
	<footer class="w-full border-t border-neutral-200 bg-neutral-50 px-4 pt-16 pb-8">
		<div class="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-start">
			<div>
				<NuxtLink to="/" class="flex items-center gap-2 text-lg font-extrabold tracking-tight text-neutral-950">
					<NuxtImg src="/logo.jpg" alt="Aethereal logo" width="28" height="28" class="size-7 rounded-full" loading="lazy" />
					æthereal
				</NuxtLink>
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">An Indonesia-based organization working on AI, data science, blockchain, and fintech.</p>
			</div>
			<div class="flex gap-2">
				<a v-for="s in SOCIAL" :key="s.label" :href="s.href" :aria-label="s.label" target="_blank" rel="noopener noreferrer" class="grid size-10 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:text-neutral-950">
					<Icon :name="s.icon" class="text-lg" />
				</a>
			</div>
		</div>

		<div class="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-400 md:flex-row">
			<p>&copy; {{ new Date().getFullYear() }} Aethereal. All rights reserved.</p>
			<p>Not financial advice. Do your own research.</p>
		</div>
		<p aria-hidden="true" class="chrome-text mx-auto mt-10 max-w-6xl select-none text-center text-[clamp(4rem,18vw,15rem)] font-extrabold leading-none tracking-[-0.05em] opacity-60">æthereal</p>
	</footer>
</template>

<script setup lang="ts">
import { LINKS } from "~/data/site";

const SOCIAL = [
	{ label: "Discord", href: LINKS.discord, icon: "ph:discord-logo" },
	{ label: "X", href: LINKS.x, icon: "ph:x-logo" },
	{ label: "LinkedIn", href: LINKS.linkedin, icon: "ph:linkedin-logo" },
	{ label: "GitHub", href: LINKS.github, icon: "ph:github-logo" },
	{ label: "Medium", href: LINKS.medium, icon: "ph:medium-logo" },
	{ label: "Email", href: LINKS.email, icon: "ph:envelope-simple" },
];
</script>
