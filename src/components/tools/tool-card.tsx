import Link from "next/link";
import { Tool } from "@/types/tool";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.path}
      className="group flex flex-col p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
    >
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {tool.name}
      </h3>
      <p className="mt-2 text-gray-600 line-clamp-2 text-sm flex-grow">
        {tool.description}
      </p>
      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
        Open Tool
        <svg
          className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
