<template>
	<section v-if="reports.length" id="blog" class="w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="Blog" title="Notes, written" accent="in plain language." subtitle="Our writing on crypto markets, tokenomics, and onchain business models." />

		<div class="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<NuxtLink v-for="(r, i) in reports" :key="r.path" :to="r.path" class="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]" data-aos="fade-up" :data-aos-delay="i * 80">
				<div class="aspect-[16/9] overflow-hidden bg-neutral-100">
					<img v-if="r.cover" :src="r.cover" :alt="r.title" loading="lazy" class="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
				</div>
				<div class="flex flex-1 flex-col gap-3 p-6">
					<ReportMeta :report="r" />
					<h3 class="text-lg font-bold leading-snug tracking-tight text-neutral-950">{{ r.title }}</h3>
					<p class="text-sm leading-relaxed text-neutral-500">{{ r.summary }}</p>
				</div>
			</NuxtLink>
		</div>

		<div class="mt-12 flex justify-center">
			<NuxtLink to="/blog" class="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">All posts</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
const { data: reports } = await useAsyncData("blog-latest", () => queryCollection("blog").order("date", "DESC").limit(3).all(), { default: () => [] });
</script>
