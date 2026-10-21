// llms.txt: a plain-text map of the site for AI assistants and answer engines. Research posts come from Nuxt Content.
import { FOCUS_AREAS, PROJECTS } from "~/data/site";

const SITE = "https://aethereal.top";

export default defineEventHandler(async (event) => {
	const reports = await queryCollection(event, "research").order("date", "DESC").all();
	setResponseHeader(event, "content-type", "text/plain; charset=utf-8");
	return [
		"# Aethereal",
		"",
		"> Aethereal (æthereal) is an Indonesia-based technology organization founded in 2023. It builds products and publishes research across AI, data science, blockchain, and fintech.",
		"",
		"Contact: aethereal.hq@gmail.com. X: https://x.com/aethereal_co. GitHub: https://github.com/Aethereal-Collective. Discord: https://discord.gg/aethereal.",
		"",
		"## Products",
		"",
		...PROJECTS.map((p) => `- [${p.name}](${p.url}): ${p.description} (${p.tag})`),
		"",
		"## What we work on",
		"",
		...FOCUS_AREAS.map((f) => `- ${f.name}: ${f.description}`),
		"",
		"## Research",
		"",
		`Index: ${SITE}/research`,
		"",
		...reports.map((r) => `- [${r.title}](${r.source ?? SITE + r.path}) (${String(r.date).slice(0, 10)}): ${r.summary}`),
		"",
		"## Pages",
		"",
		`- [About](${SITE}/about)`,
		`- [Products](${SITE}/products)`,
		`- [Research](${SITE}/research)`,
		"",
	].join("\n");
});
