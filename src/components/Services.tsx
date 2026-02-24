import React from 'react';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('services.box1_title')}</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>{t('services.box1_li1')}</li>
              <li>{t('services.box1_li2')}</li>
              <li>{t('services.box1_li3')}</li>
              <li>{t('services.box1_li4')}</li>
              <li>{t('services.box1_li5')}</li>
              <li>{t('services.box1_li6')}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('services.box2_title')}</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>{t('services.box2_li1')}</li>
              <li>{t('services.box2_li2')}</li>
              <li>{t('services.box2_li3')}</li>
              <li>{t('services.box2_li4')}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{t('services.box3_title')}</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>{t('services.box3_li1')}</li>
              <li>{t('services.box3_li2')}</li>
              <li>{t('services.box3_li3')}</li>
              <li>{t('services.box3_li4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
