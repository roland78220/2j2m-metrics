
import { Building, Ruler, FileSpreadsheet, Box, CheckCircle } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: any, 
  title: string, 
  description: string,
  delay?: number
}) => {
  return (
    <div 
      className="glass-card p-8 card-hover animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="feature-icon-container">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-brand-darkGray mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section pt-8 md:pt-12">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Nos services</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Des métrés fiables pour tous vos projets de construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={Building} 
            title="Gros œuvre" 
            description="Fondations, béton, maçonnerie et charpente."
            delay={0.1}
          />
          <ServiceCard 
            icon={Ruler} 
            title="Second œuvre" 
            description="Plâtrerie, menuiserie, revêtements, plomberie, électricité."
            delay={0.2}
          />
          <ServiceCard 
            icon={FileSpreadsheet} 
            title="Neuf & réhabilitation" 
            description="Résidentiel, tertiaire, industriel ou patrimonial."
            delay={0.3}
          />
          <ServiceCard 
            icon={Box} 
            title="Maquette BIM" 
            description="Modélisation 3D et extraction automatique des quantités."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
