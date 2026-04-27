import Link from "next/link";
import { Tool } from "@/types/tool";
import { categoryLabels } from "@/data/tools";
import HowToUse from "./how-to-use";
import FAQSection from "./faq-section";
import RelatedTools from "./related-tools";

interface ToolPageLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  relatedTools: Tool[];
}

export default function ToolPageLayout({ tool, children, relatedTools }: ToolPageLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{categoryLabels[tool.category]}</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {tool.name}
          </h1>
          {tool.intro && (
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {tool.intro}
            </p>
          )}
        </header>

        {/* Tool UI Block */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            {children}
          </div>
        </section>

        <div className="space-y-16">
          {tool.howToUse && <HowToUse steps={tool.howToUse} />}
          {tool.faqs && <FAQSection faqs={tool.faqs} />}
          <RelatedTools tools={relatedTools} />
        </div>
      </div>
    </main>
  );
}
