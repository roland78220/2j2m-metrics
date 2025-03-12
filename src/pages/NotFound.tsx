
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Page non trouvée | 2J2M Métrés</title>
        <meta name="description" content="Cette page n'existe pas ou a été déplacée - 2J2M Métrés" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oups ! Cette page n'existe pas</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
