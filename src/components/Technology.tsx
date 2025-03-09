
import { Ruler, Calculator, Code, PencilRuler, Database, FileCheck } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-gradient-to-b from-white to-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="tag mb-4">Notre expertise technique</div>
          <h2 className="text-brand-darkGray mb-6">Nos méthodes de travail</h2>
          <p className="text-lg text-brand-gray">
            Nous mettons à votre disposition deux approches distinctes et complémentaires pour la réalisation 
            de vos métrés : une approche traditionnelle basée sur les plans 2D et une approche numérique 
            utilisant la maquette BIM 3D.
          </p>
        </div>

        {/* Methods grid with better layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Traditional Methods Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="/lovable-uploads/06196fd0-fd72-4d16-85ee-e8930c64628c.png" 
                alt="Approche traditionnelle : Mesure sur plans et édition de DPGF" 
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
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Mesure sur plans et édition de DPGF</h4>
              <p className="text-brand-gray mb-4">
                Notre méthode traditionnelle consiste à réaliser les métrés directement sur les plans 
                architecturaux 2D à l'aide du kutch. Les données relevées sont soigneusement retranscrites 
                dans un métré minute puis consolidées dans une Décomposition du Prix Global et Forfaitaire (DPGF). 
                Nous pouvons également réaliser l'édition ou la modification de plans 2D selon vos besoins spécifiques.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Mesure précise sur plans 2D</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Édition de la minute métré détaillée</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Édition d'une DPGF claire et fiable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Création et modification de plans 2D sur demande</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Methods Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="/lovable-uploads/94d1acc2-2746-4e75-8255-b7d1415b0cc8.png" 
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
              <h4 className="text-lg font-medium text-brand-darkGray mb-3">Méthode BIM 3D</h4>
              <p className="text-brand-gray mb-4">
                Notre approche numérique exploite les capacités du logiciel Attic+ afin d'obtenir une 
                modélisation précise de votre ouvrage en maquette numérique 3D. Grâce à cette méthode, 
                nous extrayons automatiquement les quantités nécessaires au métré et produisons rapidement 
                une DPGF fiable et précise.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Maquette numérique BIM détaillée (logiciel Attic+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Extraction automatique des métrés</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Fiabilité et gain de temps importants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white mt-0.5">
                    <FileCheck size={12} />
                  </div>
                  <span className="text-brand-darkGray">Facilité d'échange et de visualisation des livrables</span>
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
