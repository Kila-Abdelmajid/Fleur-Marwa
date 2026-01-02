import React from 'react';
import {  FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaCcVisa, FaCcMastercard, FaCcPaypal, FaShippingFast, FaGift, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { label: "Roses", href: "#" },
      { label: "Bouquets", href: "#" },
      { label: "Poupées florales", href: "#" },
      { label: "Parfums", href: "#" },
      { label: "Arrangements sur mesure", href: "#" }
    ],
    services: [
      { label: "Livraison express", href: "#" },
      { label: "Décoration événementielle", href: "#" },
      { label: "Abonnement mensuel", href: "#" },
      { label: "Cours d'art floral", href: "#" },
      { label: "Location de plantes", href: "#" }
    ],
    Pages: [
      { label: "Accueil", href: "#" },
      { label: "Boutique", href: "" },
      { label: "Notre Équipe", href: "#" },
      { label: "Avis Clients", href: "#" },
      { label: "Contact", href: "#" }
    ],
    support: [
      { label: "Centre d'aide", href: "#" },
      { label: "Suivi de commande", href: "#" },
      { label: "Politique de retour", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Conditions générales", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "#", color: "hover:bg-green-600" },
    { icon: <FaTiktok />, label: "TikTok", href: "#", color: "hover:bg-black" },
  ];

  const paymentMethods = [
    { icon: <FaCcVisa />, label: "Visa" },
    { icon: <FaCcMastercard />, label: "Mastercard" },
    { icon: <FaCcPaypal />, label: "PayPal" }
  ];

  const features = [
    { icon: <FaShippingFast />, title: "Livraison gratuite" },
    { icon: <FaGift />, title: "Emballage cadeau", desc: "Offert" },
    { icon: <FaHeadset />, title: "Support 24/7", desc: "Service client" }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-800 to-primary-900 text-white">
      {/* Top Features */}
      <div className="container-custom py-12 border-b border-primary-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <div className="font-bold text-lg">{feature.title}</div>
                <div className="text-primary-300 text-sm">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/fd/15/62/fd1562df6c4e65901c877998fabc94f1.jpg" alt="" className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Fleur Marwa</h2>
                <p className="text-primary-300">L'élégance florale</p>
              </div>
            </div>
            <p className="text-primary-300 mb-6">
              Depuis 2010, nous créons des arrangements floraux uniques qui capturent la beauté 
              et l'émotion de chaque moment spécial. Notre passion pour les fleurs se reflète 
              dans chaque création.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-primary-300">
                <FaMapMarkerAlt />
                <span>123 Rue des Fleurs, Essaouira 44000, Maroc</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-300">
                <FaPhone />
                <span>+212 6 57 97 25 60</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-300">
                <FaEnvelope />
                <span>contact@fleurmarwa.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white transition-all hover:text-white ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Boutique</h3>
            <ul className="space-y-2">
              {footerLinks.boutique.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.Pages.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-300 text-sm ">
            &copy; {currentYear} Fleur Marwa. Tous droits réservés.
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-4">
            <span className="text-primary-300 text-sm">Paiement sécurisé :</span>
            <div className="flex space-x-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="w-10 h-7 bg-white rounded flex items-center justify-center text-gray-700"
                  title={method.label}
                >
                  {method.icon}
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-500 transition-colors z-40"
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;