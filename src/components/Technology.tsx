
import { Code, DatabaseIcon, CogIcon, Layers } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Notre expertise digitale</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Solutions numériques de métré</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Nous utilisons les technologies numériques les plus avancées pour garantir 
            fiabilité, précision et gain de temps considérable sur vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 z-10 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-lightBlue/5 rounded-xl"></div>
                <div className="relative h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-brand-darkGray mb-6">ATTIC+</h3>
                  <p className="text-brand-gray mb-6">
                    Spécialistes certifiés du logiciel ATTIC+, nous garantissons une extraction 
                    des quantitatifs parfaitement adaptée à vos besoins pour chaque corps d'état.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Analyse détaillée des plans</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Détection automatique des incohérences</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Export Excel compatible avec vos outils</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-lightBlue/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8">
              <div className="feature-icon-container">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Maquette numérique & BIM</h3>
              <p className="text-brand-gray mb-4">
                Expertise en extraction de données depuis les maquettes BIM pour un métré complet
                et précis, intégrant toutes les couches et spécificités techniques du projet.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Synchronisation parfaite entre les plans 2D 
                  et la maquette 3D pour une vérification complète des quantités.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="feature-icon-container">
                <DatabaseIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Bibliothèque matériaux enrichie</h3>
              <p className="text-brand-gray mb-4">
                Accès à notre bibliothèque complète des matériaux du marché, permettant
                d'intégrer les spécificités techniques réelles dans vos quantitatifs.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Adaptation des métrés aux caractéristiques 
                  exactes des produits que vous utiliserez.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="feature-icon-container">
                <CogIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Automatisation intelligente</h3>
              <p className="text-brand-gray mb-4">
                Développement de workflows personnalisés et d'automatismes pour
                accélérer le traitement de vos métrés et optimiser les quantitatifs.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Gain de temps considérable et réduction 
                  significative des erreurs potentielles sur vos appels d'offres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
