interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-purple-500" />
        <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">{title}</h2>
      </div>
      {description && (
        <p className="text-lg text-[var(--color-text-secondary)] ml-[1.1rem] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
