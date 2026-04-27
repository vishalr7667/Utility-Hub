import { Metadata } from "next";
import Link from "next/link";
import { getCategoryMeta, getToolsByCategory } from "@/data/tools";
import { buildCategoryMetadata } from "@/lib/seo";
import { 
  buildCategoryCollectionPageSchema, 
  buildCategoryItemListSchema, 
  buildCategoryBreadcrumbSchema,
  buildFaqSchema 
} from "@/lib/schema";
import ToolCard from "@/components/tools/tool-card";
import FeaturedTools from "@/components/tools/featured-tools";
import FAQSection from "@/components/tools/faq-section";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getCategoryMeta("calculators");
  if (!meta) return { title: "Calculators" };
  return buildCategoryMetadata(meta);
}

export default function CalculatorsPage() {
  const categoryKey = "calculators";
  const meta = getCategoryMeta(categoryKey);
  if (!meta) notFound();

  const allTools = getToolsByCategory(categoryKey);
  
  // Highlight the 4 live calculators
  const featuredSlugs = ["age-calculator", "percentage-calculator", "discount-calculator", "bmi-calculator"];
  const featuredTools = allTools.filter(t => featuredSlugs.includes(t.slug));
  const otherTools = allTools.filter(t => !featuredSlugs.includes(t.slug));

  const categoryFaqs = [
    { 
      question: "Are these calculators free to use?", 
      answer: "Yes, all calculators on Utility Hub are 100% free with no hidden costs or subscriptions." 
    },
    { 
      question: "Do I need to install any software?", 
      answer: "No, our tools work directly in your web browser. There is nothing to download or install." 
    },
    { 
      question: "Are the calculations accurate?", 
      answer: "Absolutely. We use industry-standard formulas and rigorous testing to ensure every calculation is precise." 
    },
    { 
      question: "Can I use these calculators on my phone?", 
      answer: "Yes, Utility Hub is fully responsive and works perfectly on smartphones, tablets, and desktops." 
    }
  ];

  // Build JSON-LD schemas
  const collectionSchema = buildCategoryCollectionPageSchema(meta);
  const itemListSchema = buildCategoryItemListSchema(allTools);
  const breadcrumbSchema = buildCategoryBreadcrumbSchema(meta);
  const faqSchema = buildFaqSchema({ faqs: categoryFaqs });

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen pb-24" style={{ background: "var(--color-bg)" }}>
        {/* Breadcrumbs */}
        <div style={{ background: "var(--color-bg-elevated)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center text-sm font-medium text-[var(--color-text-muted)] gap-1.5">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors duration-200">Home</Link>
              <span className="text-[var(--color-border)]">/</span>
              <span className="text-[var(--color-text-primary)] font-semibold">{meta.label}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Hero Section */}
          <header className="mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 gradient-text-subtle">
              {meta.label}
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-4xl">
              {meta.intro}
            </p>
          </header>

          {/* Popular Calculators */}
          <FeaturedTools title="Popular Calculators" tools={featuredTools} />

          {/* All Calculators */}
          {otherTools.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-7 w-1 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-purple-500" />
                <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)]">More Tools</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
                {otherTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          )}

          {/* Supporting Content */}
          <section className="mb-16 glass-card p-8 !transform-none">
            <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)] mb-8">Why use online calculators?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Instant Results", desc: "Skip the manual math and get accurate results in milliseconds. Our tools are optimized for speed and precision." },
                { title: "Private & Secure", desc: "Calculations happen entirely in your browser. We never store or track your personal data or values." },
                { title: "Always Available", desc: "Access these tools 24/7 from any device with an internet connection. No apps to download or accounts to create." },
                { title: "Free Forever", desc: "Our mission is to provide high-quality utility tools to everyone for free, without any paywalls or limitations." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-sm">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-text-primary)] mb-1">{item.title}</p>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visible FAQ Section */}
          <FAQSection faqs={categoryFaqs} />
        </div>
      </main>
    </>
  );
}
