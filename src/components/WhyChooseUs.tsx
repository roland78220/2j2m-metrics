
import { Clock, ShieldCheck, FileCheck, Users } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ icon: Icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-8 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue text-white mb-6">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-brand-darkGray mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Nos avantages</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Découvrez comment 2J2M Métrés peut transformer votre approche des appels d'offres 
            et optimiser votre processus d'étude de prix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <BenefitCard 
            icon={Clock} 
            title="Gain de temps" 
            description="Externalisez vos métrés pour vous concentrer sur votre cœur de métier et réduire le temps passé sur l'étude des prix."
            delay={0.1}
          />
          <BenefitCard 
            icon={ShieldCheck} 
            title="Réduction des erreurs" 
            description="Notre méthodologie rigoureuse et notre double vérification garantissent des métrés précis et fiables."
            delay={0.2}
          />
          <BenefitCard 
            icon={FileCheck} 
            title="Standardisation des livrables" 
            description="Recevez des livrables uniformisés facilitant l'exploitation des données pour tous vos projets."
            delay={0.3}
          />
          <BenefitCard 
            icon={Users} 
            title="Collaboration simplifiée" 
            description="Travaillez efficacement avec notre équipe réactive et nos outils collaboratifs pour une communication fluide."
            delay={0.4}
          />
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-3 bg-brand-darkBlue hover:bg-brand-blue transition-all shadow-md">
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
