<template>
	<section class="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-white px-4 pb-20 pt-32">
		<ChromeBlobs class="opacity-90 md:opacity-100" />
		<div class="pointer-events-none absolute inset-x-0 top-1/2 h-[70%] -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.92),transparent)] md:hidden" aria-hidden="true" />

		<div class="relative z-10 flex max-w-4xl flex-col items-center text-center">
			<h1 class="text-[clamp(3.25rem,11vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-neutral-950">
				<span class="sr-only">Aethereal: </span>
				Onchain
				<span class="chrome-text block pb-2">Intelligence</span>
			</h1>

			<p class="mt-8 max-w-xl text-lg leading-relaxed text-neutral-500 md:text-xl">
				Aethereal is an Indonesia-based organization turning AI and data into simple, safe tools for the onchain economy.
			</p>

			<div class="mt-4 h-7 text-base text-neutral-400 md:h-8 md:text-lg">
				Built for
				<InspiraFlipWords :words="audiences" :duration="2600" class="font-semibold !text-neutral-900" />
			</div>

			<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
				<NuxtLink to="/products" class="rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform hover:scale-[1.03]">Explore Products</NuxtLink>
				<NuxtLink to="/blog" class="rounded-full border border-neutral-200 bg-white/80 px-8 py-4 text-base font-semibold text-neutral-950 backdrop-blur transition-colors hover:bg-neutral-50">Read the Blog</NuxtLink>
			</div>
		</div>

		<NuxtLink to="/#ecosystem" class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400" aria-label="Scroll down">
			<Icon name="ph:mouse-simple-light" class="animate-bounce text-2xl" aria-hidden="true" />
		</NuxtLink>
	</section>
</template>

<script setup lang="ts">
const audiences = ["crypto investors", "data scientists", "onchain builders", "Indonesia"];
</script>
