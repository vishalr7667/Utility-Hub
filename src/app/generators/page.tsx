import { Metadata } from "next";
import { getCategoryMeta, getToolsByCategory } from "@/data/tools";
import { buildCategoryMetadata } from "@/lib/seo";
import CategoryPageLayout from "@/components/tools/category-page-layout";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getCategoryMeta("generators");
  if (!meta) return { title: "Generators" };
  return buildCategoryMetadata(meta);
}

export default function GeneratorsPage() {
  const meta = getCategoryMeta("generators");
  if (!meta) notFound();

  const tools = getToolsByCategory("generators");

  return <CategoryPageLayout categoryMeta={meta} tools={tools} />;
}
