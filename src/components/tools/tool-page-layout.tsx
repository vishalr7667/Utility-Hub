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
    <main className="min-h-screen pb-24" style={{ background: "var(--color-bg)" }}>
      {/* Breadcrumbs */}
      <div style={{ background: "var(--color-bg-elevated)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center text-sm font-medium text-[var(--color-text-muted)] gap-1.5">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors duration-200">Home</Link>
            <span className="text-[var(--color-border)]">/</span>
            <span>{categoryLabels[tool.category]}</span>
            <span className="text-[var(--color-border)]">/</span>
            <span className="text-[var(--color-text-primary)] font-semibold">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <header className="mb-12 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 gradient-text-subtle">
            {tool.name}
          </h1>
          {tool.intro && (
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              {tool.intro}
            </p>
          )}
        </header>

        {/* Tool UI Block */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="glass-card p-6 sm:p-10 !transform-none">
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
