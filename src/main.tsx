import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/como-funciona", element: <ComoFunciona /> },
      // { path: "/como-pagar", element: <ComoPagar /> },
      // { path: "/renueva-tu-prestamo", element: <RenovarPrestamo /> },
      // { path: "/extension-de-pago", element: <ExtensionPago /> },
      // { path: "/nosotros", element: <Nosotros /> },
      // { path: "/blog", element: <Blog /> },
      // { path: "/blog/:blogId", element: <BlogDetalle /> },
      // { path: "/preguntas-frecuentes", element: <PreguntasFrecuentes /> },
      // { path: "/contacto", element: <Contacto /> },
      // { path: "/registrate", element: <Registro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
