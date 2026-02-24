import React from 'react';
import { Gallery } from './Gallery';
import { useTranslation } from 'react-i18next';
import { AvailabilityCalendar } from './Calendar';

export const Hub = () => {
  const { t } = useTranslation();

  return (
    <section id="hub" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('hub.title')}</h2>
        <p className="text-lg text-center text-gray-700 mb-10">{t('hub.subtitle')}<br/>{t('hub.description')}</p>
        <div className="flex justify-center space-x-8 text-lg text-gray-800">
          <span>{t('hub.item1')}</span>
          <span>{t('hub.item2')}</span>
          <span>{t('hub.item3')}</span>
          <span>{t('hub.item4')}</span>
        </div>
        <p className="text-center text-gray-600 mt-8">{t('hub.ideal_for')}</p>
        <Gallery />
        <AvailabilityCalendar />
        <div className="text-center mt-10">
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">{t('hub.cta')}</a>
        </div>
      </div>
    </section>
  );
};
