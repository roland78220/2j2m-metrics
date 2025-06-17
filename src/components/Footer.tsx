
import { Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-darkGray text-white">
      <div className="container-tight py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-4">2J2M Métrés</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Le site 2j2m.tech est la propriété de l'entreprise 2J2M Métrés, spécialisée dans les métrés pour le bâtiment. 
              Nous accompagnons les entreprises générales et majors dans leurs appels d'offres en réalisant des quantitatifs précis pour le Gros Œuvre et le Second Œuvre.
            </p>
            <div className="text-sm text-gray-400 mb-6">
              <p className="font-semibold text-white">Site officiel de 2J2M Métrés</p>
              <p>Expert en métrés numériques pour les entreprises générales du bâtiment.</p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-brand-lightBlue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-brand-lightBlue transition-colors text-sm"
                aria-label="Retrouvez-nous sur Google"
              >
                <MapPin size={16} className="mr-1" />
                Retrouvez-nous sur Google
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Métrés TCE
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Optimisation des quantitatifs
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Modélisation BIM
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Analyse et conseil
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-300 hover:text-white transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 2J2M Métrés. Tous droits réservés.</p>
          <p className="mt-1">2j2m.tech - Site officiel de 2J2M Métrés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
