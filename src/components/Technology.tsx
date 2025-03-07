
import { Code, DatabaseIcon, CogIcon, Layers, Building } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-gradient-to-b from-white to-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-brand-darkGray mb-6">Solutions numériques de métré</h2>
          <p className="text-lg text-brand-gray">
            Nous utilisons les technologies numériques les plus avancées pour garantir 
            fiabilité, précision et gain de temps considérable sur vos projets.
          </p>
        </div>

        {/* Large hero image */}
        <div className="rounded-xl overflow-hidden shadow-xl h-80 md:h-96 mb-20 relative animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a" 
            alt="Maquette BIM" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 max-w-xl text-white">
            <h3 className="text-2xl font-semibold mb-3">ATTIC+ Solutions</h3>
            <p className="text-white/90">
              Technologie de pointe pour l'extraction précise des quantitatifs adaptée à tous les corps d'état
            </p>
          </div>
        </div>

        {/* Features with alternating layout */}
        <div className="mb-20">
          {/* Feature 1 - Left image, right text */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-fade-in">
            <div className="md:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Modélisation numérique 3D" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="feature-icon-container">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Maquette numérique & BIM</h3>
              <p className="text-brand-gray mb-4">
                Expertise en extraction de données depuis les maquettes BIM pour un métré complet
                et précis, intégrant toutes les couches et spécificités techniques du projet.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Synchronisation 2D/3D</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Vérification complète des quantités</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 - Right image, left text */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20 animate-fade-in">
            <div className="md:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4" 
                alt="Quantitatifs précis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="feature-icon-container">
                <DatabaseIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Bibliothèque matériaux enrichie</h3>
              <p className="text-brand-gray mb-4">
                Accès à notre bibliothèque complète des matériaux du marché, permettant
                d'intégrer les spécificités techniques réelles dans vos quantitatifs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Base de données complète et actualisée</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Adaptation aux caractéristiques réelles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Left image, right text */}
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
            <div className="md:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Automatisation intelligente" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="feature-icon-container">
                <CogIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Automatisation intelligente</h3>
              <p className="text-brand-gray mb-4">
                Développement de workflows personnalisés et d'automatismes pour
                accélérer le traitement de vos métrés et optimiser les quantitatifs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Gain de temps considérable</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-brand-darkGray">Réduction des erreurs potentielles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metrics and stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-xl font-semibold text-brand-darkGray mb-8 text-center">Notre expertise en chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">15+</div>
              <p className="text-sm text-brand-darkGray">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">100%</div>
              <p className="text-sm text-brand-darkGray">Digital</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
              <p className="text-sm text-brand-darkGray">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
              <p className="text-sm text-brand-darkGray">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
