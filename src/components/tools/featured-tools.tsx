import { Tool } from "@/types/tool";
import ToolCard from "./tool-card";

interface FeaturedToolsProps {
  title: string;
  tools: Tool[];
}

export default function FeaturedTools({ title, tools }: FeaturedToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-purple-500" />
        <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] tracking-tight">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
