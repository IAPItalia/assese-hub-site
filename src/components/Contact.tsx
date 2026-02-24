import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-lg mb-2">{t('contact.p1')}</p>
        <p className="text-lg mb-2">{t('contact.p2')}</p>
        <p className="text-lg mb-2">{t('contact.p3')}</p>
        <p className="text-lg">{t('contact.p4')}</p>
      </div>
    </section>
  );
};
