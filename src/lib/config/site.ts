export type SocialLink = {
	title: string;
	href: string;
};

export const siteConfig = {
	title: "rajeev atla",
	tagline: "AI/ML engineer",
	description:
		"exploring large-scale AI systems, multimodal models, and intelligent tooling",
	email: "rajeev@rajeevatla.com",
	socials: <SocialLink[]>[
		{ title: "github", href: "https://github.com/RajeevAtla" },
		{ title: "linkedin", href: "https://www.linkedin.com/in/rajeev-atla" },
		{ title: "blog", href: "https://rajeevatla.com/blog" },
	],
};
