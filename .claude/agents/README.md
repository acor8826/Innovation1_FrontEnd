# Claude Code Agents

This directory contains specialized AI agents for the Innovation1 project. Each agent is an expert in a specific domain and can be invoked to perform specialized tasks.

## Available Agents

### 1. SEO Optimization Expert (`seo-optimization-expert.md`)

**Purpose**: Organic search engine optimization auditing and improvement recommendations.

**Capabilities**:
- Comprehensive website SEO audits
- Technical SEO analysis (crawlability, performance, Core Web Vitals)
- On-page SEO optimization (meta tags, content structure, headings)
- Structured data (Schema.org) validation and recommendations
- AI search engine optimization (ChatGPT, Claude, Gemini, Perplexity)
- Mobile and performance optimization
- Content quality assessment
- Competitive SEO analysis
- Ongoing monitoring for SEO impacts of code changes

**Constraints**:
- ✅ **ORGANIC SEO ONLY** - No paid advertising strategies
- ✅ Focuses on Google, Bing, DuckDuckGo, and AI search platforms
- ✅ Free, implementable recommendations only

---

### 2. Australian Health & Pharmacy SEO Copywriter (`australian-health-seo-copywriter.md`)

**Purpose**: Specialized SEO copywriting for Australian health, pharmacy, and pharmaceutical sectors.

**Capabilities**:
- TGA-compliant health and pharmacy content creation
- Service pages (medication reviews, compounding, vaccinations, clinical services)
- Educational blog articles (health topics, medication guides)
- Product category pages (OTC medications, supplements, medical devices)
- AI/technology content (agentic AI for pharmacy automation)
- Location pages (local SEO for pharmacy branches)
- E-pharmacy and online sales content
- Australian health regulation compliance (TGA, APHRA, PBS, NSW Health)

**Specializations**:
- 🏥 **Australian Healthcare**: TGA, PBS, Medicare, ARTG compliance
- 💊 **Pharmacy Sector**: Retail, compounding, small manufacturing
- 🤖 **Agentic AI**: Pharmacy automation, workflow optimization
- 📍 **NSW/Sydney Focus**: Local market expertise, SME pharmacy positioning
- 🔍 **SEO + Compliance**: YMYL content, E-E-A-T optimization, medical SEO

**Constraints**:
- ✅ **TGA COMPLIANT ONLY** - All content follows TGA Advertising Code 2021
- ✅ **Evidence-Based** - No unsubstantiated therapeutic claims
- ✅ **Australian Focus** - NSW and Australia-specific content
- ✅ **Professional Standards** - APHRA and Pharmacy Board compliant

**How to Use**:

#### Service Page Creation
```
Claude, use the australian-health-seo-copywriter agent to create a service page for medication review services at a Sydney pharmacy.
```

#### Blog Article
```
Claude, use the australian-health-seo-copywriter agent to write an educational blog article about managing diabetes medications in Australia.
```

#### AI/Technology Content
```
Claude, use the australian-health-seo-copywriter agent to write about how agentic AI automates compounding pharmacy workflows for SME pharmacies in NSW.
```

#### Product Category Page
```
Claude, use the australian-health-seo-copywriter agent to create a TGA-compliant product category page for vitamins and supplements.
```

**Expected Output**:
- Complete web copy (ready to publish)
- SEO-optimized meta tags and headings
- TGA-compliant content with required disclaimers
- Schema.org markup (JSON-LD)
- SEO analysis (keyword density, readability)
- Compliance review checklist
- Internal linking and image recommendations
- Implementation guidance

**Use Cases**:
1. **New Pharmacy Websites**: Complete site copywriting
2. **E-Pharmacy Launch**: Online pharmacy content and product pages
3. **Compounding Services**: Specialized compounding pharmacy content
4. **AI Marketing**: Technology and automation content for pharmacies
5. **Blog Content**: Health education and thought leadership
6. **Location Pages**: Multi-branch pharmacy local SEO
7. **Content Refresh**: Update outdated pharmacy content

---

## SEO Optimization Expert - Usage Examples

#### Full SEO Audit
```
Claude, use the seo-optimization-expert agent to perform a comprehensive SEO audit of the entire website.
```

#### Page-Specific Audit
```
Claude, use the seo-optimization-expert agent to audit the homepage (Innovation1Landing.tsx) for SEO issues.
```

#### Monitor Updates
```
Claude, use the seo-optimization-expert agent to check recent changes and their SEO impact.
```

#### Optimize Specific Element
```
Claude, use the seo-optimization-expert agent to optimize the meta descriptions for all pages.
```

#### Generate SEO Report
```
Claude, use the seo-optimization-expert agent to generate a complete SEO status report with actionable recommendations.
```

#### Structured Data Validation
```
Claude, use the seo-optimization-expert agent to validate and improve our structured data implementation.
```

#### Performance Analysis
```
Claude, use the seo-optimization-expert agent to analyze Core Web Vitals and provide performance optimization recommendations.
```

**Expected Output**:
- Prioritized issue list (Critical, High, Medium, Low priority)
- Technical implementation guidance with code examples
- Before/after comparisons
- Expected impact estimates
- Step-by-step action plans
- SEO health scores

**Use Cases**:
1. **Before Deployment**: Audit new pages or features before going live
2. **After Major Updates**: Check SEO impact of code changes
3. **Periodic Reviews**: Monthly or quarterly SEO health checks
4. **Content Updates**: Optimize new content for search engines
5. **Performance Issues**: Diagnose and fix Core Web Vitals problems
6. **Schema Implementation**: Ensure proper structured data coverage
7. **Competitive Analysis**: Benchmark against competitors

---

## How to Invoke Agents

### Method 1: Direct Request
Simply ask Claude to use a specific agent:
```
Claude, use the [agent-name] agent to [task description]
```

### Method 2: Agent File Reference
Reference the agent file directly:
```
Claude, acting as the SEO Optimization Expert (from seo-optimization-expert.md), audit the website.
```

### Method 3: SlashCommand (if configured)
If you create a slash command for the agent:
```
/seo-audit
```

---

## Agent Development Guidelines

### Creating New Agents

To create a new specialized agent:

1. **Create Agent File**: Add a new `.md` file in this directory
2. **Define Expertise**: Clearly state the agent's role and capabilities
3. **Set Constraints**: Define what the agent should NOT do
4. **Document Responsibilities**: List specific tasks the agent performs
5. **Provide Context**: Include project-specific information
6. **Give Examples**: Show expected inputs and outputs
7. **Update README**: Add the agent to this documentation

### Agent File Structure

```markdown
# [Agent Name]

## Role & Expertise
[Define the agent's expert domain]

## Constraints
[List what the agent does NOT handle]

## Primary Responsibilities
[Detailed list of tasks and capabilities]

## Project-Specific Context
[Relevant project information]

## When Invoked
[How the agent should respond to different requests]

## Best Practices & Guidelines
[Domain-specific best practices]

## Success Metrics
[How to measure the agent's effectiveness]

## Response Format
[Expected output structure]

## Example Invocation
[Sample usage with expected responses]
```

---

## Agent Tips & Best Practices

### For Users

1. **Be Specific**: Clearly state what you want the agent to analyze or optimize
   - ✅ "Audit the homepage meta tags"
   - ❌ "Check SEO"

2. **Provide Context**: Mention specific pages, components, or features
   - ✅ "Analyze SEO for the new Contact page (Contact.tsx)"
   - ❌ "Look at the new page"

3. **Request Prioritization**: Ask for prioritized recommendations if needed
   - ✅ "Give me the top 3 critical SEO issues to fix first"
   - ❌ "Tell me everything"

4. **Ask for Implementation**: Request code examples and step-by-step guidance
   - ✅ "Show me how to implement the structured data fix"
   - ❌ "Just list the issues"

5. **Iterate**: Use agent feedback to make changes, then re-audit
   - First: "Audit homepage SEO"
   - After fixes: "Re-audit homepage to verify improvements"

### For Agent Developers

1. **Clear Scope**: Define exactly what the agent does and doesn't do
2. **Technical Depth**: Provide code-level implementation guidance
3. **Prioritization**: Help users focus on high-impact items
4. **Measurability**: Link recommendations to trackable metrics
5. **Examples**: Include before/after code examples
6. **Context**: Integrate project-specific information
7. **Actionable**: Every recommendation should be immediately implementable

---

## Integration with Project

### Current Project Structure
```
Innovation1/
├── backend/                          # FastAPI Python backend
│   └── (backend files...)
└── Projectmanagementdashboarddesign/ # React + TypeScript frontend
    ├── .claude/
    │   └── agents/                   # ← YOU ARE HERE
    │       ├── README.md             # This file
    │       └── seo-optimization-expert.md
    ├── src/
    │   ├── components/
    │   │   ├── SEO.tsx               # SEO meta tag component
    │   │   └── seo/
    │   │       └── StructuredData.tsx # Schema.org implementation
    │   ├── pages/                    # All page components
    │   └── ...
    └── ...
```

### Deployment URLs
- **Frontend**: https://innovation1-frontend-710611968322.australia-southeast1.run.app
- **Backend**: https://innovation1-backend-710611968322.australia-southeast1.run.app

### SEO-Related Files
The SEO agent will primarily work with:
- `src/components/SEO.tsx` - Meta tag management component
- `src/components/seo/StructuredData.tsx` - JSON-LD structured data
- `src/pages/*.tsx` - All page components for content analysis
- `index.html` - Base HTML template
- `vite.config.ts` - Build configuration affecting performance

---

## Roadmap

### Planned Agents

1. **UI/UX Review Agent** (Future)
   - User interface analysis
   - Accessibility auditing
   - Design consistency checks

2. **Performance Optimization Agent** (Future)
   - Code bundle analysis
   - Runtime performance profiling
   - Memory leak detection

3. **Security Audit Agent** (Future)
   - Vulnerability scanning
   - Dependency auditing
   - Code security review

4. **API Documentation Agent** (Future)
   - Endpoint documentation generation
   - API schema validation
   - OpenAPI spec creation

5. **Test Coverage Agent** (Future)
   - Test completeness analysis
   - Coverage gap identification
   - Test improvement recommendations

---

## Contributing

To add or improve agents:

1. Create/modify agent file in `.claude/agents/`
2. Follow the agent file structure template
3. Update this README with agent details
4. Test the agent with various invocations
5. Document example use cases

---

## Support & Feedback

For issues or improvements related to agents:
- Report bugs at: https://github.com/anthropics/claude-code/issues
- Refer to Claude Code docs: https://docs.claude.com/en/docs/claude-code/

---

## Version History

- **2025-12-01**: Initial agent system setup
  - Added SEO Optimization Expert agent
  - Added Australian Health & Pharmacy SEO Copywriter agent
  - Created comprehensive agent documentation structure
  - Established compliance frameworks (TGA, APHRA, PBS)
  - Built industry-specific templates and guidelines

---

**Remember**: Agents are specialized experts. Invoke them when you need deep domain expertise beyond general Claude Code capabilities.
