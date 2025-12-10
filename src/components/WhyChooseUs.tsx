
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
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Vos avantages</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <BenefitCard 
            icon={Clock} 
            title="Gain de temps" 
            description="Concentrez-vous sur vos chantiers, on s'occupe des quantitatifs."
            delay={0.1}
          />
          <BenefitCard 
            icon={ShieldCheck} 
            title="Fiabilité" 
            description="Chaque métré est vérifié pour garantir des quantités exactes."
            delay={0.2}
          />
          <BenefitCard 
            icon={FileCheck} 
            title="Livrables prêts à l'emploi" 
            description="DPGF structurée et minute métré directement exploitables."
            delay={0.3}
          />
          <BenefitCard 
            icon={Users} 
            title="Réactivité" 
            description="Réponse sous 24h et suivi personnalisé de votre projet."
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
