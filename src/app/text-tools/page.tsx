import { Metadata } from "next";
import { getCategoryMeta, getToolsByCategory } from "@/data/tools";
import { buildCategoryMetadata } from "@/lib/seo";
import CategoryPageLayout from "@/components/tools/category-page-layout";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getCategoryMeta("text-tools");
  if (!meta) return { title: "Text Tools" };
  return buildCategoryMetadata(meta);
}

export default function TextToolsPage() {
  const meta = getCategoryMeta("text-tools");
  if (!meta) notFound();

  const tools = getToolsByCategory("text-tools");

  return <CategoryPageLayout categoryMeta={meta} tools={tools} />;
}
