export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "elegir-prestamo",
    title: "Cómo elegir el préstamo adecuado según tus necesidades",
    description:
      "Conoce qué factores considerar antes de solicitar un préstamo...",
    content:
      "Contenido completo del post. Aquí explicas tasas, plazos, riesgos...",
    image: "/finanzas1.jpeg",
    category: "Educación Financiera",
  },
  {
    slug: "mantener-pagos",
    title: "Consejos para mantener tus pagos al día",
    description: "Aprende estrategias simples para organizar tus cuotas...",
    content: "Usa recordatorios, automatiza pagos, evita intereses...",
    image: "/finanzas2.jpeg",
    category: "Finanzas Personales",
  },
  {
    slug: "errores-financiamiento",
    title: "Errores comunes al solicitar financiamiento",
    description: "Evita decisiones apresuradas...",
    content: "No leer contratos, ignorar tasas, sobreendeudarse...",
    image: "/finanzas3.jpeg",
    category: "Recomendaciones",
  },
];
