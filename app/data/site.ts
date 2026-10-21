// Real links and project data shown on the landing page. Keep every entry verifiable.

export const LINKS = {
	discord: "https://discord.gg/aethereal",
	x: "https://x.com/aethereal_co",
	linkedin: "https://www.linkedin.com/company/aethereal-collective",
	github: "https://github.com/Aethereal-Collective",
	medium: "https://medium.com/@aethereal_co",
	email: "mailto:aethereal.hq@gmail.com",
	brandAssets: "https://www.dropbox.com/scl/fo/uvr9qn3ki94wm99zh012j/AEOCG77wwtESqiQHU5rr8LE?rlkey=itwrpsogfbvbovwci4xalvz8g&st=3hbkq67j&dl=0",
};

export const FOCUS_AREAS = [
	{
		icon: "ph:brain-light",
		name: "Artificial Intelligence",
		description: "Practical AI products and learning paths, from prompting to agentic workflows.",
		class: "md:col-span-2",
	},
	{
		icon: "ph:chart-line-up-light",
		name: "Data Science",
		description: "End-to-end data work: collection, cleaning, analysis, and clear visualization of onchain and market data.",
		class: "md:col-span-1",
	},
	{
		icon: "ph:cube-light",
		name: "Blockchain",
		description: "Smart contracts, onchain apps, and infrastructure across Ethereum, Solana, Base, Aptos, and more.",
		class: "md:col-span-1",
	},
	{
		icon: "ph:wallet-light",
		name: "Fintech",
		description: "Money apps that feel simple: payments, savings, and yield.",
		class: "md:col-span-2",
	},
];

export const PROJECTS = [
	{
		name: "Halt",
		tag: "Browser extension",
		description: "Blocks crypto phishing sites and holds back dangerous wallet requests.",
		url: "https://halt.aethereal.top/en",
		image: "/image/halt.webp",
	},
	{
		name: "Aethereal Data",
		tag: "Data platform",
		description: "Free stock, crypto, and macro datasets as CSV, Parquet, and MCP for AI assistants.",
		url: "https://dataset.aethereal.top",
		image: "/image/dataset.webp",
	},
];

export const ECOSYSTEM = [
	{ icon: "simple-icons:ethereum", name: "Ethereum" },
	{ icon: "simple-icons:solana", name: "Solana" },
	{ icon: "simple-icons:binance", name: "BNB Chain" },
	{ icon: "simple-icons:polygon", name: "Polygon" },
	{ icon: "simple-icons:chainlink", name: "Chainlink" },
	{ icon: "simple-icons:claude", name: "Claude" },
	{ icon: "simple-icons:python", name: "Python" },
	{ icon: "simple-icons:jupyter", name: "Jupyter" },
	{ icon: "simple-icons:typescript", name: "TypeScript" },
	{ icon: "simple-icons:vuedotjs", name: "Vue" },
	{ icon: "simple-icons:nuxt", name: "Nuxt" },
	{ icon: "simple-icons:cloudflare", name: "Cloudflare" },
];

export const PROCESS = [
	{ step: "01", title: "Research", body: "We start from data: onchain activity, market structure, and regulation." },
	{ step: "02", title: "Build", body: "We ship small, useful products fast, then harden the ones people use." },
	{ step: "03", title: "Share", body: "We publish what we learn, in Bahasa Indonesia and English." },
];

export const FAQ = [
	{
		q: "What is Aethereal?",
		a: "Aethereal (æthereal) is a technology organization based in Indonesia, founded in 2023. We build products and publish research across AI, data science, blockchain, and fintech.",
	},
	{
		q: "What products does Aethereal build?",
		a: "Halt, a free browser extension that blocks crypto phishing sites and holds back dangerous wallet requests (halt.aethereal.top), and Aethereal Data, free stock, crypto, and macro datasets as CSV, Parquet, and an MCP server for AI assistants (dataset.aethereal.top).",
	},
	{
		q: "Do you give investment advice?",
		a: "No. Our articles and tools are for education and research only.",
	},
	{
		q: "How can I join the community?",
		a: "Join our Discord to meet the community, and follow us on X, LinkedIn, and Medium for new projects and insights.",
	},
	{
		q: "How do I work with Aethereal?",
		a: "Email aethereal.hq@gmail.com with what you have in mind: partnerships, research, or building something together.",
	},
];

// Partner projects. Screenshots live in public/image/partners/ (1440×900 webp).
export const PARTNERS = [
	{
		name: "EVM Shaker",
		tagline: "Liquidity. In your hands.",
		description: "A multichain liquidity workspace for tracking positions, value over time, and unclaimed fees.",
		chains: ["Ethereum", "Base", "BNB Chain", "Robinhood", "Arc"],
		image: "/image/partners/evmshaker.webp",
		url: "https://app.evmshaker.io/app",
	},
];
