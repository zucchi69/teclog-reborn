import { ArrowLeft, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features?: string[];
  images: string[];
}

export const ServicePageLayout = ({
  title,
  subtitle,
  heroImage,
  description,
  features,
  images,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Compact with solid color */}
      <section className="bg-petrol-dark py-6">
        <div className="container mx-auto px-4">
          <span className="block text-secondary font-medium tracking-widest uppercase text-xs mb-1">
            {subtitle}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
            {title}
          </h1>
          <Link
            to="/#servicos"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-3 h-3" />
            Voltar aos serviços
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {features && features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Métodos e Técnicas
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* CTA */}
              <div className="pt-6">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contato">
                    <Mail className="w-4 h-4" />
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image Gallery with Skeleton Loading */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-lg ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <ImageWithSkeleton
                    src={image}
                    alt={`${title} - Imagem ${index + 1}`}
                    className="hover:scale-105 transition-transform duration-500"
                    aspectRatio="video"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Conheça Nossos Outros Serviços
          </h2>
          <Button asChild variant="outline" size="lg">
            <Link to="/#servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
