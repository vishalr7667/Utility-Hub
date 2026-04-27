import { Tool } from "@/types/tool";
import ToolCard from "./tool-card";

interface RelatedToolsProps {
  tools: Tool[];
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-7 w-1 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-purple-500" />
        <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)]">Related Tools</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
