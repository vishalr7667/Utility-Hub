import Link from "next/link";
import { Tool, ToolCategoryMeta } from "@/types/tool";
import ToolCard from "./tool-card";

interface CategoryPageLayoutProps {
  categoryMeta: ToolCategoryMeta;
  tools: Tool[];
}

export default function CategoryPageLayout({ categoryMeta, tools }: CategoryPageLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{categoryMeta.label}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {categoryMeta.label}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {categoryMeta.intro}
          </p>
        </header>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* Bottom Note */}
        <footer className="border-t border-gray-200 pt-12 text-center">
          <p className="text-gray-500 italic">
            Explore free online {categoryMeta.label.toLowerCase()} tools designed for quick and easy use.
          </p>
        </footer>
      </div>
    </main>
  );
}
