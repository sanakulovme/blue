import React from 'react';
import { Hammer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MainLogo from '/src/images/icon.png';
const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={MainLogo} className='main-logo' alt="" />
              <span className="text-2xl font-bold">GEO - TEST GROUP</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.info}
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.linksTitle}</h3>
            <ul className="space-y-2">
              {[
                { label: t.nav.about, id: 'about' },
                { label: t.nav.services, id: 'services' },
                { label: t.nav.blog, id: 'blog' },
                { label: t.nav.contact, id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-2 text-gray-400">
              <p>{t.contact.info.address}</p>
              <p>{t.contact.info.phone}</p>
              <p>{t.contact.info.email}</p>
              <p>{t.contact.info.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;