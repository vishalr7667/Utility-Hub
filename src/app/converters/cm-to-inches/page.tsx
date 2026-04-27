import { Metadata } from "next";
import { getToolBySlug, getRelatedTools } from "@/data/tools";
import { buildToolMetadata } from "@/lib/seo";
import { buildToolWebAppSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import ToolPageLayout from "@/components/tools/tool-page-layout";
import CmToInchesTool from "@/features/converters/cm-to-inches/cm-to-inches-tool";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolBySlug("converters", "cm-to-inches");

  if (!tool) {
    return {
      title: "CM to Inches",
      description: "Convert centimeters to inches.",
    };
  }

  return buildToolMetadata(tool);
}

export default function CmToInchesPage() {
  const tool = getToolBySlug("converters", "cm-to-inches");
  
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
        <CmToInchesTool />
      </ToolPageLayout>
    </>
  );
}
