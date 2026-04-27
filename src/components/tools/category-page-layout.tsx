import Link from "next/link";
import { Tool, ToolCategoryMeta } from "@/types/tool";
import ToolCard from "./tool-card";

interface CategoryPageLayoutProps {
  categoryMeta: ToolCategoryMeta;
  tools: Tool[];
}

export default function CategoryPageLayout({ categoryMeta, tools }: CategoryPageLayoutProps) {
  return (
    <main className="min-h-screen pb-24" style={{ background: "var(--color-bg)" }}>
      {/* Breadcrumbs */}
      <div style={{ background: "var(--color-bg-elevated)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm font-medium text-[var(--color-text-muted)] gap-1.5">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors duration-200">Home</Link>
            <span className="text-[var(--color-border)]">/</span>
            <span className="text-[var(--color-text-primary)] font-semibold">{categoryMeta.label}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <header className="mb-14 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 gradient-text-subtle">
            {categoryMeta.label}
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            {categoryMeta.intro}
          </p>
        </header>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* Bottom Note */}
        <footer className="border-t pt-12 text-center" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-[var(--color-text-muted)] italic">
            Explore free online {categoryMeta.label.toLowerCase()} tools designed for quick and easy use.
          </p>
        </footer>
      </div>
    </main>
  );
}
