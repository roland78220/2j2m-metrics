
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
              <div className="flex flex-wrap gap-2">
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

        {/* Methods Content Cards - Side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Traditional Methods Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <PencilRuler size={24} />
                </div>
                <h3 className="text-xl font-semibold text-brand-darkGray">Bibliothèque matériaux enrichie</h3>
              </div>
              
              <p className="text-brand-gray mb-6">
                Notre expertise en calcul sur plan permet une analyse approfondie des documents 
                et un métré détaillé, basé sur une bibliothèque complète de matériaux.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                  <span className="text-brand-darkGray">Accès à une bibliothèque complète des matériaux du marché</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                  <span className="text-brand-darkGray">Possibilité d'intégrer des spécificités techniques métier dans vos quantitatifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                  <span className="text-brand-darkGray">Base de données complète et évolutive</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                  <span className="text-brand-darkGray">Adaptation aux problématiques métier</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video">
              <img 
                src="public/lovable-uploads/2e63187a-64fb-4e3b-b405-cdbb14435362.png" 
                alt="Bibliothèque matériaux et métré sur plan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Digital Methods Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-brand-darkGray">Automatisation intelligente</h3>
              </div>
              
              <p className="text-brand-gray mb-6">
                Développement de workflows personnalisés et d'automatismes pour
                accélérer le traitement de vos métrés et optimiser les quantitatifs.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-brand-blue mt-2"></div>
                  <span className="text-brand-darkGray">Gain de temps considérable</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-brand-blue mt-2"></div>
                  <span className="text-brand-darkGray">Réduction des erreurs potentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-brand-blue mt-2"></div>
                  <span className="text-brand-darkGray">Maquette numérique & BIM intégrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-brand-blue mt-2"></div>
                  <span className="text-brand-darkGray">Vérification complète des quantités</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Automatisation numérique" 
                className="w-full h-full object-cover"
              />
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
