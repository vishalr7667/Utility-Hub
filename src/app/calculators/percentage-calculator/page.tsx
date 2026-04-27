import { Metadata } from "next";
import { getToolBySlug, getRelatedTools } from "@/data/tools";
import { buildToolMetadata } from "@/lib/seo";
import { buildToolWebAppSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import ToolPageLayout from "@/components/tools/tool-page-layout";
import PercentageCalculatorTool from "@/features/calculators/percentage-calculator/percentage-calculator-tool";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolBySlug("calculators", "percentage-calculator");

  if (!tool) {
    return {
      title: "Percentage Calculator",
      description: "Calculate percentages online.",
    };
  }

  return buildToolMetadata(tool);
}

export default function PercentageCalculatorPage() {
  const tool = getToolBySlug("calculators", "percentage-calculator");
  
  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(tool);

  // Build JSON-LD schemas
  const webAppSchema = buildToolWebAppSchema(tool);
  const faqSchema = buildFaqSchema(tool);
  const breadcrumbSchema = buildBreadcrumbSchema(tool);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <ToolPageLayout tool={tool} relatedTools={relatedTools}>
        <PercentageCalculatorTool />
      </ToolPageLayout>
    </>
  );
}
