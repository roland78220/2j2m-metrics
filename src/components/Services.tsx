
import { FileSpreadsheet, Ruler, Building, BarChart3, CheckCircle } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ServiceCard 
            icon={FileSpreadsheet} 
            title="Métrés tous corps d'état" 
            description="Relevés quantitatifs détaillés et complets pour chaque lot, entièrement adaptés à vos besoins spécifiques."
            delay={0.1}
          />
          <ServiceCard 
            icon={Ruler} 
            title="Vérification et optimisation" 
            description="Analyse approfondie des quantitatifs pour identifier les incohérences et optimiser vos réponses aux appels d'offres."
            delay={0.2}
          />
          <ServiceCard 
            icon={Building} 
            title="Extraction depuis BIM" 
            description="Exploitation des maquettes numériques pour des métrés ultra-précis intégrant toutes les spécificités techniques."
            delay={0.3}
          />
          <ServiceCard 
            icon={BarChart3} 
            title="Conseil et accompagnement" 
            description="Support technique expert pour analyser vos métrés et maximiser vos chances de remporter les marchés."
            delay={0.4}
          />
        </div>

        <div className="bg-brand-lightGray/50 rounded-xl p-8 animate-fade-in">
          <h3 className="text-xl font-semibold text-brand-darkGray mb-6">Notre engagement</h3>
          <p className="text-brand-gray mb-6">
            Nous vous garantissons des métrés d'une précision irréprochable, réalisés avec 
            les technologies numériques les plus avancées, pour vous permettre de remporter 
            plus d'appels d'offres grâce à des études de prix fiables et compétitives.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              {[
                "Réduction significative du temps passé sur les métrés",
                "Élimination des erreurs et oublis coûteux"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-brand-blue shrink-0 mr-3 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "Détection des incohérences dans les plans et documents",
                "Accompagnement personnalisé tout au long de vos appels d'offres"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-brand-blue shrink-0 mr-3 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
