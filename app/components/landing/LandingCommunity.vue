<template>
	<section id="community" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Community" title="Amazing" accent="communities." subtitle="Crypto communities we love following and learning with." />

		<div class="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<a
				v-for="c in COMMUNITIES"
				:key="c.handle"
				:href="c.url"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col items-center rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
				data-aos="fade-up"
			>
				<NuxtImg :src="c.image" :alt="`${c.name} logo`" width="96" height="96" loading="lazy" class="size-24 rounded-full border border-neutral-200 object-cover" />
				<h3 class="mt-5 text-xl font-extrabold tracking-tight text-neutral-950">{{ c.name }}</h3>
				<p class="mt-1 text-sm text-neutral-400">@{{ c.handle }}</p>
				<span class="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-transform group-hover:scale-[1.03]">
					<Icon name="ph:x-logo" aria-hidden="true" /> Follow
				</span>
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
import { COMMUNITIES } from "~/data/site";
</script>
