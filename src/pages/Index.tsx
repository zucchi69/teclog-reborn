import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with shared background */}
      <div className="relative overflow-hidden">
        {/* Shared Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-[center_85%] scale-110" />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute inset-0 bg-petrol-dark/40" />
        </div>
        
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>
      
      <main>
        <Services />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
