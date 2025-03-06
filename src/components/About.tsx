
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-brand-lightGray/50">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Qui sommes-nous</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Notre expertise au service de vos projets</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            2J2M Métrés accompagne les entreprises du bâtiment dans l'optimisation de leurs réponses
            aux appels d'offres grâce à une expertise pointue en métrés numériques et en modélisation BIM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-xl font-semibold text-brand-darkGray mb-6">Notre engagement</h3>
              <p className="text-brand-gray mb-6">
                Nous vous garantissons des métrés d'une précision irréprochable, réalisés avec 
                les technologies numériques les plus avancées, pour vous permettre de remporter 
                plus d'appels d'offres grâce à des études de prix fiables et compétitives.
              </p>

              <ul className="space-y-4">
                {[
                  "Réduction significative du temps passé sur les métrés",
                  "Élimination des erreurs et oublis coûteux",
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

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="aspect-video bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-lightBlue/5"></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 text-center">
                <div className="text-5xl font-bold text-brand-blue mb-3">15+</div>
                <p className="text-xl font-medium text-brand-darkGray mb-1">Années d'expérience</p>
                <p className="text-brand-gray">dans le métré numérique</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <p className="text-sm text-brand-darkGray">Digital</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">24h</div>
                <p className="text-sm text-brand-darkGray">Délai de réponse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
