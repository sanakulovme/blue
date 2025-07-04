import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
// import  folders images
import blog1 from "../images/blog1.png";
import img11 from "../images/Рисунок11.jpg";
import img15 from "../images/Рисунок15.jpg";
import img18 from "../images/Рисунок18.png";
import img17 from "../images/Рисунок17.png";
import img12 from "../images/Рисунок12.jpg";


const Blog: React.FC = () => {
  const { t, language } = useLanguage(); // Ensure `language` is destructured from the context

  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: "2024-01-15",
      title: {
        en: "Standard penetration test (SPT) is a measurement...",
        ru: "Стандартное пенетрационное испытание...",
        uz: "Standart penetratsion test (SPT)...",
      },
    },
    {
      id: 2,
      image: img11,
      date: "2024-01-10",
      title: {
        en: "Working moment of performing electrical exploration...",
        ru: "Рабочий момент выполнения электроразведочных работ...",
        uz: "Vertikal elektr tovushi (VES) usuli...",
      },
    },
    {
      id: 3,
      image: img15,
      date: "2024-01-05",
      title: {
        en: "Chemical analysis of natural water...",
        ru: "Химического анализа природной воды...",
        uz: "Muhandislik-geologik tadqiqotlar uchun...",
      },
    },
    {
      id: 4,
      image: img18,
      date: "2024-01-05",
      title: {
        en: "Laboratory sieves for mechanical analysis...",
        ru: "Лабораторные сита для механического анализа...",
        uz: "Qum donalari hajmini tahlil qilish uchun elaklar...",
      },
    },
    {
      id: 5,
      image: img17,
      date: "2024-01-05",
      title: {
        en: "Laboratory studies of soils...",
        ru: "Лабораторные исследования грунтов...",
        uz: "Tuproqlarning fizik-mexanik xossalari...",
      },
    },
    {
      id: 6,
      image: img12,
      date: "2024-01-05",
      title: {
        en: "Working moment of impact production...",
        ru: "Рабочий момент производства удара...",
        uz: "To‘lqinlarni qo‘zg‘atish uchun zarba...",
      },
    },
  ];
  

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title.en}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                {/* <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div> */}

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {post.title[language] || post.title.en}
                </h3>

                {/* <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt[language] || post.excerpt.en}
                </p> */}

                {/* <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300">
                  {t.blog.readMore}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
