import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-background.jpg)`}}>
      {/* 
        ==================================================================
        INSTRUCTIONS FOR ADMIN:
        Replace 'hero-background.jpg' in the 'public/images' folder with your desired hero background image.
        ==================================================================
      */}
      <div className="text-center bg-black/50 backdrop-blur-lg p-6 md:p-10 rounded-xl border border-white/20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('hero.subtitle')}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full md:w-auto">{t('hero.cta1')}</a>
          <a href="#hub" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 w-full md:w-auto">{t('hero.cta2')}</a>
        </div>
      </div>
    </section>
  );
};
