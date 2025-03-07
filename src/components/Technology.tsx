
import { Ruler, Calculator, Code, PencilRuler, ClipboardList, AreaChart } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-gradient-to-b from-white to-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-brand-darkGray mb-6">Nos méthodes de métré</h2>
          <p className="text-lg text-brand-gray">
            Notre expertise allie méthodes traditionnelles éprouvées et technologies numériques avancées 
            pour vous garantir précision et efficacité dans tous vos projets.
          </p>
        </div>

        {/* Main visual - Traditional + Digital */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-brand-darkGray mb-4">L'alliance du traditionnel et du numérique</h3>
              <p className="text-brand-gray mb-6">
                Nous combinons le savoir-faire traditionnel avec les technologies de pointe pour offrir 
                des services de métré complets, adaptés à tous types de projets.
              </p>
              <div className="flex space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                  Précision
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                  Fiabilité
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                  Expertise
                </span>
              </div>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="public/lovable-uploads/fe4e9e34-9a75-40d3-8a98-058caa912606.png" 
                alt="Alliance de méthodes traditionnelles et numériques" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Traditional Methods Section */}
        <div className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <PencilRuler size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray">Méthodes Traditionnelles</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc" 
                    alt="Relevé sur site" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-brand-darkGray mb-3">Relevé sur site</h4>
                <p className="text-brand-gray mb-4">
                  Nos métreurs professionnels effectuent des relevés précis directement sur le chantier 
                  avec des outils de mesure traditionnels pour garantir l'exactitude des dimensions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-brand-darkGray">Vérification minutieuse des dimensions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-brand-darkGray">Adaptation aux conditions réelles du terrain</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1512187849-463fdb898f21" 
                    alt="Calcul manuel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-brand-darkGray mb-3">Calcul et documentation manuelle</h4>
                <p className="text-brand-gray mb-4">
                  Notre expertise en calcul manuel permet une analyse approfondie des plans et un métré 
                  détaillé, sans dépendance exclusive aux logiciels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-brand-darkGray">Lecture experte de plans 2D</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-brand-darkGray">Documentation détaillée et transparente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Digital Methods Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray">Solutions Numériques</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Modélisation numérique 3D" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-brand-darkGray mb-3">Maquette numérique & BIM</h4>
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

              <div>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d" 
                    alt="Automatisation intelligente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-brand-darkGray mb-3">Automatisation intelligente</h4>
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
        </div>

        {/* Comparative advantages section */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-20 animate-fade-in">
          <div className="bg-gradient-to-r from-brand-blue to-blue-700 p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">Les avantages de notre approche mixte</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardList size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-sm text-white/90">Fiabilité des données</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <p className="text-sm text-white/90">Précision des métrés</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">-30%</div>
                <p className="text-sm text-white/90">Temps de traitement</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AreaChart size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">+40%</div>
                <p className="text-sm text-white/90">Optimisation budgétaire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
