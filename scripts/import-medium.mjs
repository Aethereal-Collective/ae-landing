// Pull Aethereal's Medium posts into content/blog as Markdown posts.
// Re-runnable: existing files are never overwritten, so edits made here stick.
// Usage: npm run import:medium
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import TurndownService from "turndown";

const FEED = "https://medium.com/feed/@aethereal_co";
const OUT = new URL("../content/research/", import.meta.url);

// Category per post slug. Anything new defaults to "view"; change it in the file's frontmatter.
const CATEGORY = {
	"kenapa-dulu-ethereum-perlu-l2": "breakdown",
	"dibalik-besarnya-revenue-stablecoin-issuer": "view",
	"teori-liar-mengakali-tokenomic-dan-token-unlock": "view",
	"merangkum-alasan-kenapa-banyak-project-mati-tiap-bear-market": "breakdown",
	"apa-iya-makin-besar-tvl-bakal-makin-besar-revenuenya": "breakdown",
	"mercenary-capital-dan-konsekuensinya": "breakdown",
};

const cdata = (s = "") => s.replace(/^<!\[CDATA\[|\]\]>$/g, "").trim();
const tag = (xml, name) => cdata(xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);
const titleCase = (s) => s.replace(/(^|-)\w/g, (m) => m.toUpperCase()).replace(/-/g, " ");

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
turndown.remove((node) => node.nodeName === "IMG" && /medium\.com\/_\/stat/.test(node.getAttribute("src") || ""));

const xml = await (await fetch(FEED)).text();
mkdirSync(OUT, { recursive: true });

let added = 0;
for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
	const url = tag(item, "link").split("?")[0];
	const slug = url.split("/").pop().replace(/-[0-9a-f]{8,12}$/, "");
	const file = new URL(`${slug}.md`, OUT);
	if (existsSync(file)) continue;

	let html = tag(item, "content:encoded");
	const cover = html.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
	html = html.replace(/<figure>[\s\S]*?<\/figure>/, ""); // first figure becomes the cover
	// Medium's large/small headings are h3/h4; promote them to h2/h3 so they form the table of contents.
	const body = turndown
		.turndown(html)
		.replace(/^(#{3,4}) (.*)$/gm, (_, hashes, text) => `${hashes.slice(1)} ${text.replace(/\*\*/g, "").trim()}`)
		.trim();
	const firstPara = body.split(/\n\n/).find((p) => !p.startsWith("#") && !p.startsWith("!") && p.length > 40) ?? "";
	const summary = firstPara.replace(/[*_`[\]]/g, "").replace(/\(http[^)]*\)/g, "").slice(0, 180).replace(/\s+\S*$/, "") + "…";

	const front = {
		title: tag(item, "title"),
		date: new Date(tag(item, "pubDate")).toISOString().slice(0, 10),
		category: CATEGORY[slug] ?? "view",
		topic: titleCase(tag(item, "category") || "crypto"),
		summary,
		...(cover && { cover }),
		source: url,
	};
	const yaml = Object.entries(front).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n");
	writeFileSync(file, `---\n${yaml}\n---\n\n${body}\n`);
	console.log("added", slug, `(${front.category})`);
	added++;
}
console.log(`${added} new report(s).`);
