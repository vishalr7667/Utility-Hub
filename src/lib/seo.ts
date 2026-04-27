import { Metadata } from "next";
import { Tool, ToolCategoryMeta } from "@/types/tool";

const SITE_URL = "https://www.utilityhub.tools";

export function buildToolMetadata(tool: Tool): Metadata {
  const title = tool.metaTitle || tool.name;
  const description = tool.metaDescription || tool.description;
  const url = `${SITE_URL}${tool.path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Utility Hub",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildCategoryMetadata(categoryMeta: ToolCategoryMeta): Metadata {
  const title = categoryMeta.metaTitle;
  const description = categoryMeta.metaDescription;
  const url = `${SITE_URL}${categoryMeta.path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Utility Hub",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
