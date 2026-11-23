<template>
	<section id="faq" class="cv-auto w-full scroll-mt-24 bg-white px-4 py-24 md:py-32">
		<LandingHeading eyebrow="FAQ" title="Questions," accent="answered." />

		<div class="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
			<details v-for="item in FAQ" :key="item.q" class="group rounded-2xl border border-neutral-200 bg-white px-6 py-5 open:bg-neutral-50">
				<summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-neutral-950">
					{{ item.q }}
					<Icon name="ph:plus" class="shrink-0 text-xl text-neutral-400 transition-transform group-open:rotate-45" aria-hidden="true" />
				</summary>
				<p class="mt-3 leading-relaxed text-neutral-500">{{ item.a }}</p>
			</details>
		</div>
	</section>
</template>

<script setup lang="ts">
import { FAQ } from "~/data/site";

// FAQ rich results for search.
useHead({
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
			}),
		},
	],
});
</script>
