
import { Code, DatabaseIcon, CogIcon } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="section bg-brand-blue/5">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Notre approche numérique</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Technologies et outils</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Nous utilisons les dernières technologies numériques pour optimiser
            la précision et l'efficacité de nos métrés.
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
                    Nous travaillons exclusivement avec le logiciel ATTIC+, la référence
                    en matière de métré digital dans le secteur du bâtiment, pour garantir
                    des résultats d'une précision maximale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Relevés sur plans numériques</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Calculs automatisés</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                      <span className="text-brand-darkGray">Précision millimétrique</span>
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
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">BIM & Maquette numérique</h3>
              <p className="text-brand-gray mb-4">
                Utilisation des technologies BIM pour extraire des données précises
                directement depuis les maquettes numériques et garantir une cohérence
                parfaite avec les plans d'exécution.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Visualisation 3D et détection des incohérences
                  pour une fiabilité maximale des quantitatifs.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="feature-icon-container">
                <DatabaseIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Base de données matériaux</h3>
              <p className="text-brand-gray mb-4">
                Accès à une base de données exhaustive des matériaux et produits
                du marché, permettant d'optimiser les métrés en fonction des
                spécificités techniques des éléments.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Utilisation des caractéristiques réelles
                  des produits pour des métrés plus précis.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="feature-icon-container">
                <CogIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGray mb-3">Automatisation et scripts</h3>
              <p className="text-brand-gray mb-4">
                Développement de scripts et processus d'automatisation pour accélérer
                le traitement des données et optimiser les calculs de quantités.
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-lg">
                <p className="text-sm text-brand-darkGray">
                  <span className="font-semibold">Avantage clé :</span> Réduction du temps de traitement
                  et minimisation des risques d'erreurs de calcul.
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
