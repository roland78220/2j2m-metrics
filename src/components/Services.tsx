
import { FileSpreadsheet, Ruler, Building, BarChart3 } from 'lucide-react';

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
          <div className="tag mb-4 animate-fade-in">Ce que nous proposons</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Nos Services</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Nous proposons une gamme complète de services de métrés pour optimiser
            vos appels d'offres et garantir la précision de vos devis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={FileSpreadsheet} 
            title="Métrés TCE" 
            description="Métrés Tous Corps d'État précis et détaillés pour vos appels d'offres, avec quantitatifs complets."
            delay={0.1}
          />
          <ServiceCard 
            icon={Ruler} 
            title="Optimisation des quantitatifs" 
            description="Contrôle et optimisation des quantités pour des devis compétitifs et sans risque de sous-estimation."
            delay={0.2}
          />
          <ServiceCard 
            icon={Building} 
            title="Modélisation BIM" 
            description="Extraction de quantités via la modélisation BIM pour une précision maximale et une visualisation claire."
            delay={0.3}
          />
          <ServiceCard 
            icon={BarChart3} 
            title="Analyse et conseil" 
            description="Accompagnement technique et analyse des métrés pour optimiser vos chances de remporter les appels d'offres."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
