import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_METADATA, THEME } from "../lib/theme";

interface PageMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

const defaultDescription = `${THEME.siteName} is the official Rotaract District 9104 website in Ghana, sharing district news, projects, leadership, events, and service opportunities.`;

const PageMetadata = ({ title, description, image, path }: PageMetadataProps) => {
  const location = useLocation();
  const currentPath = path ?? location.pathname;
  const routeMetadata = PAGE_METADATA[currentPath as keyof typeof PAGE_METADATA];
  const pageTitle = title ?? routeMetadata?.title ?? THEME.siteTitle;
  const pageDescription = description ?? routeMetadata?.description ?? defaultDescription;
  const ogImage = image ?? THEME.socialImage;

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.setAttribute("lang", "en");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", pageDescription);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `${window.location.origin}${currentPath}`);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", ogImage);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", pageTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", pageDescription);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImage);
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalHref = `${window.location.origin}${currentPath}`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    // JSON-LD Organization schema
    const jsonLdId = 'site-jsonld';
    let jsonLd = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": THEME.siteName,
      "url": THEME.siteUrl,
      "logo": THEME.socialImage,
    };

    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      jsonLd.id = jsonLdId;
      document.head.appendChild(jsonLd);
    }
    jsonLd.text = JSON.stringify(organization);
  }, [currentPath, pageTitle, pageDescription, ogImage]);

  return null;
};

export default PageMetadata;
