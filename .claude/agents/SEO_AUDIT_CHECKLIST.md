# SEO Audit Checklist

Use this checklist when running SEO audits with the SEO Optimization Expert agent. This ensures comprehensive coverage of all SEO aspects.

## Pre-Audit Preparation

- [ ] Identify pages/areas to audit
- [ ] Note any recent changes or updates
- [ ] Document current performance metrics (if available)
- [ ] Define primary goals (traffic, rankings, conversions)
- [ ] Identify target keywords per page

---

## 1. Technical SEO Checklist

### Crawlability & Indexability
- [ ] Robots.txt configuration verified
- [ ] Sitemap.xml exists and is accurate
- [ ] No crawl errors or broken links
- [ ] Canonical URLs properly implemented
- [ ] No duplicate content issues
- [ ] Redirect chains checked (301/302)
- [ ] HTTPS properly configured
- [ ] No mixed content warnings

### Site Architecture
- [ ] Clean, semantic URL structure
- [ ] Logical site hierarchy (max 3 clicks to any page)
- [ ] Internal linking strategy implemented
- [ ] No orphaned pages
- [ ] Breadcrumb navigation implemented
- [ ] XML sitemap submitted to search engines

### Performance & Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s ✅
- [ ] FID (First Input Delay) < 100ms ✅
- [ ] CLS (Cumulative Layout Shift) < 0.1 ✅
- [ ] TTFB (Time to First Byte) < 600ms
- [ ] Overall page load time < 3s
- [ ] Images optimized (WebP/AVIF, compressed, lazy loaded)
- [ ] JavaScript bundle size optimized
- [ ] CSS delivery optimized (critical CSS inlined)
- [ ] Server response times acceptable
- [ ] Browser caching configured

### Mobile Optimization
- [ ] Responsive design implemented
- [ ] Mobile viewport properly configured
- [ ] Touch targets ≥ 48x48px
- [ ] Mobile-friendly navigation
- [ ] No horizontal scrolling
- [ ] Mobile page speed optimized
- [ ] Fonts readable without zooming (≥16px base)

---

## 2. On-Page SEO Checklist

### Meta Tags
- [ ] **Title Tags**
  - [ ] Present on all pages
  - [ ] Unique for each page
  - [ ] 50-60 characters length
  - [ ] Primary keyword included
  - [ ] Brand name included
  - [ ] Compelling and clickable

- [ ] **Meta Descriptions**
  - [ ] Present on all pages
  - [ ] Unique for each page
  - [ ] 150-160 characters length
  - [ ] Includes call-to-action
  - [ ] Keywords naturally included
  - [ ] Compelling value proposition

- [ ] **Open Graph Tags**
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (1200x630px)
  - [ ] og:type
  - [ ] og:url
  - [ ] og:site_name

- [ ] **Twitter Card Tags**
  - [ ] twitter:card
  - [ ] twitter:title
  - [ ] twitter:description
  - [ ] twitter:image

- [ ] **Other Meta Tags**
  - [ ] Canonical tag (on all pages)
  - [ ] Robots meta tag (index, follow)
  - [ ] Viewport meta tag
  - [ ] Theme color meta tag

### Content Structure
- [ ] **Heading Hierarchy**
  - [ ] One H1 per page (unique, descriptive)
  - [ ] Logical H2 → H3 → H4 flow (no skipping)
  - [ ] Keywords in headings (natural usage)
  - [ ] Descriptive, clear headings

- [ ] **Content Quality**
  - [ ] Sufficient length (1000+ words for key pages)
  - [ ] Original, unique content
  - [ ] Keyword optimization (natural, not stuffed)
  - [ ] Semantic keyword variations used
  - [ ] Good readability (short paragraphs, bullet points)
  - [ ] E-E-A-T demonstrated (expertise, authority, trust)
  - [ ] User search intent addressed
  - [ ] Regular content updates

- [ ] **Semantic HTML**
  - [ ] Proper use of <article>, <section>, <aside>, <nav>
  - [ ] Lists use <ul>/<ol> tags
  - [ ] Quotes use <blockquote>
  - [ ] Important text uses <strong>/<em>
  - [ ] Code uses <code>/<pre>

### Image Optimization
- [ ] Alt text on all images (descriptive, keyword-relevant)
- [ ] Descriptive file names (not IMG_1234.jpg)
- [ ] Modern formats (WebP, AVIF)
- [ ] Proper compression (balanced quality/size)
- [ ] Responsive images (srcset, sizes attributes)
- [ ] Lazy loading implemented (below-fold images)
- [ ] Image dimensions specified (width, height attributes)

### Internal Linking
- [ ] Descriptive anchor text (not "click here")
- [ ] Links to related content
- [ ] Important pages linked from high-authority pages
- [ ] Deep linking implemented (not just homepage links)
- [ ] Reasonable link density (not excessive)
- [ ] No broken internal links

---

## 3. Structured Data Checklist

### Core Schemas (Implemented)
- [ ] **Organization Schema** (all pages)
  - [ ] Name, URL, logo
  - [ ] Social media links (sameAs)
  - [ ] Contact information
  - [ ] Area served

- [ ] **WebSite Schema** (homepage)
  - [ ] Name, URL
  - [ ] Search action (if applicable)

- [ ] **BreadcrumbList** (all pages except homepage)
  - [ ] Correct hierarchy
  - [ ] Proper position numbering

### Page-Specific Schemas
- [ ] **Service Schema** (service pages)
  - [ ] Service type, name, description
  - [ ] Provider information
  - [ ] Service area
  - [ ] Offer catalog (if multiple services)

- [ ] **FAQPage Schema** (FAQ sections)
  - [ ] Question and answer pairs
  - [ ] Complete, helpful answers
  - [ ] Relevant to page content

- [ ] **Product Schema** (product pages)
  - [ ] Name, description, brand
  - [ ] Offers (price, availability)
  - [ ] Aggregate rating (if applicable)
  - [ ] Image

- [ ] **SoftwareApplication Schema** (app/dashboard pages)
  - [ ] Name, description, category
  - [ ] Operating system
  - [ ] Features list
  - [ ] Screenshot
  - [ ] Rating

- [ ] **Article/BlogPosting** (blog/article pages)
  - [ ] Headline, author, date published
  - [ ] Date modified
  - [ ] Image
  - [ ] Publisher information

### Schema Validation
- [ ] No errors in Google Rich Results Test
- [ ] No errors in Schema.org Validator
- [ ] Rich results eligibility confirmed
- [ ] JSON-LD properly formatted
- [ ] All required properties included
- [ ] Recommended properties added where applicable

---

## 4. Content Optimization Checklist

### Keyword Strategy
- [ ] Primary keyword identified per page
- [ ] Semantic keyword variations mapped
- [ ] Long-tail keywords targeted
- [ ] No keyword cannibalization
- [ ] Search intent aligned (informational, navigational, transactional)
- [ ] Keyword in title tag
- [ ] Keyword in H1
- [ ] Keyword in first 100 words
- [ ] Keyword in alt text (where natural)
- [ ] Natural keyword density (1-2%)

### Content Quality
- [ ] E-E-A-T signals present
  - [ ] Experience demonstrated
  - [ ] Expertise shown (credentials, case studies)
  - [ ] Authoritativeness established (backlinks, mentions)
  - [ ] Trustworthiness conveyed (reviews, testimonials)
- [ ] Content comprehensive and in-depth
- [ ] Topic fully covered (no gaps)
- [ ] Unique value provided
- [ ] Regular updates (content freshness)
- [ ] Engaging, readable writing style
- [ ] Questions answered directly

### User Experience
- [ ] Clear value proposition (above fold)
- [ ] Scannable content (headings, bullets, short paragraphs)
- [ ] Logical content flow
- [ ] Clear calls-to-action
- [ ] No intrusive pop-ups
- [ ] Fast loading time
- [ ] Mobile-friendly layout
- [ ] Accessible to all users

---

## 5. AI Search Engine Optimization Checklist

### Conversational Query Optimization
- [ ] Content answers natural language questions
- [ ] FAQ format used where appropriate
- [ ] Complete, comprehensive answers provided
- [ ] Voice search compatibility considered
- [ ] Question-based headings used (e.g., "What is...", "How to...")

### Entity-Based SEO
- [ ] Clear entity definitions (people, places, products, services)
- [ ] Consistent entity naming
- [ ] Entity linking implemented (internal and external)
- [ ] Schema.org entities properly marked up

### Contextual Relevance
- [ ] Topical authority demonstrated
- [ ] Clustered content strategy (pillar pages + supporting content)
- [ ] Semantic relationships between pages
- [ ] Natural language (no keyword stuffing)
- [ ] Comprehensive information provided

### AI Crawlability
- [ ] Clean, semantic HTML structure
- [ ] Proper context through markup
- [ ] AI discovery meta tags implemented:
  - [ ] `<meta name="ai:content_type">`
  - [ ] `<meta name="ai:category">`
  - [ ] `<meta name="ai:primary_topic">`
- [ ] Structured data for AI understanding

---

## 6. Competitive Analysis Checklist

### Competitor Identification
- [ ] Top 5 organic competitors identified
- [ ] Direct business competitors identified
- [ ] Keyword overlap analyzed

### Competitor SEO Analysis
- [ ] Competitor keyword strategies mapped
- [ ] Competitor content depth evaluated
- [ ] Competitor technical SEO assessed
- [ ] Competitor backlink profiles reviewed (for outreach ideas)
- [ ] Gap analysis completed (opportunities they miss)
- [ ] Competitive advantages identified

---

## 7. Local SEO Checklist (If Applicable)

- [ ] Google Business Profile claimed and optimized
- [ ] NAP (Name, Address, Phone) consistent across web
- [ ] LocalBusiness schema implemented
- [ ] Location pages created (if multiple locations)
- [ ] Local keywords targeted
- [ ] Reviews and ratings displayed
- [ ] Local citations built (directories)

---

## 8. International SEO Checklist (If Applicable)

- [ ] Hreflang tags implemented (for multi-language)
- [ ] Proper URL structure (subdomain, subdirectory, or ccTLD)
- [ ] Language and region targeting set in Search Console
- [ ] Localized content created (not just translated)
- [ ] Currency and cultural differences addressed

---

## 9. Accessibility (a11y) Checklist

(Accessibility improves SEO and user experience)

- [ ] Semantic HTML used correctly
- [ ] Alt text on all images
- [ ] Form labels properly associated
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient (WCAG AA or AAA)
- [ ] ARIA labels used where needed
- [ ] Skip navigation links provided
- [ ] No flashing/strobing content
- [ ] Video captions/transcripts provided

---

## 10. Monitoring & Tracking Checklist

### Tools Setup
- [ ] Google Search Console configured
- [ ] Google Analytics installed
- [ ] Bing Webmaster Tools configured
- [ ] Core Web Vitals monitoring set up
- [ ] Rank tracking tool configured (if using)

### Metrics to Track
- [ ] Organic search traffic
- [ ] Keyword rankings (target keywords)
- [ ] Click-through rate (CTR)
- [ ] Bounce rate
- [ ] Time on site
- [ ] Pages per session
- [ ] Conversion rate (organic traffic)
- [ ] Core Web Vitals scores
- [ ] Indexation coverage
- [ ] Crawl errors
- [ ] Rich result appearances

---

## Post-Audit Actions

### Prioritization
- [ ] Issues categorized by severity (CRITICAL, HIGH, MEDIUM, LOW)
- [ ] Quick wins identified
- [ ] Long-term projects defined
- [ ] Resources allocated

### Implementation Plan
- [ ] Action items documented
- [ ] Owners assigned
- [ ] Timeline established
- [ ] Success metrics defined
- [ ] Review cadence set

### Follow-up
- [ ] Re-audit scheduled (post-implementation)
- [ ] Monitoring dashboard created
- [ ] Regular reporting scheduled (monthly)
- [ ] Continuous improvement process established

---

## SEO Audit Frequency

### Recommended Schedule
- **Full Comprehensive Audit**: Quarterly (every 3 months)
- **Quick Check Audit**: After major updates or new page launches
- **Monitoring Audit**: Monthly (change detection, new issues)
- **Performance Audit**: Weekly (Core Web Vitals, page speed)

### Audit Triggers
Run an audit when:
- ✅ New pages or features are added
- ✅ Major content updates occur
- ✅ Site structure changes
- ✅ Design/template changes
- ✅ Organic traffic drops significantly
- ✅ Algorithm updates announced
- ✅ Before major deployments
- ✅ Competitor makes major changes

---

## Using This Checklist with the SEO Agent

### Step 1: Run Agent Audit
```
Claude, use the seo-optimization-expert agent to perform a comprehensive SEO audit using the SEO_AUDIT_CHECKLIST.md as a reference.
```

### Step 2: Review Checklist Coverage
Cross-reference the agent's findings with this checklist to ensure nothing was missed.

### Step 3: Prioritize Actions
Use the agent's severity classifications and this checklist to create a prioritized action plan.

### Step 4: Implement Fixes
Follow the agent's code examples and recommendations.

### Step 5: Verify
```
Claude, use the seo-optimization-expert agent to verify that the fixes from the audit have been properly implemented.
```

---

## Notes

- ✅ **Green checkmarks** indicate items to verify/complete
- 🔍 Some items may not apply to all websites (e.g., local SEO, international SEO)
- 📊 Track progress by checking off completed items
- 🔄 Re-run this checklist quarterly for ongoing optimization
- 💡 Focus on CRITICAL and HIGH priority items first

---

## Quick Reference: Priority Levels

| Priority | Timeline | Example Issues |
|----------|----------|----------------|
| **CRITICAL** | Fix immediately | Missing title tags, noindex on important pages, broken canonicals, severe performance issues |
| **HIGH** | Fix within 1 week | Suboptimal meta descriptions, missing alt text, poor heading hierarchy, missing key schemas |
| **MEDIUM** | Fix within 1 month | Internal linking improvements, additional structured data, content enhancements, minor performance tweaks |
| **LOW** | Nice to have | Advanced schema types, incremental performance gains, minor content additions |

---

## Resources

- **SEO Agent Documentation**: [seo-optimization-expert.md](./seo-optimization-expert.md)
- **Quick Start Guide**: [QUICK_START.md](./QUICK_START.md)
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Schema.org Validator**: https://validator.schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

**Last Updated**: December 1, 2025
**Version**: 1.0.0

Use this checklist to ensure comprehensive SEO coverage in every audit! 🚀
