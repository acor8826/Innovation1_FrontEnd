import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// Organization Schema - Use on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Innovation1",
  "description": "AI-powered development and agentic automation solutions provider specializing in autonomous multi-agent systems and intelligent digital architecture",
  "url": "https://innovation1.com",
  "logo": "https://innovation1.com/logo.png",
  "foundingDate": "2023",
  "sameAs": [
    "https://linkedin.com/company/innovation1",
    "https://github.com/innovation1",
    "https://twitter.com/innovation1"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "contact@innovation1.com",
    "availableLanguage": ["English"]
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "knowsAbout": [
    "Agentic AI Development",
    "Autonomous Agent Systems",
    "Multi-Agent Architecture",
    "AI Workflow Automation",
    "Intelligent Digital Architecture",
    "Enterprise AI Solutions",
    "Cognitive Automation"
  ]
};

// Software Application Schema - Dashboard/Product pages
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Innovation1 Project Management Platform",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "ProjectManagementSoftware",
  "operatingSystem": "Web-based, Cross-platform",
  "description": "AI-powered project management dashboard with intelligent task automation, real-time analytics, team collaboration tools, and autonomous workflow orchestration",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available with premium features"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "AI-powered task automation and intelligent scheduling",
    "Real-time project analytics and performance dashboards",
    "Multi-agent workflow orchestration",
    "Team collaboration and communication tools",
    "Customizable project dashboards and views",
    "Automated workflow triggers and notifications",
    "Advanced reporting and data visualization",
    "Third-party integrations and API access"
  ],
  "screenshot": "https://innovation1.com/screenshots/dashboard.png",
  "softwareVersion": "2.0",
  "datePublished": "2024-01-01",
  "provider": {
    "@type": "Organization",
    "name": "Innovation1"
  }
};

// Service Schema - Agentic AI page
export const agenticAIServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Agentic AI Development and Implementation",
  "provider": {
    "@type": "Organization",
    "name": "Innovation1"
  },
  "name": "Agentic AI Systems Development",
  "description": "Custom development of autonomous AI agent systems including multi-agent orchestration, intelligent workflow automation, and cognitive automation solutions for enterprise applications",
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://innovation1.com/agentic-ai"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Agentic AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Autonomous Agent Development",
          "description": "Design and deploy self-directed AI agents that perceive, reason, and act independently"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multi-Agent System Architecture",
          "description": "Build coordinated multi-agent systems for complex enterprise automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Workflow Orchestration",
          "description": "Implement intelligent workflow automation with adaptive decision-making"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Automation Platform",
          "description": "Deploy AI systems that learn, adapt, and optimize processes autonomously"
        }
      }
    ]
  },
  "category": "Artificial Intelligence Development",
  "audience": {
    "@type": "Audience",
    "audienceType": "Enterprise businesses seeking intelligent automation solutions"
  }
};

// FAQ Schema for agentic AI
export const agenticAIFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is agentic AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agentic AI refers to autonomous artificial intelligence systems that can independently perceive their environment, make decisions, and take actions to achieve specific goals without continuous human intervention. Unlike traditional automation that follows predetermined scripts, agentic AI systems use advanced reasoning, planning, and learning capabilities to operate autonomously. These AI agents can adapt to changing conditions, coordinate with other agents in multi-agent systems, and make contextual decisions based on real-time data analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How does agentic AI differ from traditional automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional automation follows rigid, pre-programmed rules and workflows that require manual updates when conditions change. Agentic AI systems, in contrast, are autonomous and adaptive—they can perceive their environment, reason about the best course of action, and execute decisions independently. Agentic AI agents learn from outcomes, coordinate with other agents, and adjust their behavior based on context. This makes agentic AI ideal for complex, dynamic environments where traditional rule-based automation would fail or require constant human oversight."
      }
    },
    {
      "@type": "Question",
      "name": "What are multi-agent systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-agent systems are architectures where multiple autonomous AI agents work together to solve complex problems that single agents cannot handle alone. Each agent has specialized capabilities and can perceive, reason, and act independently. The agents coordinate through communication protocols and shared goals, enabling sophisticated behaviors like task delegation, parallel processing, and distributed problem-solving. Innovation1's multi-agent platforms orchestrate these AI agents to handle enterprise-scale workflows, customer service automation, data analysis pipelines, and intelligent process optimization."
      }
    },
    {
      "@type": "Question",
      "name": "What industries benefit from agentic AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agentic AI delivers value across numerous industries including software development, customer service, financial services, healthcare, logistics, and enterprise operations. In software development, AI agents automate code review, testing, and deployment. In customer service, autonomous agents handle ticket triage, research solutions, and draft responses. Financial services use agentic AI for fraud detection, risk analysis, and automated compliance. Healthcare applications include patient monitoring, diagnostics support, and treatment planning. Any industry with complex workflows, data-intensive processes, or need for 24/7 intelligent automation can benefit from agentic AI systems."
      }
    },
    {
      "@type": "Question",
      "name": "How does Innovation1 implement agentic AI solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Innovation1 follows a structured approach to agentic AI implementation: First, we analyze your workflows to identify automation opportunities and define agent capabilities. Next, we architect the multi-agent system, designing specialized agents and their coordination protocols. Then we develop the AI agents using advanced machine learning frameworks and integrate them with your existing systems. Finally, we deploy the agentic AI solution with monitoring, optimization, and continuous learning capabilities. Our platform provides real-time orchestration, performance analytics, and adaptive optimization to ensure your AI agents deliver measurable business value."
      }
    }
  ]
};

// WebSite Schema for homepage
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Innovation1",
  "url": "https://innovation1.com",
  "description": "AI-powered development and agentic automation platform",
  "publisher": {
    "@type": "Organization",
    "name": "Innovation1"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://innovation1.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// BreadcrumbList Schema - use on subpages
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Product Schema - if offering specific products
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Innovation1 Agentic AI Platform",
  "description": "Enterprise-grade autonomous multi-agent system for intelligent workflow automation and cognitive process optimization",
  "brand": {
    "@type": "Brand",
    "name": "Innovation1"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "url": "https://innovation1.com/dashboard"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "category": "Business Software"
};
