import { Tool, ToolCategoryMeta } from "@/types/tool";
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

export function buildFaqSchema(tool: Tool | { faqs: Array<{ question: string; answer: string }> }) {
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

export function buildCategoryCollectionPageSchema(categoryMeta: ToolCategoryMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categoryMeta.label,
    "description": categoryMeta.metaDescription,
    "url": `${SITE_URL}${categoryMeta.path}`,
  };
}

export function buildCategoryItemListSchema(tools: Tool[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.name,
      "url": `${SITE_URL}${tool.path}`,
    })),
  };
}

export function buildCategoryBreadcrumbSchema(categoryMeta: ToolCategoryMeta) {
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
        "name": categoryMeta.label,
        "item": `${SITE_URL}${categoryMeta.path}`,
      },
    ],
  };
}
