import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BlogDetalle from "./pages/BlogDetalle";
// import ComoFunciona from './pages/ComoFunciona'
// import ComoPagar from './pages/ComoPagar'
// import RenovarPrestamo from './pages/RenovarPrestamo'
// import ExtensionPago from './pages/ExtensionPago'
// import Nosotros from './pages/Nosotros'
// import Blog from './pages/Blog'
// import BlogDetalle from './pages/BlogDetalle'
// import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
// import Contacto from './pages/Contacto'
// import Registro from './pages/Registro'
import "./index.css";
import HowItWorksPage from "./pages/HowItWorksPage";
import HowToPayPage from "./pages/HowToPayPage";
import BlogPage from "./pages/BlogPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import RenewLoanPage from "./pages/RenewLoan";
import About from "./pages/About";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsConditionsPage from "./pages/TermsConditions";
import ComplaintsBookPage from "./pages/ComplaintsBook";
import CookiesPolicyPage from "./pages/CookiesPolicy";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog/:slug", element: <BlogDetalle /> },
      { path: "*", element: <NotFound /> },
      { path: "/como-funciona", element: <HowItWorksPage /> },
      { path: "/como-pagar", element: <HowToPayPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/preguntas-frecuentes", element: <FAQ /> },
      { path: "/contacto", element: <Contact /> },
      { path: "/renueva-tu-prestamo", element: <RenewLoanPage /> },
      { path: "/nosotros", element: <About /> },
      { path: "/politica-privacidad", element: <PrivacyPolicyPage /> },
      { path: "/terminos-condiciones", element: <TermsConditionsPage /> },
      { path: "/libro-reclamaciones", element: <ComplaintsBookPage /> },
      { path: "/politica-cookies", element: <CookiesPolicyPage /> },
      // { path: "/extension-de-pago", element: <ExtensionPago /> },
      // { path: "/blog/:blogId", element: <BlogDetalle /> },
      // { path: "/registrate", element: <Registro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
