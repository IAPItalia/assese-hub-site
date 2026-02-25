import React from 'react';
import { useTranslation } from 'react-i18next';
import { GetInTouchCta } from './GetInTouchCta';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 mb-8">{t('contact.subtitle')}</p>
        </div>
        <GetInTouchCta context="contact" />
      </div>
    </section>
  );
};
