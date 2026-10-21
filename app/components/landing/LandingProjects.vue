<template>
	<section id="products" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Products" title="What we" accent="build." />

		<div class="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
			<a
				v-for="p in PROJECTS"
				:key="p.name"
				:href="p.url"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
				data-aos="fade-up"
			>
				<div class="overflow-hidden rounded-[1.4rem] border border-neutral-200 bg-white">
					<div class="flex items-center gap-1.5 border-b border-neutral-200 px-4 py-2.5" aria-hidden="true">
						<span class="size-2 rounded-full bg-neutral-300" /><span class="size-2 rounded-full bg-neutral-300" /><span class="size-2 rounded-full bg-neutral-300" />
						<span class="ml-2 truncate rounded-full bg-neutral-100 px-3 py-0.5 text-[11px] text-neutral-400">{{ host(p.url) }}</span>
					</div>
					<NuxtImg :src="p.image" :alt="`${p.name} screenshot`" width="720" height="450" loading="lazy" class="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
				</div>
				<div class="flex flex-1 items-end justify-between gap-4 px-3 pb-3 pt-6">
					<div>
						<span class="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">{{ p.tag }}</span>
						<h3 class="mt-1 text-2xl font-extrabold tracking-tight text-neutral-950">{{ p.name }}</h3>
						<p class="mt-2 text-neutral-500">{{ p.description }}</p>
					</div>
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-neutral-950 text-white transition-transform group-hover:rotate-45" aria-hidden="true">
						<Icon name="ph:arrow-up-right" />
					</span>
				</div>
			</a>
		</div>

		<div class="mt-10 flex justify-center">
			<NuxtLink to="/products" class="rounded-full border border-neutral-200 px-7 py-3.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-50">All products</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { PROJECTS } from "~/data/site";

const host = (url: string) => new URL(url).host;
</script>
