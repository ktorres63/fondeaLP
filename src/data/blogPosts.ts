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
      "Conoce qué factores considerar antes de solicitar un préstamo y evita errores comunes.",
    content:
      "Antes de solicitar un préstamo, evalúa la tasa de interés, el plazo y el costo total. No te dejes llevar solo por la cuota mensual. Compara opciones, revisa el TCEA y asegúrate de que el pago se ajuste a tu capacidad real. Un buen préstamo es el que puedes pagar sin comprometer tu estabilidad financiera.",
    image: "/finanzas1.png",
    category: "Educación Financiera",
  },
  {
    slug: "mantener-pagos",
    title: "Consejos para mantener tus pagos al día",
    description:
      "Aprende estrategias simples para organizar tus cuotas y evitar intereses.",
    content:
      "Usa recordatorios automáticos, agenda tus fechas de pago y prioriza tus deudas más urgentes. Si puedes, activa el débito automático. Evitar retrasos no solo te ahorra dinero, también mejora tu historial crediticio.",
    image: "/finanzas2.png",
    category: "Finanzas Personales",
  },
  {
    slug: "errores-financiamiento",
    title: "Errores comunes al solicitar financiamiento",
    description: "Evita decisiones apresuradas que pueden afectar tu economía.",
    content:
      "Uno de los errores más comunes es no leer el contrato completo. También es frecuente ignorar el costo total del préstamo o pedir más dinero del necesario. Analiza bien antes de comprometerte.",
    image: "/finanzas3.png",
    category: "Recomendaciones",
  },
  {
    slug: "mejorar-historial-crediticio",
    title: "Cómo mejorar tu historial crediticio rápidamente",
    description:
      "Sigue estos pasos para aumentar tus posibilidades de acceso a crédito.",
    content:
      "Paga a tiempo, reduce tus deudas actuales y evita solicitar múltiples créditos en poco tiempo. Mantener un buen historial abre puertas a mejores tasas y oportunidades financieras.",
    image: "/finanzas4.webp",
    category: "Educación Financiera",
  },
  {
    slug: "presupuesto-mensual",
    title: "Cómo crear un presupuesto mensual efectivo",
    description: "Organiza tus ingresos y gastos de forma inteligente.",
    content:
      "Divide tus ingresos en categorías: necesidades, ahorro y gastos personales. Usa la regla 50/30/20 como guía. Llevar control te permitirá tomar mejores decisiones financieras.",
    image: "/finanzas5.jpg",
    category: "Finanzas Personales",
  },
  {
    slug: "ahorro-inteligente",
    title: "5 estrategias para ahorrar dinero sin esfuerzo",
    description: "Pequeños cambios que generan grandes resultados.",
    content:
      "Automatiza tus ahorros, evita gastos innecesarios y aprovecha descuentos. Ahorrar no significa dejar de vivir, sino gastar con intención.",
    image: "/finanzas6.png",
    category: "Ahorro",
  },
  {
    slug: "usar-tarjeta-credito",
    title: "Cómo usar tu tarjeta de crédito sin endeudarte",
    description: "Aprende a aprovechar sus beneficios sin caer en deudas.",
    content:
      "No gastes más de lo que puedes pagar al mes. Evita el pago mínimo y usa la tarjeta como herramienta, no como extensión de tu ingreso.",
    image: "/finanzas7.jpg",
    category: "Finanzas Personales",
  },
  {
    slug: "fondos-emergencia",
    title: "Por qué necesitas un fondo de emergencia",
    description: "Prepárate para imprevistos sin afectar tu estabilidad.",
    content:
      "Un fondo de emergencia debe cubrir entre 3 a 6 meses de gastos. Te protege ante situaciones inesperadas como pérdida de empleo o gastos médicos.",
    image: "/finanzas8.jpg",
    category: "Ahorro",
  },
  {
    slug: "invertir-principiantes",
    title: "Guía básica para empezar a invertir",
    description: "Todo lo que necesitas saber antes de invertir tu dinero.",
    content:
      "Empieza con instrumentos simples, diversifica y evita decisiones emocionales. Invertir es un proceso a largo plazo, no una forma de ganar dinero rápido.",
    image: "/finanzas9.jpg",
    category: "Inversión",
  },
  {
    slug: "controlar-gastos-hormiga",
    title: "Cómo eliminar los gastos hormiga",
    description: "Pequeños gastos que afectan tu economía sin darte cuenta.",
    content:
      "Identifica en qué estás gastando diariamente y elimina lo innecesario. Esos pequeños montos pueden convertirse en ahorro significativo a fin de mes.",
    image: "/finanzas10.jpg",
    category: "Finanzas Personales",
  },
];
