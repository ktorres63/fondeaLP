import { useEffect } from "react";
import { useLocation } from "react-router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const defaultSEO = {
  title: "FONDEA - Préstamos Personales Rápidos y Seguros en Perú | Hasta S/ 25,000",
  description: "Solicita tu préstamo personal 100% online en FONDEA. Aprobación rápida, montos desde S/ 1,500 hasta S/ 25,000. Sin papeleos, proceso seguro y transparente. ¡Obtén tu dinero en menos de 24 horas!",
  keywords: "préstamos personales perú, préstamos online, créditos rápidos, préstamos sin garantía, dinero rápido perú, préstamos sbs, fondea préstamos",
  ogImage: "https://fondea.pe/logoFondea.png",
};

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  canonical,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title || defaultSEO.title;

    // Update meta tags
    updateMetaTag("name", "description", description || defaultSEO.description);
    updateMetaTag("name", "keywords", keywords || defaultSEO.keywords);

    // Update Open Graph
    updateMetaTag("property", "og:title", title || defaultSEO.title);
    updateMetaTag("property", "og:description", description || defaultSEO.description);
    updateMetaTag("property", "og:image", ogImage || defaultSEO.ogImage);
    updateMetaTag("property", "og:url", `https://fondea.pe${location.pathname}`);

    // Update Twitter Card
    updateMetaTag("name", "twitter:title", title || defaultSEO.title);
    updateMetaTag("name", "twitter:description", description || defaultSEO.description);
    updateMetaTag("name", "twitter:image", ogImage || defaultSEO.ogImage);

    // Update canonical
    updateCanonical(canonical || `https://fondea.pe${location.pathname}`);
  }, [title, description, keywords, ogImage, canonical, location.pathname]);

  return null;
}

function updateMetaTag(attr: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}
