
import { Ruler, Calculator, Code, PencilRuler, Database, FileCheck } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-gradient-to-b from-white to-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="tag mb-4">Notre expertise technique</div>
          <h2 className="text-brand-darkGray mb-6">Nos méthodes de métré</h2>
          <p className="text-lg text-brand-gray">
            Notre expertise allie méthodes traditionnelles éprouvées et technologies numériques avancées 
            pour vous garantir précision et efficacité dans tous vos projets.
          </p>
        </div>

        {/* Methods grid with better layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Traditional Methods Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="h-56 relative overflow-hidden">
              <img 
                src="public/lovable-uploads/2e63187a-64fb-4e3b-b405-cdbb14435362.png" 
                alt="Bibliothèque matériaux et métré sur plan" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 mb-3">
                    <PencilRuler size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Méthode traditionnelle</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Bibliothèque matériaux enrichie</h4>
              <p className="text-brand-gray mb-4">
                Notre expertise en calcul sur plan permet une analyse approfondie des documents 
                et un métré détaillé, basé sur une bibliothèque complète de matériaux.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Accès à une bibliothèque complète des matériaux du marché</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Possibilité d'intégrer des spécificités techniques métier</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Base de données complète et évolutive</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Adaptation aux problématiques métier</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Methods Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="h-56 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Automatisation numérique" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue/20 text-brand-blue mb-3">
                    <Code size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Méthode numérique</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Automatisation intelligente</h4>
              <p className="text-brand-gray mb-4">
                Développement de workflows personnalisés et d'automatismes pour
                accélérer le traitement de vos métrés et optimiser les quantitatifs.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Gain de temps considérable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Réduction des erreurs potentielles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Maquette numérique & BIM intégrés</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Vérification complète des quantités</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-3 bg-brand-darkBlue hover:bg-brand-blue transition-all shadow-md">
            Obtenir un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;
