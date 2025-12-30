const clients = [
  { name: "Petrobras", abbr: "PB" },
  { name: "Transpetro", abbr: "TR" },
  { name: "Vale", abbr: "VA" },
  { name: "ArcelorMittal", abbr: "AM" },
  { name: "Samarco", abbr: "SM" },
  { name: "Petrocity", abbr: "PC" },
];

export const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Nossos Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Empresas que <span className="text-petrol">Confiam</span> em Nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Temos orgulho de atender algumas das maiores empresas do setor energético e 
            industrial do Brasil, construindo parcerias duradouras baseadas em confiança e resultados.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-card rounded-2xl p-8 flex flex-col items-center justify-center border border-border hover:border-gold/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-petrol transition-colors duration-300">
                <span className="text-2xl font-heading font-bold text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">
                  {client.abbr}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground text-center">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
            Quer fazer parte dessa lista?
          </h3>
          <p className="text-gold-light text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos agregar valor às operações 
            da sua empresa com nossos serviços especializados.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gold text-petrol-dark font-semibold px-8 py-4 rounded-xl hover:bg-gold-light transition-colors shadow-gold"
          >
            Solicitar Proposta Comercial
          </a>
        </div>
      </div>
    </section>
  );
};
