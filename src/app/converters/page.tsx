import { Metadata } from "next";
import { getCategoryMeta, getToolsByCategory } from "@/data/tools";
import { buildCategoryMetadata } from "@/lib/seo";
import CategoryPageLayout from "@/components/tools/category-page-layout";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getCategoryMeta("converters");
  if (!meta) return { title: "Converters" };
  return buildCategoryMetadata(meta);
}

export default function ConvertersPage() {
  const meta = getCategoryMeta("converters");
  if (!meta) notFound();

  const tools = getToolsByCategory("converters");

  return <CategoryPageLayout categoryMeta={meta} tools={tools} />;
}
