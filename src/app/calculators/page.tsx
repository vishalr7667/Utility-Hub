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

      <main className="min-h-screen bg-gray-50 pb-24">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex text-sm text-gray-500 font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{meta.label}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Hero Section */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              {meta.label}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
              {meta.intro}
            </p>
          </header>

          {/* Popular Calculators */}
          <FeaturedTools title="Popular Calculators" tools={featuredTools} />

          {/* All Calculators */}
          {otherTools.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">More Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          )}

          {/* Supporting Content */}
          <section className="mb-16 bg-white p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why use online calculators?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Instant Results</p>
                <p>Skip the manual math and get accurate results in milliseconds. Our tools are optimized for speed and precision.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Private & Secure</p>
                <p>Calculations happen entirely in your browser. We never store or track your personal data or values.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Always Available</p>
                <p>Access these tools 24/7 from any device with an internet connection. No apps to download or accounts to create.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Free Forever</p>
                <p>Our mission is to provide high-quality utility tools to everyone for free, without any paywalls or limitations.</p>
              </div>
            </div>
          </section>

          {/* Visible FAQ Section */}
          <FAQSection faqs={categoryFaqs} />
        </div>
      </main>
    </>
  );
}
