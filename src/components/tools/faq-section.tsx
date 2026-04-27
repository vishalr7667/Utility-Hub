interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="glass-card p-8 !transform-none">
      <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-0 divide-y divide-[var(--color-border)]">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">{faq.question}</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
