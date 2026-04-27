import { Metadata } from "next";
import { getCategoryMeta, getToolsByCategory } from "@/data/tools";
import { buildCategoryMetadata } from "@/lib/seo";
import CategoryPageLayout from "@/components/tools/category-page-layout";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getCategoryMeta("calculators");
  if (!meta) return { title: "Calculators" };
  return buildCategoryMetadata(meta);
}

export default function CalculatorsPage() {
  const meta = getCategoryMeta("calculators");
  if (!meta) notFound();

  const tools = getToolsByCategory("calculators");

  return <CategoryPageLayout categoryMeta={meta} tools={tools} />;
}
