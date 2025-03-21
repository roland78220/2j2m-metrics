
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import WhyChooseUs from '@/components/WhyChooseUs';
import Methodology from '@/components/Methodology';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Initialize all animation elements
    const animationElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-fade-in-down, .animate-scale-in, .animate-blur-in, .reveal');
    
    animationElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Properly cleanup by unobserving all elements
      animationElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>2J2M Métrés | Expert en métrés pour le bâtiment</title>
        <meta name="description" content="2J2M Métrés - Service de métrés sur plans pour entreprises générales avec ATTIC+ et BIM. Optimisez vos appels d'offres avec nos solutions digitales." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://2j2m.tech/" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Technology />
        <Methodology />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
