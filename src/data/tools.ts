import { Tool, ToolCategory, ToolCategoryMeta } from "@/types/tool";

export const toolCategories: ToolCategoryMeta[] = [
  {
    key: "calculators",
    label: "Calculators",
    path: "/calculators",
    description: "Free online calculators for health, finance, and math.",
    intro: "Our selection of calculators helps you solve complex problems in seconds. From checking your BMI to calculating loan interest or your exact age, we provide precise and easy-to-use tools.",
    metaTitle: "Free Online Calculators - Health, Finance & Math | Utility Hub",
    metaDescription: "Access a wide range of free online calculators including Age, BMI, Percentage, and Discount calculators. Simple, fast, and accurate results.",
  },
  {
    key: "converters",
    label: "Converters",
    path: "/converters",
    description: "Convert units of length, weight, and digital storage.",
    intro: "Quickly switch between different units of measurement with our accurate converters. Whether you are converting CM to Inches or MB to GB, our tools ensure high precision for all your needs.",
    metaTitle: "Unit Converters Online - Length, Weight & Data | Utility Hub",
    metaDescription: "Free online unit converters for every day needs. Convert length (CM to Inches), weight (KG to LBS), and digital storage (MB to GB) instantly.",
  },
  {
    key: "text-tools",
    label: "Text Tools",
    path: "/text-tools",
    description: "Format, count, and transform your text easily.",
    intro: "Streamline your writing process with our essential text utilities. Count words and characters, or instantly change the casing of your paragraphs without retyping a single letter.",
    metaTitle: "Free Online Text Tools - Word Count & Case Converter | Utility Hub",
    metaDescription: "Professional text tools to help you write better. Use our free word counter, character counter, and case converter to format your text perfectly.",
  },
  {
    key: "generators",
    label: "Generators",
    path: "/generators",
    description: "Generate QR codes and other useful assets.",
    intro: "Create the assets you need for your business or personal projects in a few clicks. Our generators are designed to produce high-quality outputs like custom QR codes instantly.",
    metaTitle: "Online Asset Generators - Custom QR Codes & More | Utility Hub",
    metaDescription: "Quickly generate digital assets with our free online tools. Create custom QR codes and more for your websites, business cards, and documents.",
  },
];

export const tools: Tool[] = [
  // Calculators
  {
    name: "Age Calculator",
    slug: "age-calculator",
    category: "calculators",
    path: "/calculators/age-calculator",
    description: "Calculate your age in years, months, and days based on your birth date.",
    intro: "The Age Calculator helps you find your exact age by calculating the time between your birth date and the current date. It's perfect for knowing your age in years, months, and even days.",
    howToUse: [
      "Select your date of birth from the calendar input.",
      "Click the 'Calculate Age' button to process the dates.",
      "View your precise age broken down into years, months, and days."
    ],
    faqs: [
      { question: "How accurate is the age calculation?", answer: "It is highly accurate and accounts for leap years and different month lengths." },
      { question: "Can I calculate my age at a future date?", answer: "The current version calculates age up to today's date." },
      { question: "Do you store my birth date?", answer: "No, all calculations happen in your browser and your data is never saved." }
    ],
    metaTitle: "Age Calculator - Calculate Age Online Free",
    metaDescription: "Calculate your exact age in years, months, and days. Free, fast, and private online age calculator tool.",
  },
  {
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    category: "calculators",
    path: "/calculators/percentage-calculator",
    description: "Easily calculate percentages, increases, and decreases.",
    intro: "Our Percentage Calculator is a versatile tool for finding percentages of numbers, calculating percentage increases or decreases, and determining what percent one number is of another.",
    howToUse: [
      "Enter the base number and the percentage value.",
      "Select the type of percentage calculation you need.",
      "The result will update instantly as you change the numbers."
    ],
    faqs: [
      { question: "How do I calculate a 20% tip?", answer: "Enter the bill amount and 20 into the percentage field to get the result." },
      { question: "Does it handle negative numbers?", answer: "Yes, it can calculate percentage changes involving negative values." },
      { question: "Can I use it for tax calculations?", answer: "Absolutely, it's perfect for finding VAT or sales tax amounts." }
    ],
    metaTitle: "Percentage Calculator - Free Online Tool",
    metaDescription: "Easily calculate percentages, percentage changes, and more with our free online percentage calculator.",
  },
  {
    name: "Discount Calculator",
    slug: "discount-calculator",
    category: "calculators",
    path: "/calculators/discount-calculator",
    description: "Find out the final price after applying a discount percentage.",
    intro: "Save money while shopping with the Discount Calculator. Instantly find out how much you save and what the final price will be after any discount.",
    howToUse: [
      "Enter the original price of the item.",
      "Input the discount percentage offered.",
      "The tool shows your total savings and the final payable price."
    ],
    faqs: [
      { question: "Can I add sales tax?", answer: "The current version focuses on the discount, but you can apply tax to the final price manually." },
      { question: "Does it support multiple discounts?", answer: "Currently, it handles one discount percentage at a time." },
      { question: "Is it free to use?", answer: "Yes, like all tools on Utility Hub, it is completely free." }
    ],
    metaTitle: "Discount Calculator - Find Your Savings Online",
    metaDescription: "Calculate final prices and total savings with our free online discount calculator. Perfect for sale shopping.",
  },
  {
    name: "BMI Calculator",
    slug: "bmi-calculator",
    category: "calculators",
    path: "/calculators/bmi-calculator",
    description: "Calculate your Body Mass Index (BMI) to check your health status.",
    intro: "Check your Body Mass Index (BMI) quickly with this health tool. BMI is a useful measure of whether you're at a healthy weight for your height.",
    howToUse: [
      "Enter your weight in kilograms or pounds.",
      "Enter your height in centimeters or feet/inches.",
      "Press calculate to see your BMI score and weight category."
    ],
    faqs: [
      { question: "What is a healthy BMI range?", answer: "Typically, 18.5 to 24.9 is considered healthy for most adults." },
      { question: "Is BMI accurate for athletes?", answer: "BMI might overestimate body fat in athletes with high muscle mass." },
      { question: "Should I use this for children?", answer: "Children's BMI is calculated differently using age-specific charts." }
    ],
    metaTitle: "BMI Calculator - Free Body Mass Index Tool",
    metaDescription: "Calculate your BMI online for free. Check your height-to-weight ratio and see if you are in a healthy range.",
  },

  // Converters
  {
    name: "CM to Inches",
    slug: "cm-to-inches",
    category: "converters",
    path: "/converters/cm-to-inches",
    description: "Convert centimeters (CM) to inches (In) quickly and accurately.",
    intro: "The CM to Inches converter provides a fast way to switch between metric and imperial length units with high precision.",
    howToUse: [
      "Enter the value in centimeters (CM).",
      "The equivalent value in inches will appear immediately.",
      "You can also copy the result to your clipboard."
    ],
    faqs: [
      { question: "What is the conversion factor?", answer: "1 centimeter is equal to approximately 0.3937 inches." },
      { question: "How many decimal places are shown?", answer: "Results are typically rounded to 4 decimal places for accuracy." },
      { question: "Can I convert back from inches?", answer: "Yes, we also have an Inches to CM converter available." }
    ],
    metaTitle: "CM to Inches Converter - Fast & Accurate Online",
    metaDescription: "Convert Centimeters to Inches instantly. Use our precise online converter for all your measurement needs.",
  },
  {
    name: "Inches to CM",
    slug: "inches-to-cm",
    category: "converters",
    path: "/converters/inches-to-cm",
    description: "Convert inches (In) to centimeters (CM) with ease.",
    intro: "Quickly convert any length from inches to centimeters. Perfect for height, width, or any other measurement needing unit switching.",
    howToUse: [
      "Input the number of inches you want to convert.",
      "The result in centimeters updates in real-time.",
      "Use the 'Copy' button if you need to use the value elsewhere."
    ],
    faqs: [
      { question: "How many CM are in an inch?", answer: "Exactly 2.54 centimeters make up one inch." },
      { question: "Does it support fractions?", answer: "You should convert fractions to decimals (e.g., 5.5 instead of 5 1/2)." },
      { question: "Is this tool mobile-friendly?", answer: "Yes, it works perfectly on all smartphones and tablets." }
    ],
    metaTitle: "Inches to CM Converter - Convert Length Online",
    metaDescription: "Convert Inches to Centimeters (CM) with our free online tool. Accurate conversion for height and measurements.",
  },
  {
    name: "KG to LBS",
    slug: "kg-to-lbs",
    category: "converters",
    path: "/converters/kg-to-lbs",
    description: "Convert weight from kilograms (KG) to pounds (LBS).",
    intro: "Switch between metric kilograms and imperial pounds effortlessly. Ideal for weight tracking, shipping, and travel needs.",
    howToUse: [
      "Enter the weight in kilograms.",
      "The weight in pounds is calculated instantly.",
      "Switch fields to convert from LBS back to KG if needed."
    ],
    faqs: [
      { question: "What is the conversion rate?", answer: "1 kilogram is equal to approximately 2.20462 pounds." },
      { question: "Can I use this for cooking?", answer: "Yes, it's great for converting recipe weights." },
      { question: "Is the calculation precise?", answer: "Yes, it uses standard international conversion factors." }
    ],
    metaTitle: "KG to LBS Converter - Kilograms to Pounds Tool",
    metaDescription: "Convert Kilograms (KG) to Pounds (LBS) for free. Accurate and fast weight conversion online.",
  },
  {
    name: "MB to GB",
    slug: "mb-to-gb",
    category: "converters",
    path: "/converters/mb-to-gb",
    description: "Convert digital storage from Megabytes (MB) to Gigabytes (GB).",
    intro: "Understand your data sizes better by converting Megabytes to Gigabytes. Useful for checking file sizes and disk space.",
    howToUse: [
      "Type the size in Megabytes (MB).",
      "The size in Gigabytes (GB) will be displayed.",
      "Choose between decimal (1000) or binary (1024) logic if available."
    ],
    faqs: [
      { question: "Are you using 1000 or 1024?", answer: "Standard conversion usually uses 1024 MB for 1 GB in computing." },
      { question: "How many MB is 1GB?", answer: "In binary terms, 1024 MB equals 1 GB." },
      { question: "Can I convert TB to GB?", answer: "We plan to add Terabyte conversions in a future update." }
    ],
    metaTitle: "MB to GB Converter - Digital Storage Tool",
    metaDescription: "Convert Megabytes (MB) to Gigabytes (GB) online. Quickly understand your file and storage sizes.",
  },

  // Text Tools
  {
    name: "Word Counter",
    slug: "word-counter",
    category: "text-tools",
    path: "/text-tools/word-counter",
    description: "Count the number of words, sentences, and characters in your text.",
    intro: "Improve your writing with our Word Counter. Perfect for essays, social media posts, and professional documents with word limits.",
    howToUse: [
      "Paste your text into the large input box.",
      "Statistics for words and characters update as you type.",
      "Review the breakdown of sentences and paragraphs below."
    ],
    faqs: [
      { question: "Does it count spaces?", answer: "Yes, it provides both character counts with and without spaces." },
      { question: "Is there a text limit?", answer: "It can handle very large documents without any slowdown." },
      { question: "Do you store my text?", answer: "No, your text never leaves your browser for privacy reasons." }
    ],
    metaTitle: "Word Counter - Free Online Character Counter",
    metaDescription: "Count words, characters, sentences, and paragraphs in your text for free. Ideal for writers and students.",
  },
  {
    name: "Character Counter",
    slug: "character-counter",
    category: "text-tools",
    path: "/text-tools/character-counter",
    description: "Quickly count the total number of characters in any text input.",
    intro: "Need to fit a specific character limit? Use this tool to get an exact count of every letter, number, and symbol in your text.",
    howToUse: [
      "Type or paste text into the field.",
      "See the total character count instantly.",
      "Check the remaining limit if you set a target count."
    ],
    faqs: [
      { question: "Are emojis counted?", answer: "Yes, emojis are counted as characters according to standard encoding." },
      { question: "Does it count line breaks?", answer: "Yes, new lines are counted as individual characters." },
      { question: "Can I use it for Twitter?", answer: "Absolutely, it's perfect for staying under the 280-character limit." }
    ],
    metaTitle: "Character Counter - Accurate Text Counter Online",
    metaDescription: "Get the exact character count of your text instantly. Free tool for Twitter, social media, and more.",
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    category: "text-tools",
    path: "/text-tools/case-converter",
    description: "Change text case to uppercase, lowercase, camelCase, and more.",
    intro: "Don't retype your text! Use the Case Converter to instantly switch between UPPERCASE, lowercase, Sentence case, and more.",
    howToUse: [
      "Paste the text you want to transform.",
      "Click the button for your desired case format.",
      "Copy the newly formatted text to use anywhere."
    ],
    faqs: [
      { question: "What cases are supported?", answer: "We support Upper, Lower, Sentence, Title, and camelCase." },
      { question: "Does it preserve formatting?", answer: "It changes the letter casing but keeps your paragraphs intact." },
      { question: "Is there an undo button?", answer: "You can simply click a different case button to change it back." }
    ],
    metaTitle: "Case Converter - Change Text Case Online",
    metaDescription: "Convert text to uppercase, lowercase, title case, and more. Free online tool for formatting text.",
  },

  // Generators
  {
    name: "QR Code Generator",
    slug: "qr-code-generator",
    category: "generators",
    path: "/generators/qr-code-generator",
    description: "Generate custom QR codes for URLs, text, or contact information.",
    intro: "Create high-quality QR codes for your business or personal use. Link to your website, share a Wi-Fi password, or send a message.",
    howToUse: [
      "Enter the URL or text you want to encode.",
      "Customize the colors or size if needed.",
      "Download the QR code as an image (PNG or SVG)."
    ],
    faqs: [
      { question: "Do these QR codes expire?", answer: "No, the QR codes generated are static and will work forever." },
      { question: "Can I track the scans?", answer: "These are static codes; tracking requires a dynamic QR service." },
      { question: "Is it safe to scan?", answer: "Yes, the code only contains the data you entered." }
    ],
    metaTitle: "QR Code Generator - Create Free QR Codes Online",
    metaDescription: "Generate custom QR codes for URLs, text, and more. High-quality, permanent, and free QR codes.",
  },
];

export const getToolsByCategory = (category: ToolCategory) => {
  return tools.filter((tool) => tool.category === category);
};

export const getToolBySlug = (category: ToolCategory, slug: string) => {
  return tools.find((tool) => tool.category === category && tool.slug === slug);
};

export const getRelatedTools = (currentTool: Tool, limit = 3) => {
  return tools
    .filter((tool) => tool.category === currentTool.category && tool.slug !== currentTool.slug)
    .slice(0, limit);
};

export const getCategoryMeta = (categoryKey: ToolCategory) => {
  return toolCategories.find((cat) => cat.key === categoryKey);
};

export const categoryLabels: Record<ToolCategory, string> = {
  calculators: "Calculators",
  converters: "Converters",
  "text-tools": "Text Tools",
  generators: "Generators",
};
