import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] bg-cover bg-center bg-no-repeat">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 bg-[url('/background_base.png')] bg-cover bg-center mix-blend-soft-light opacity-40" />

        {/* Additional decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00a9e0]/10 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
