import React from 'react';
import { useTranslation } from 'react-i18next';

export const Membership = () => {
  const { t } = useTranslation();

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('membership.title')}</h2>
        <p className="text-lg text-center text-gray-700 mb-10">{t('membership.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{t('membership.plan1_title')}</h3>
            <ul className="text-gray-600">
              <li className="mb-2">{t('membership.plan1_li1')}</li>
              <li className="mb-2">{t('membership.plan1_li2')}</li>
              <li className="mb-2">{t('membership.plan1_li3')}</li>
              <li className="mb-2">{t('membership.plan1_li4')}</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg bg-gray-50">
            <h3 className="text-2xl font-bold mb-4">{t('membership.plan2_title')}</h3>
            <ul className="text-gray-600">
              <li className="mb-2">{t('membership.plan2_li1')}</li>
              <li className="mb-2">{t('membership.plan2_li2')}</li>
              <li className="mb-2">{t('membership.plan2_li3')}</li>
              <li className="mb-2">{t('membership.plan2_li4')}</li>
            </ul>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{t('membership.plan3_title')}</h3>
            <ul className="text-gray-600">
              <li className="mb-2">{t('membership.plan3_li1')}</li>
              <li className="mb-2">{t('membership.plan3_li2')}</li>
              <li className="mb-2">{t('membership.plan3_li3')}</li>
              <li className="mb-2">{t('membership.plan3_li4')}</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">{t('membership.cta')}</a>
        </div>
      </div>
    </section>
  );
};
