import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
};

const setMetaTag = (attrName: string, attrValue: string, content: string) => {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.content = content;
};

export function Seo({
  title,
  description,
  keywords,
  author,
  image,
  url,
}: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    if (author) {
      setMetaTag('name', 'author', author);
    }

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', title);
    setMetaTag('name', 'twitter:title', title);

    if (image) {
      setMetaTag('property', 'og:image', image);
      setMetaTag('name', 'twitter:image', image);
    }

    if (url) {
      setMetaTag('property', 'og:url', url);
    }

    setMetaTag('name', 'twitter:card', 'summary_large_image');

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, keywords, author, image, url]);

  return null;
}
