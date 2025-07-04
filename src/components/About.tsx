import React from 'react';
import { Box, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: CheckCircle, value: '50+', label: t.about.stats.projects },
    { icon: Lightbulb, value: '15+', label: t.about.stats.years },
    { icon: Users, value: '100+', label: t.about.stats.clients },
    { icon: Box, value: '50+', label: t.about.stats.instruments },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-orange-600 mb-6">
              {t.about.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Construction team"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">{t.about.stats.years}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;