import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
        <p className="text-lg text-gray-700 mb-8">{t('about.subtitle')}</p>
        <p className="text-lg text-gray-600">{t('about.paragraph')}</p>
      </div>
    </section>
  );
};
