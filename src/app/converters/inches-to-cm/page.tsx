import { Metadata } from "next";
import { getToolBySlug, getRelatedTools } from "@/data/tools";
import { buildToolMetadata } from "@/lib/seo";
import { buildToolWebAppSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import ToolPageLayout from "@/components/tools/tool-page-layout";
import InchesToCmTool from "@/features/converters/inches-to-cm/inches-to-cm-tool";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const tool = getToolBySlug("converters", "inches-to-cm");

  if (!tool) {
    return {
      title: "Inches to CM",
      description: "Convert inches to centimeters.",
    };
  }

  return buildToolMetadata(tool);
}

export default function InchesToCmPage() {
  const tool = getToolBySlug("converters", "inches-to-cm");
  
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
        <InchesToCmTool />
      </ToolPageLayout>
    </>
  );
}
