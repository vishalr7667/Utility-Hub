interface HowToUseProps {
  steps: string[];
}

export default function HowToUse({ steps }: HowToUseProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="glass-card p-8 !transform-none">
      <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-8">How to Use</h2>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-5 items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-purple-500 text-white font-bold text-sm shadow-sm">
              {index + 1}
            </span>
            <p className="text-[var(--color-text-secondary)] pt-1.5 leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
