import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Serviços",
  href: "#servicos"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Clientes",
  href: "#clientes"
}, {
  label: "Contato",
  href: "#contato"
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <>
      {/* Top Bar */}
      <div className="text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+552732450143" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>(27) 3245-0143</span>
            </a>
            <a href="mailto:teclog@teclog.eng.br" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span>teclog@teclog.eng.br</span>
            </a>
          </div>
          <span className="font-medium text-primary-foreground">+30 anos de excelência em engenharia</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-petrol-accent rounded-xl flex items-center justify-center shadow-petrol">
              <span className="text-primary-foreground font-heading font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? 'text-petrol' : 'text-primary-foreground'}`}>
                TECLOG
              </span>
              <span className={`text-xs font-medium tracking-widest ${isScrolled ? 'text-muted-foreground' : 'text-gold-light'}`}>
                TECNOLOGIA E LOGÍSTICA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(link => <a key={link.label} href={link.href} className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${isScrolled ? "text-foreground hover:text-petrol hover:bg-muted" : "text-primary-foreground/90 hover:text-gold-light hover:bg-primary-foreground/10"}`}>
                {link.label}
              </a>)}
            <Button variant={isScrolled ? "default" : "hero"} size="lg" className="ml-4" asChild>
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"}`}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}`}>
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {navLinks.map(link => <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
                {link.label}
              </a>)}
            <Button variant="default" size="lg" className="mt-4" asChild>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Orçamento</a>
            </Button>
          </div>
        </div>
      </header>
    </>;
};