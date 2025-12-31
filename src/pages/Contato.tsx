import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-petrol-dark py-8">
        <div className="container mx-auto px-4">
          <span className="block text-secondary font-medium tracking-widest uppercase text-xs mb-1">
            Fale Conosco
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white">
            Entre em Contato
          </h1>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Contato;
