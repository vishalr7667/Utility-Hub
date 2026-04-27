import Link from "next/link";
import SectionHeading from "@/components/shared/section-heading";
import ToolCard from "@/components/tools/tool-card";
import { tools, getToolsByCategory, categoryLabels, toolCategories } from "@/data/tools";
import { ToolCategory } from "@/types/tool";

export default function Home() {
  const categories: ToolCategory[] = ["calculators", "converters", "text-tools", "generators"];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Utility Hub
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Free online tools for everyday tasks. Access our collection of calculators, 
            converters, text tools, and generators instantly.
          </p>
        </div>
      </section>

      {/* Category Summary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((catKey) => {
            const count = getToolsByCategory(catKey).length;
            const meta = toolCategories.find((c) => c.key === catKey);
            if (!meta) return null;

            return (
              <Link 
                key={catKey} 
                href={meta.path}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <span className="block text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{count}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
