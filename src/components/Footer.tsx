import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>{t('footer.copy')}</p>
        <p>{t('footer.email')}</p>
        <p>{t('footer.phone')}</p>
        <p>{t('footer.visits')}</p>
      </div>
    </footer>
  );
};
