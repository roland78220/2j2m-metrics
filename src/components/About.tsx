
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-brand-lightGray/50">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">L'expertise 2J2M</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">À propos de nous</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            2J2M Métrés est spécialisé dans la réalisation de métrés précis et détaillés
            pour les entreprises générales du bâtiment, en utilisant les dernières technologies
            numériques pour optimiser vos réponses aux appels d'offres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-xl font-semibold text-brand-darkGray mb-6">Notre mission</h3>
              <p className="text-brand-gray mb-6">
                Nous accompagnons les entreprises générales dans l'établissement de leurs devis
                grâce à des métrés rigoureux, précis et optimisés qui constituent la base 
                d'études de prix fiables et compétitives.
              </p>

              <ul className="space-y-4">
                {[
                  "Optimisation de vos réponses aux appels d'offres",
                  "Gain de temps considérable sur l'établissement des métrés",
                  "Réduction des risques d'erreurs et d'oublis",
                  "Support technique expert tout au long de vos projets"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-brand-blue shrink-0 mr-3 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="aspect-video bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-lightBlue/5"></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 text-center">
                <div className="text-5xl font-bold text-brand-blue mb-3">15+</div>
                <p className="text-xl font-medium text-brand-darkGray mb-1">Années d'expérience</p>
                <p className="text-brand-gray">dans les métrés du bâtiment</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <p className="text-sm text-brand-darkGray">Digital</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">24h</div>
                <p className="text-sm text-brand-darkGray">Réactivité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
