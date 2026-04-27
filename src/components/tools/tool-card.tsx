import Link from "next/link";
import { Tool } from "@/types/tool";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.path}
      className="group glass-card flex flex-col p-6"
    >
      <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
        {tool.name}
      </h3>
      <p className="mt-2 text-[var(--color-text-secondary)] line-clamp-2 text-sm flex-grow leading-relaxed">
        {tool.description}
      </p>
      <div className="mt-5 flex items-center text-[var(--color-accent)] text-sm font-semibold">
        Open Tool
        <svg
          className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
