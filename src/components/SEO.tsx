import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords = '',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1658988958556-72342117610f?w=1200&h=630&fit=crop',
  canonical,
  author = 'Innovation1 Web Design & Development',
  publishedTime,
  modifiedTime,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description, true);
    if (keywords) {
      setMetaTag('keywords', keywords, true);
    }
    setMetaTag('author', author, true);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1', true);
    setMetaTag('googlebot', 'index, follow', true);

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:type', ogType);
    setMetaTag('og:image', ogImage);
    setMetaTag('og:image:width', '1200');
    setMetaTag('og:image:height', '630');
    setMetaTag('og:site_name', 'Innovation1');
    setMetaTag('og:locale', 'en_US');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', ogImage, true);

    // Additional SEO tags
    setMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5', true);
    setMetaTag('theme-color', '#2D9CDB', true);
    setMetaTag('mobile-web-app-capable', 'yes', true);
    setMetaTag('apple-mobile-web-app-capable', 'yes', true);
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent', true);

    // Article specific tags
    if (publishedTime) {
      setMetaTag('article:published_time', publishedTime);
    }
    if (modifiedTime) {
      setMetaTag('article:modified_time', modifiedTime);
    }
    if (author) {
      setMetaTag('article:author', author);
    }

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }

    // AI Discovery optimization meta tags
    setMetaTag('ai:content_type', 'service', true);
    setMetaTag('ai:category', 'web development, AI automation, software engineering', true);
  }, [title, description, keywords, ogType, ogImage, canonical, author, publishedTime, modifiedTime, structuredData]);

  return null;
}
