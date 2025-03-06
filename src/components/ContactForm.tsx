
import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons dans les plus brefs délais.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="tag mb-4 animate-fade-in">Discutons de votre projet</div>
          <h2 className="text-brand-darkGray mb-6 animate-fade-in">Contactez-nous</h2>
          <p className="text-lg text-brand-gray animate-fade-in">
            Vous souhaitez en savoir plus sur nos services ou obtenir un devis ?
            N'hésitez pas à nous contacter, nous vous répondrons dans les meilleurs délais.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 animate-fade-in">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-darkGray mb-2">
                    Nom / Prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-brand-lightGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-darkGray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-brand-lightGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-brand-darkGray mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-brand-lightGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-brand-darkGray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-brand-lightGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-brand-darkGray mb-6">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="feature-icon-container shrink-0 w-10 h-10 mt-1">
                    <Mail size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-brand-gray">Email</p>
                    <a href="mailto:contact@2j2m-metres.fr" className="text-brand-darkGray hover:text-brand-blue transition-colors">
                      contact@2j2m-metres.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="feature-icon-container shrink-0 w-10 h-10 mt-1">
                    <Phone size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-brand-gray">Téléphone</p>
                    <a href="tel:+33600000000" className="text-brand-darkGray hover:text-brand-blue transition-colors">
                      +33 6 00 00 00 00
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-brand-blue text-white">
              <h3 className="text-xl font-semibold mb-4">Pour une réponse rapide</h3>
              <p className="mb-6 text-white/90">
                Nous nous engageons à vous répondre dans un délai de 24h ouvrées
                pour toute demande de renseignement ou de devis.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-sm">Devis rapide et gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
