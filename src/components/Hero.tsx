import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: 'url(https://picsum.photos/1920/1080)'}}>
      <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        <div>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">{t('hero.cta1')}</a>
          <a href="#hub" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full ml-4 hover:bg-white hover:text-black transition duration-300">{t('hero.cta2')}</a>
        </div>
      </div>
    </section>
  );
};
