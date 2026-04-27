export type ToolCategory = "calculators" | "converters" | "text-tools" | "generators";

export interface ToolCategoryMeta {
  key: ToolCategory;
  label: string;
  path: string;
  description: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Tool {
  name: string;
  slug: string;
  category: ToolCategory;
  path: string;
  description: string;
  intro?: string;
  howToUse?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  metaTitle?: string;
  metaDescription?: string;
}
