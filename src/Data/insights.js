import artificialIntelligenceImage from "../assets/insights/artificial-intelligence.png";
import brandingStrategyImage from "../assets/insights/branding-strategy.png";
import businessAutomationImage from "../assets/insights/business-automation.png";
import cloudStrategyImage from "../assets/insights/cloud-strategy.png";
import cybersecurityImage from "../assets/insights/cybersecurity.png";
import digitalTransformationImage from "../assets/insights/digital-transformation.png";
import uiUxDesignImage from "../assets/insights/ui-ux-design.png";
import webDevelopmentImage from "../assets/insights/web-development.png";
import governCardImage from "../assets/Govern.png";
import growCardImage from "../assets/Grow.png";
import protectCardImage from "../assets/Protect.png";

const articleBlueprints = [
  {
    id: 1,
    slug: "digital-transformation-2026",
    title: "Turning Digital Transformation Into Lasting Business Value",
    category: "Digital Transformation",
    author: "RAPT & Co. Advisory Team",
    publishDate: "July 28, 2026",
    readingTime: "9 min read",
    featuredImage: digitalTransformationImage,
    cardBackground: protectCardImage,
    excerpt:
      "A practical framework for aligning technology, people, governance, and measurable outcomes to build a digital-first operating model.",
    relatedArticles: [
      "responsible-ai-business-advantage",
      "automation-with-purpose",
      "cloud-strategy-with-confidence",
    ],
    seo: {
      title: "Digital Transformation Strategy 2026 | RAPT & Co.",
      description:
        "Learn how leaders align technology, governance, people, and measurable outcomes to create lasting value from digital transformation.",
    },
    keyTakeaways: [
      "Treat transformation as an operating-model decision, not a technology project.",
      "Connect every initiative to a measurable customer or business outcome.",
      "Build governance into delivery so speed and confidence grow together.",
    ],
    quote:
      "The most valuable transformation is not the one with the most technology. It is the one that makes the organization meaningfully better at serving people.",
  },
  {
    id: 2,
    slug: "responsible-ai-business-advantage",
    title: "Responsible AI as a Sustainable Business Advantage",
    category: "Artificial Intelligence",
    author: "RAPT & Co. Technology Advisory",
    publishDate: "July 21, 2026",
    readingTime: "8 min read",
    featuredImage: artificialIntelligenceImage,
    cardBackground: governCardImage,
    excerpt:
      "How intentional governance, human oversight, and clear accountability turn emerging AI capabilities into trusted enterprise value.",
    relatedArticles: [
      "digital-transformation-2026",
      "cybersecurity-business-resilience",
      "automation-with-purpose",
    ],
    seo: {
      title: "Responsible AI Strategy | RAPT & Co. Insights",
      description:
        "Explore a practical approach to responsible AI governance, accountability, risk management, and sustainable enterprise adoption.",
    },
    keyTakeaways: [
      "Start with a valuable decision or workflow rather than a model.",
      "Define human ownership for outcomes, exceptions, and escalation.",
      "Measure trust, quality, and risk alongside productivity.",
    ],
    quote:
      "Responsible AI is not a constraint on innovation. It is the architecture that allows innovation to scale with confidence.",
  },
  {
    id: 3,
    slug: "high-performance-web-experiences",
    title: "Performance Is Part of the Product Experience",
    category: "Web Development",
    author: "RAPT & Co. Digital Experience Team",
    publishDate: "July 15, 2026",
    readingTime: "7 min read",
    featuredImage: webDevelopmentImage,
    cardBackground: growCardImage,
    excerpt:
      "Why speed, accessibility, resilience, and maintainability should be designed into modern web products from the first decision.",
    relatedArticles: [
      "clarity-foundation-great-ux",
      "brand-systems-people-trust",
      "cloud-strategy-with-confidence",
    ],
    seo: {
      title: "High-Performance Web Experiences | RAPT & Co.",
      description:
        "Discover how performance engineering improves conversion, accessibility, trust, and the long-term quality of digital products.",
    },
    keyTakeaways: [
      "Set performance budgets before visual and technical complexity grows.",
      "Prioritize real-user experience over laboratory scores alone.",
      "Make accessibility and resilience part of the definition of done.",
    ],
    quote:
      "A fast website is not simply a technical achievement. It is a clear signal that the organization respects the visitor's time.",
  },
  {
    id: 4,
    slug: "clarity-foundation-great-ux",
    title: "Why Clarity Is the Foundation of Great UX",
    category: "UI / UX",
    author: "RAPT & Co. Experience Design Team",
    publishDate: "July 8, 2026",
    readingTime: "6 min read",
    featuredImage: uiUxDesignImage,
    cardBackground: governCardImage,
    excerpt:
      "The principles that help digital products feel intuitive, purposeful, inclusive, and effortless across every interaction.",
    relatedArticles: [
      "high-performance-web-experiences",
      "brand-systems-people-trust",
      "digital-transformation-2026",
    ],
    seo: {
      title: "Clarity and Modern UX Design | RAPT & Co.",
      description:
        "Learn how hierarchy, language, feedback, accessibility, and focused decision-making create clearer digital experiences.",
    },
    keyTakeaways: [
      "Reduce decision effort before adding more interface guidance.",
      "Use hierarchy and language to make the next action unmistakable.",
      "Test whether the experience remains clear across abilities and contexts.",
    ],
    quote:
      "The best interface does not ask people to admire its complexity. It gives them the confidence to move forward.",
  },
  {
    id: 5,
    slug: "brand-systems-people-trust",
    title: "Building Brand Systems People Remember and Trust",
    category: "Branding",
    author: "RAPT & Co. Brand Strategy Team",
    publishDate: "June 30, 2026",
    readingTime: "7 min read",
    featuredImage: brandingStrategyImage,
    cardBackground: protectCardImage,
    excerpt:
      "A strong brand system connects positioning, identity, behavior, and customer experience into one consistent promise.",
    relatedArticles: [
      "clarity-foundation-great-ux",
      "digital-transformation-2026",
      "high-performance-web-experiences",
    ],
    seo: {
      title: "Building a Trusted Brand System | RAPT & Co.",
      description:
        "Explore how positioning, visual identity, voice, and consistent customer experiences build memorable and trusted brands.",
    },
    keyTakeaways: [
      "Define the promise before designing the identity.",
      "Translate strategy into repeatable principles teams can use.",
      "Measure consistency through customer experience, not assets alone.",
    ],
    quote:
      "A brand becomes valuable when every interaction reinforces the same clear and credible promise.",
  },
  {
    id: 6,
    slug: "cybersecurity-business-resilience",
    title: "Designing Cybersecurity for Business Resilience",
    category: "Cybersecurity",
    author: "RAPT & Co. Risk Advisory Team",
    publishDate: "June 23, 2026",
    readingTime: "9 min read",
    featuredImage: cybersecurityImage,
    cardBackground: growCardImage,
    excerpt:
      "Move beyond reactive controls with a security strategy built around continuity, accountability, and confident growth.",
    relatedArticles: [
      "responsible-ai-business-advantage",
      "cloud-strategy-with-confidence",
      "automation-with-purpose",
    ],
    seo: {
      title: "Cybersecurity and Business Resilience | RAPT & Co.",
      description:
        "Build a resilient cybersecurity strategy that connects risk ownership, continuity, controls, and confident business growth.",
    },
    keyTakeaways: [
      "Prioritize risks based on business impact and critical services.",
      "Design recovery and response before an incident occurs.",
      "Make security ownership visible across leadership and delivery teams.",
    ],
    quote:
      "Resilience is the confidence that the organization can protect what matters, respond deliberately, and continue moving forward.",
  },
  {
    id: 7,
    slug: "automation-with-purpose",
    title: "Automating the Work That Slows Growth",
    category: "Automation",
    author: "RAPT & Co. Process Transformation Team",
    publishDate: "June 16, 2026",
    readingTime: "6 min read",
    featuredImage: businessAutomationImage,
    cardBackground: governCardImage,
    excerpt:
      "Identify high-value automation opportunities that remove friction while preserving control, ownership, and human judgment.",
    relatedArticles: [
      "digital-transformation-2026",
      "responsible-ai-business-advantage",
      "cloud-strategy-with-confidence",
    ],
    seo: {
      title: "Purposeful Business Automation | RAPT & Co.",
      description:
        "Learn how to identify, prioritize, govern, and measure automation opportunities without adding operational complexity.",
    },
    keyTakeaways: [
      "Improve the process before automating it.",
      "Prioritize repetitive work with clear inputs and measurable outcomes.",
      "Keep exception handling and accountability visible.",
    ],
    quote:
      "The goal of automation is not to remove people from work. It is to give people more time for the work that requires judgment.",
  },
  {
    id: 8,
    slug: "cloud-strategy-with-confidence",
    title: "A Smarter Path to Cloud Strategy and Modernization",
    category: "Cloud Strategy",
    author: "RAPT & Co. Technology Advisory",
    publishDate: "June 9, 2026",
    readingTime: "8 min read",
    featuredImage: cloudStrategyImage,
    cardBackground: growCardImage,
    excerpt:
      "A decision-led approach to cloud modernization that balances agility, economics, resilience, security, and governance.",
    relatedArticles: [
      "cybersecurity-business-resilience",
      "high-performance-web-experiences",
      "digital-transformation-2026",
    ],
    seo: {
      title: "Cloud Strategy and Modernization | RAPT & Co.",
      description:
        "Build a cloud modernization roadmap that balances agility, cost, resilience, security, governance, and business value.",
    },
    keyTakeaways: [
      "Choose cloud decisions based on workload and business value.",
      "Make cost visibility and governance part of the architecture.",
      "Modernize operating practices alongside the technology estate.",
    ],
    quote:
      "Cloud creates value when it changes how confidently the organization can build, operate, learn, and adapt.",
  },
];

function buildContent(article) {
  const topic = article.category.toLowerCase();
  return [
    {
      type: "paragraph",
      text: `${article.excerpt} The organizations making the strongest progress approach ${topic} as a coordinated business capability rather than an isolated initiative.`,
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: `Why ${article.category} Matters Now`,
    },
    {
      type: "paragraph",
      text: `Customer expectations, regulatory pressure, operating complexity, and the pace of technology change are converging. Leaders need a practical way to make progress without trading speed for confidence.`,
    },
    {
      type: "highlight",
      title: "Leadership perspective",
      text: `Start with the outcome the organization needs, make accountability explicit, and use technology as an enabler of a clearer operating decision.`,
    },
    {
      type: "heading",
      id: "practical-framework",
      text: "A Practical Framework for Progress",
    },
    {
      type: "list",
      items: [
        "Define the customer and business outcome in language every team understands.",
        "Assess the current process, risks, capabilities, and decision rights.",
        "Prioritize a focused portfolio of changes with accountable owners.",
        "Measure adoption, quality, confidence, and value—not activity alone.",
      ],
    },
    {
      type: "image",
      src: article.featuredImage,
      alt: `Abstract visual representing ${article.category}`,
      caption: "Strategy becomes valuable when it can be understood, owned, and applied.",
    },
    {
      type: "heading",
      id: "from-idea-to-impact",
      text: "From Idea to Sustainable Impact",
    },
    {
      type: "paragraph",
      text: `Sustainable progress comes from short learning cycles supported by durable governance. Teams should be able to test, measure, and improve while leaders retain a clear view of risk, investment, and outcomes.`,
    },
    {
      type: "quote",
      text: article.quote,
      attribution: article.author,
    },
  ];
}

export const insights = articleBlueprints.map((article) => ({
  ...article,
  tableOfContents: [
    { id: "why-it-matters", label: `Why ${article.category} Matters Now` },
    { id: "practical-framework", label: "A Practical Framework for Progress" },
    { id: "from-idea-to-impact", label: "From Idea to Sustainable Impact" },
  ],
  content: buildContent(article),
}));

export function getInsightBySlug(slug) {
  return insights.find((article) => article.slug === slug);
}
