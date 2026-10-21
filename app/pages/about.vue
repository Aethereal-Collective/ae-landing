<template>
	<div class="bg-white text-neutral-950">
		<LandingNav />
		<main class="w-full flex flex-col items-center px-5 pt-32 pb-20 md:pt-40">
			<article class="w-full max-w-3xl flex flex-col gap-12">
				<header class="flex flex-col gap-4">
					<h1 class="text-4xl md:text-6xl font-black">About Aethereal</h1>
					<p class="text-lg md:text-xl opacity-70 leading-relaxed">
						Aethereal (æthereal) is a technology organization based in Indonesia, founded in 2023. We work across artificial intelligence, data science, blockchain, and fintech, and we build open-source developer tools that anyone can use.
					</p>
				</header>

				<section class="flex flex-col gap-6">
					<h2 class="text-2xl md:text-3xl font-semibold">What We Do</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div v-for="area in areas" :key="area.title" class="flex flex-col gap-2">
							<h3 class="text-lg font-semibold">{{ area.title }}</h3>
							<p class="opacity-70 leading-relaxed">{{ area.body }}</p>
						</div>
					</div>
				</section>

				<section class="flex flex-col gap-4">
					<h2 class="text-2xl md:text-3xl font-semibold">Our Mission</h2>
					<p class="opacity-70 leading-relaxed">
						We want more people in Indonesia and Southeast Asia to build with modern technology. We learn by shipping real projects, then share the code, the data, and what we learned so the next builder can start faster than we did.
					</p>
				</section>

				<section class="flex flex-col gap-4">
					<h2 class="text-2xl md:text-3xl font-semibold">Contact</h2>
					<p class="opacity-70 leading-relaxed">
						Email us at <a href="mailto:team@aethereal.top" class="underline">team@aethereal.top</a>, or reach us on <a href="https://x.com/aethereal_co" target="_blank" rel="noopener noreferrer" class="underline">X</a> and <a href="https://github.com/Aethereal-Collective" target="_blank" rel="noopener noreferrer" class="underline">GitHub</a>.
					</p>
				</section>

				<NuxtLink to="/" class="opacity-70 hover:underline">← Back to home</NuxtLink>
			</article>
		</main>

		<LandingFooter />
	</div>
</template>

<script setup lang="ts">
const title = "About Aethereal: AI, Data Science & Blockchain Organization in Indonesia";
const description = "Learn about Aethereal, an Indonesia-based tech organization founded in 2023 working on AI, data science, blockchain, fintech, and open-source developer tools.";

useSeoMeta({ title, ogTitle: title, twitterTitle: title, description, ogDescription: description, twitterDescription: description });

const areas = [
	{ title: "Artificial Intelligence", body: "Building and teaching practical AI applications, from prompting and tool use to agentic workflows." },
	{ title: "Data Science", body: "End-to-end data projects: collection, cleaning, analysis, modeling, and clear visualization." },
	{ title: "Blockchain", body: "Running blockchain infrastructure and analyzing on-chain data to understand how networks are used." },
	{ title: "Fintech", body: "Data-driven tools that help people understand markets and make better financial decisions." },
];

</script>
