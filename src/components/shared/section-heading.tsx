interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {description && <p className="mt-2 text-lg text-gray-600">{description}</p>}
    </div>
  );
}
