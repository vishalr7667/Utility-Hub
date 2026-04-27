import { Tool } from "@/types/tool";
import { categoryLabels } from "@/data/tools";

const SITE_URL = "https://www.utilityhub.tools";

export function buildToolWebAppSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.metaDescription || tool.description,
    "url": `${SITE_URL}${tool.path}`,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
  };
}

export function buildFaqSchema(tool: Tool) {
  if (!tool.faqs || tool.faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryLabels[tool.category],
        "item": `${SITE_URL}/${tool.category}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tool.name,
        "item": `${SITE_URL}${tool.path}`,
      },
    ],
  };
}
