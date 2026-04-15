import HeroSection from "@/components/sections/home/HeroSection";
import Levels from "@/components/sections/home/Levels";
import BenefitsSection from "@/components/sections/home/Benefits";
import FinalCTA from "@/components/sections/home/FinalCTA";
import LoansPeru from "@/components/sections/home/LoansPeru";
import Requirements from "@/components/sections/home/Requirements";
import Reasons from "@/components/sections/home/Reasons";
import Blog from "@/components/sections/home/Blog";
import LendingPartners from "@/components/sections/home/LendingPartners";
import TrustedPartners from "@/components/sections/home/TrustedPartners";
import FAQ from "@/components/sections/home/FAQ";
import Testimonials from "@/components/sections/home/Testimonials";
import HowItWorks from "@/components/sections/home/HowItWorks";
import HowToPay from "@/components/sections/home/HowtoPay";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Contact from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <Requirements />
      <HowItWorks />
      <HowToPay />
      <WhyChooseUs />
      <Levels />
      <LoansPeru />
      <TrustedPartners />
      <LendingPartners />
      <Testimonials />
      <Reasons />
      <FAQ />
      <Contact />
      <Blog />
      <FinalCTA />
    </div>
  );
}
