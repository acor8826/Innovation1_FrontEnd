import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is agentic automation and how does it work?',
    answer: 'Agentic automation refers to autonomous AI agents that can make decisions, execute tasks, and adapt to changing conditions without human intervention. Our agents use advanced machine learning models to understand context, learn from data, and optimize workflows automatically. They can handle complex decision trees, integrate with multiple systems, and continuously improve their performance through feedback loops.',
  },
  {
    question: 'How do Innovation1\'s AI-powered solutions differ from traditional web development?',
    answer: 'Innovation1 combines traditional software engineering excellence with cutting-edge AI capabilities. We build intelligent systems that can learn, adapt, and automate complex processes. Unlike static applications, our solutions incorporate neural networks, natural language processing, and multi-agent coordination to create truly intelligent digital experiences that evolve with your business needs.',
  },
  {
    question: 'What industries can benefit from multi-agent AI systems?',
    answer: 'Multi-agent AI systems are valuable across numerous industries including finance (algorithmic trading, risk assessment), healthcare (patient coordination, diagnosis support), logistics (supply chain optimization), customer service (intelligent chatbots, ticket routing), manufacturing (predictive maintenance, quality control), and enterprise automation (workflow orchestration, data processing). Any industry with complex, coordinated processes can benefit.',
  },
  {
    question: 'How long does it take to develop and deploy an AI-powered system?',
    answer: 'Project timelines vary based on complexity and requirements. A typical AI automation project follows our 4-phase process: Discovery (1-2 weeks), System Design (2-3 weeks), Agent Training (3-6 weeks), and Deployment (1-2 weeks). Simple automations can be ready in 4-6 weeks, while enterprise-scale multi-agent systems may take 3-6 months. We provide detailed timelines during the discovery phase.',
  },
  {
    question: 'What kind of support and maintenance do you provide after deployment?',
    answer: 'We offer comprehensive 24/7 support with continuous monitoring, performance optimization, and system updates. Our maintenance includes model retraining as new data becomes available, integration updates, security patches, and feature enhancements. We also provide detailed analytics dashboards so you can track system performance and ROI in real-time.',
  },
  {
    question: 'How do you ensure AI systems are secure and compliant?',
    answer: 'Security and compliance are built into every layer of our solutions. We implement enterprise-grade encryption, secure API gateways, role-based access control, and comprehensive audit logging. Our AI models are trained with privacy-preserving techniques, and we ensure compliance with regulations like GDPR, CCPA, and industry-specific standards. Regular security audits and penetration testing keep systems protected.',
  },
  {
    question: 'Can your AI agents integrate with our existing software and systems?',
    answer: 'Absolutely. Our AI agents are designed with integration-first architecture and can connect to virtually any system via REST APIs, GraphQL, webhooks, database connectors, or custom integrations. We have experience integrating with popular platforms like Salesforce, SAP, Microsoft 365, AWS services, and custom enterprise applications. Our agents act as intelligent middleware that orchestrates across your entire tech stack.',
  },
  {
    question: 'What is the ROI of implementing agentic automation?',
    answer: 'Most clients see significant ROI within 6-12 months through reduced operational costs, increased efficiency, and improved accuracy. Typical benefits include 40-60% reduction in manual processing time, 80-95% accuracy improvements in data handling, 24/7 availability without additional staffing costs, and scalability without proportional cost increases. We provide detailed ROI projections during the discovery phase based on your specific use case.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 relative overflow-hidden" id="faq">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0D1B4C] to-[#020817]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,156,219,0.06),transparent_60%)]"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D9CDB] via-[#C084F5] to-[#A6E1FF] text-white rounded-full px-6 py-2 mb-6 shadow-lg shadow-[#2D9CDB]/30">
            <span>FAQ</span>
          </div>
          <h2 className="text-[#EEF8FF] mb-6 text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-[#A6E1FF] text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our AI-powered development and agentic automation services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-[#2D9CDB]/20 rounded-2xl overflow-hidden transition-all hover:border-[#2D9CDB]/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-white/5"
              >
                <span className="text-[#EEF8FF] pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2D9CDB] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#A6E1FF]/90 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#A6E1FF] mb-4">Still have questions?</p>
          <a
            href="mailto:hello@innovation1.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF] text-white rounded-xl hover:shadow-lg hover:shadow-[#2D9CDB]/40 transition-all"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
}
