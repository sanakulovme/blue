import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'РУ' },
    { code: 'uz', name: 'UZ' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 py-2 w-20 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
              language === lang.code ? 'text-orange-600 font-medium' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;