import Link from "next/link";
import SectionHeading from "@/components/shared/section-heading";
import ToolCard from "@/components/tools/tool-card";
import { tools, getToolsByCategory, categoryLabels, toolCategories } from "@/data/tools";
import { ToolCategory } from "@/types/tool";

export default function Home() {
  const categories: ToolCategory[] = ["calculators", "converters", "text-tools", "generators"];

  const categoryIcons: Record<ToolCategory, string> = {
    calculators: "🧮",
    converters: "🔄",
    "text-tools": "📝",
    generators: "⚡",
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-bg-elevated)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl bg-indigo-300" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl bg-purple-300" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight animate-fade-up">
            <span className="gradient-text">Utility Hub</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Free online tools for everyday tasks. Calculators, converters, text tools, and generators — all in one place.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
      </section>

      {/* Category Summary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 stagger-children">
          {categories.map((catKey) => {
            const count = getToolsByCategory(catKey).length;
            const meta = toolCategories.find((c) => c.key === catKey);
            if (!meta) return null;

            return (
              <Link 
                key={catKey} 
                href={meta.path}
                className="glass-card p-6 text-center group"
              >
                <span className="text-3xl mb-3 block">{categoryIcons[catKey]}</span>
                <span className="block text-3xl font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {count}
                </span>
                <span className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider font-semibold">
                  {meta.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Dynamic Tool Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">
        {categories.map((catKey) => {
          const categoryTools = getToolsByCategory(catKey);
          const meta = toolCategories.find((c) => c.key === catKey);
          if (categoryTools.length === 0 || !meta) return null;

          return (
            <section key={catKey} id={catKey}>
              <SectionHeading 
                title={meta.label} 
                description={meta.description} 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
