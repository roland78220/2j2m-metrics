
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
            <div className="h-64 relative overflow-hidden">
              <img 
                src="/lovable-uploads/524a2331-cebd-4bac-8f0e-0f2c78080abe.png" 
                alt="Approche traditionnelle : Maquette physique avec plans" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 mb-3">
                    <PencilRuler size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Approche traditionnelle</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Maquette physique avec plans</h4>
              <p className="text-brand-gray mb-4">
                Notre approche traditionnelle combine maquettes physiques et plans architecturaux 2D pour 
                une analyse précise sur table. Les mesures sont effectuées manuellement avec une rigueur 
                technique, permettant une visualisation concrète et tangible de votre projet.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Maquette en volume avec détails réalistes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Plans 2D pour analyse technique approfondie</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Aspect manuel et technique de l'architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Précision et fiabilité éprouvées</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Methods Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="/lovable-uploads/524a2331-cebd-4bac-8f0e-0f2c78080abe.png" 
                alt="Approche numérique : Maquette BIM avec analyse logicielle" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue/20 text-brand-blue mb-3">
                    <Code size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Approche numérique</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Maquette BIM avec analyse logicielle</h4>
              <p className="text-brand-gray mb-4">
                Notre approche numérique utilise la modélisation BIM 3D pour visualiser chaque élément 
                de construction avec une précision inégalée. Les différentes structures sont codées par 
                couleur pour une identification rapide, et nos tableaux d'analyse quantifient 
                automatiquement tous les éléments.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Maquette numérique 3D avec transparences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Couleurs distinctes pour chaque élément constructif</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Tableau d'analyse détaillant structures et matériaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Visualisation technique axée sur le digital</span>
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
