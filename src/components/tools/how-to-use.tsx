interface HowToUseProps {
  steps: string[];
}

export default function HowToUse({ steps }: HowToUseProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-white p-8 rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4 items-start text-gray-700">
            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
              {index + 1}
            </span>
            <p className="pt-1">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
