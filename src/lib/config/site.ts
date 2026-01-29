export type SocialLink = {
	title: string;
	href: string;
};

export const siteConfig = {
	title: "Rajeev Atla",
	tagline: "Machine learning engineer & Rutgers MS student",
	description:
		"Exploring large-scale AI systems, multimodal models, and intelligent tooling.",
	email: "rajeev@rajeevatla.com",
	socials: <SocialLink[]>[
		{ title: "GitHub", href: "https://github.com/RajeevAtla" },
		{ title: "LinkedIn", href: "https://www.linkedin.com/in/rajeev-atla" },
		{ title: "Resume", href: "https://rajeevatla.com/resume/resume.pdf" },
		{ title: "Blog", href: "https://rajeevatla.com/blog" },
	],
};
