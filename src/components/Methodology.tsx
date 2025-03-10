
import { FileText, Calculator, Send } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const Step = ({ number, icon: Icon, title, description, delay = 0 }: StepProps) => {
  return (
    <div 
      className="relative flex flex-col md:flex-row items-start gap-6 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
          {number}
        </div>
      </div>
      <div className="flex-grow pb-12 md:pt-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-semibold text-brand-darkGray">{title}</h3>
        </div>
        <p className="text-brand-gray">{description}</p>
        
        {/* Connector line */}
        <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-4rem)] bg-gray-200 hidden md:block"></div>
      </div>
    </div>
  );
};

const Methodology = () => {
  return (
    <section id="methodology" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Notre approche</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Notre méthodologie</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Un processus structuré en 3 étapes pour réaliser vos métrés avec précision.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 lg:p-10 max-w-4xl mx-auto mb-10">
          <div className="space-y-2">
            <Step 
              number={1} 
              icon={FileText} 
              title="Analyse des documents et des besoins" 
              description="Nous étudions vos plans, CCTP et documents annexes afin de cerner précisément vos besoins et les caractéristiques du projet."
              delay={0.1}
            />
            <Step 
              number={2} 
              icon={Calculator} 
              title="Réalisation des métrés et vérification" 
              description="Nos experts réalisent les métrés en utilisant la méthode traditionnelle ou numérique selon votre projet. Chaque métré fait l'objet d'un contrôle systématique."
              delay={0.2}
            />
            <Step 
              number={3} 
              icon={Send} 
              title="Livrables et suivi" 
              description="Nous vous transmettons les livrables correspondant à vos attentes et restons à votre écoute pour toute précision ou modification éventuelle."
              delay={0.3}
            />
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-3 bg-brand-darkBlue hover:bg-brand-blue transition-all shadow-md">
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
