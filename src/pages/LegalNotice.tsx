
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container-tight py-12">
        <div className="mb-6 mt-20 md:mt-24">
          <Link 
            to="/" 
            className="inline-flex items-center bg-brand-blue text-white hover:bg-brand-darkBlue transition-colors px-4 py-2 rounded-md shadow-sm"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-brand-darkGray mb-6">Mentions légales – 2J2M METRES</h1>
          <p className="text-brand-gray mb-6">Dernière mise à jour : le 11 mars 2025</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">1. Éditeur du site</h2>
            <p className="text-brand-gray mb-2">Le présent site 2J2M METRES est édité par :</p>
            <ul className="list-none space-y-1 text-brand-gray">
              <li>Raison sociale : 2J2M METRES</li>
              <li>Statut juridique : Société par Actions Simplifiée Unipersonnelle (SASU)</li>
              <li>Capital social : 10 000 euros</li>
              <li>Siège social : 8 avenue de la République – 77510 REBAIS</li>
              <li>R.C.S. : MEAUX 300 499 001</li>
              <li>Contact : <a href="mailto:contact@2j2m.tech" className="text-brand-blue hover:underline">contact@2j2m.tech</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">2. Hébergement du site</h2>
            <p className="text-brand-gray mb-2">Le site est hébergé par Vercel Inc.</p>
            <ul className="list-none space-y-1 text-brand-gray">
              <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">https://vercel.com</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">3. Propriété intellectuelle</h2>
            <p className="text-brand-gray mb-2">
              Tous les éléments présents sur le site (textes, images, logos, design, charte graphique, etc.) sont la propriété exclusive de 2J2M METRES ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle.
            </p>
            <p className="text-brand-gray">
              Toute reproduction, représentation ou exploitation totale ou partielle sans autorisation expresse écrite préalable est strictement interdite.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">4. Protection des données personnelles</h2>
            <p className="text-brand-gray mb-2">
              Le site peut collecter des données personnelles dans le cadre de son utilisation (formulaires de contact, cookies, statistiques via Google Analytics, etc.).
            </p>
            <p className="text-brand-gray mb-2">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-brand-gray mb-2">
              <li>Finalité de la collecte : gestion des demandes de contact, suivi statistique des visites sur le site.</li>
              <li>Exercice de vos droits : Pour toute demande relative à vos données, contactez-nous par e-mail à <a href="mailto:contact@2j2m.tech" className="text-brand-blue hover:underline">contact@2j2m.tech</a>.</li>
              <li>Durée de conservation : Les données collectées sont conservées pour une durée maximale de 24 mois.</li>
              <li>Cookies : Le site utilise des cookies afin d'améliorer votre expérience utilisateur et réaliser des statistiques anonymes.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">5. Responsabilité</h2>
            <p className="text-brand-gray mb-2">
              2J2M METRES veille à l'exactitude et la mise à jour des informations publiées mais ne garantit pas l'absence totale d'erreurs ou d'omissions. L'utilisateur est seul responsable de l'utilisation des informations disponibles sur ce site.
            </p>
            <p className="text-brand-gray">
              Le site peut inclure des liens vers d'autres sites externes. 2J2M METRES décline toute responsabilité quant au contenu ou pratiques de ces sites.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">6. Droit applicable</h2>
            <p className="text-brand-gray">
              Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à l'utilisation du site, les tribunaux compétents seront ceux dont dépend le siège social de la société 2J2M METRES.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-brand-darkGray mb-4">📌 Contact</h2>
            <p className="text-brand-gray">
              Pour toute demande ou question concernant les présentes mentions légales, veuillez nous contacter par e-mail : <a href="mailto:contact@2j2m.tech" className="text-brand-blue hover:underline">contact@2j2m.tech</a>
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalNotice;
