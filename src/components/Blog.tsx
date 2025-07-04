import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
// import  folders images


const Blog: React.FC = () => {
  const { t, language } = useLanguage(); // Ensure `language` is destructured from the context

  const blogPosts = [
    {
      id: 1,
      image: "../src/images/blog1.png",
      date: "2024-01-15",
      title: {
        en: "Standard penetration test (SPT) is a measurement of the number of blows N required for penetration (passage of the sampling device into the soil or rock).",
        ru: "Стандартное пенетрационное испытание (standard penetration test, SPT) измерение количества ударов N, необходимое для пенетрации (прохождения устройства отбора в грунт, или породу).",
        uz: "Standart penetratsion test (SPT) penetratsiya uchun zarur bo'lgan N zarbalar sonini o'lchash (namuna olish moslamasining tuproq yoki toshga o'tishi).",
      },
    },
    {
      id: 2,
      image: "../src/images/Рисунок11.jpg",
      date: "2024-01-10",
      title: {
        en: "Working moment of performing electrical exploration works using the Vertical Electrical Sounding (VES) method.",
        ru: "Рабочий момент выполнения электроразведочных работ методом Вертикальные электрические зондирования (ВЭЗ) .",
        uz: "Vertikal elektr tovushi (VES) usulidan foydalangan holda elektr qidiruv ishlarini bajarishning ish momenti.",
      },
    },
    {
      id: 3,
      image: "../src/images/Рисунок15.jpg",
      date: "2024-01-05",
      title: {
        en: "Chemical analysis of natural water and aqueous extract of soils for the needs of engineering and geological surveys.",
        ru: "Химического анализа природной воды и водной вытяжки грунтов для нужд инженерно-геологических изысканий.",
        uz: "Muhandislik-geologik tadqiqotlar ehtiyojlari uchun tabiiy suv va tuproqlarning suvli ekstraktining kimyoviy tahlili.",
      },
    },
    {
      id: 4,
      image: "../src/images/Рисунок18.png",
      date: "2024-01-05",
      title: {
        en: "Laboratory sieves for mechanical analysis for sand grain size distribution",
        ru: "Лабораторные сита для механического анализа для распределения размеров песчинки",
        uz: "Qum donalari hajmini taqsimlash uchun mexanik tahlil qilish uchun laboratoriya elaklari.",
      },
    },
    {
      id: 4,
      image: "../src/images/Рисунок17.png",
      date: "2024-01-05",
      title: {
        en: "Laboratory studies of soils are carried out to determine their composition, condition, physical and mechanical properties.",
        ru: "Лабораторные исследования грунтов проводятся для определения их состава, состояния, физических, механических ",
        uz: "Tuproqlarning tarkibi, holati, fizik-mexanik xossalarini aniqlash uchun tuproqlarni laboratoriya tadqiqotlari olib boriladi.",
      },
    },
    {
      id: 5,
      image: "../src/images/Рисунок12.jpg",
      date: "2024-01-05",
      title: {
        en: "Working moment of impact production for excitation of longitudinal and transverse waves",
        ru: "Рабочий момент производства удара для возбуждений продольных и поперечных волн",
        uz: "Uzunlamasına va ko'ndalang to'lqinlarni qo'zg'atish uchun zarba ishlab chiqarishning ishchi momenti",
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
