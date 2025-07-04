import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
    },
    {
      icon: Phone,
      label: t.contact.info.phone2,
    },
    {
      icon: Mail,
      label: t.contact.info.email,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg">
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3> */}
            <div className="space-y-6 p-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">{info.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-2">
          <div className="p-6">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-4">Days &amp; Times</h3> */}
            <table className="min-w-full text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.monday}</td>
                  <td className="py-2">09:00 – 18:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.tuesday}</td>
                  <td className="py-2">09:00 – 18:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.wednesday}</td>
                  <td className="py-2">09:00 – 18:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.thursday}</td>
                  <td className="py-2">09:00 – 18:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.friday}</td>
                  <td className="py-2">09:00 – 18:00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-8 font-medium">{t.contact.days.saturday}</td>
                  <td className="py-2">10:00 – 15:00</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 font-medium">{t.contact.days.sunday}</td>
                  <td className="py-2">{t.contact.days.dayOff}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;