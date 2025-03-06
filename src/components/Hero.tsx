
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-brand-blue/10 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-brand-lightBlue/10 to-transparent opacity-50"></div>
      </div>

      <div className="container-tight relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="tag mb-5 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            Expert en métrés pour le bâtiment
          </div>
          
          <h1 className="mb-6 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
            <span className="text-brand-darkGray">Métrés précis et optimisés pour vos </span>
            <span className="text-brand-blue">appels d'offres</span>
          </h1>
          
          <p className="text-xl text-brand-gray mb-8 animate-fade-in-down" style={{ animationDelay: '0.5s' }}>
            Digitalisation et expertise à votre service pour des études de prix fiables et compétitives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-down" style={{ animationDelay: '0.7s' }}>
            <a href="#contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              Demander un devis
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline w-full sm:w-auto">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
