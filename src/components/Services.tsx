
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
    <section id="services" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in"></div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Services de métré professionnel</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Notre expertise vous permet de vous concentrer sur votre cœur de métier
            tout en disposant de métrés précis pour vos études de prix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={Building} 
            title="Métrés Gros-oeuvre" 
            description="Quantitatifs précis de fondations, structures béton, maçonnerie et charpente pour des devis justes et compétitifs."
            delay={0.1}
          />
          <ServiceCard 
            icon={Ruler} 
            title="Métrés second oeuvre" 
            description="Tous lots architecturaux : plâtrerie, menuiserie, revêtements, plomberie, électricité, pour une analyse complète de vos projets."
            delay={0.2}
          />
          <ServiceCard 
            icon={FileSpreadsheet} 
            title="Tout type d'ouvrage" 
            description="Solutions adaptées pour le neuf et la réhabilitation : bâtiments résidentiels, tertiaires, industriels ou patrimoniaux."
            delay={0.3}
          />
          <ServiceCard 
            icon={Box} 
            title="Modélisation 3D" 
            description="Création de maquettes numériques exportables, facilitant la coordination et optimisant vos coûts de construction."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
