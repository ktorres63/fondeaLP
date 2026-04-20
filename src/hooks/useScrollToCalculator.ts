import { useNavigate, useLocation } from "react-router";

export const useScrollToCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToCalculator = () => {
    const isHome = location.pathname === "/";

    const performScroll = () => {
      const calculator = document.getElementById("calculadora");
      if (calculator) {
        // Scroll con offset para header
        const headerOffset = 100;
        const elementPosition = calculator.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Highlight effect con animación pulsante
        calculator.classList.add("highlight-pulse");

        // Remover clase después de la animación
        setTimeout(() => {
          calculator.classList.remove("highlight-pulse");
        }, 2000);
      }
    };

    if (isHome) {
      // Si ya estamos en home, solo hacer scroll
      performScroll();
    } else {
      // Si estamos en otra página, navegar a home y luego scroll
      navigate("/");
      setTimeout(() => {
        performScroll();
      }, 300);
    }
  };

  return scrollToCalculator;
};
