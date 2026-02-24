import React from 'react';
import { useTranslation } from 'react-i18next';

export const Why = () => {
  const { t } = useTranslation();

  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('why.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>{t('why.li1')}</li>
              <li>{t('why.li2')}</li>
              <li>{t('why.li3')}</li>
              <li>{t('why.li4')}</li>
            </ul>
          </div>
          <div>
            {/* 
              ==================================================================
              INSTRUCTIONS FOR ADMIN:
              Replace 'why-assese.jpg' in the 'public/images' folder with your desired image.
              ==================================================================
            */}
            <img src={`${import.meta.env.BASE_URL}images/why-assese.jpg`} alt="ASSESE Workspace" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};
