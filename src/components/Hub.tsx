import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ==================================================================
// INSTRUCTIONS FOR ADMIN:
// To change the gallery images, replace the files in the 'public/images' folder.
// The required filenames are listed for each category below.
// ==================================================================

const hubData = {
  furnished: {
    title: 'hub.furnished.title',
    description: 'hub.furnished.description',
    images: [
      'furnished-1.jpg',
      'furnished-2.jpg',
      'furnished-3.jpg',
      'furnished-4.jpg',
    ],
  },
  unfurnished: {
    title: 'hub.unfurnished.title',
    description: 'hub.unfurnished.description',
    images: [
      'unfurnished-1.jpg',
      'unfurnished-2.jpg',
      'unfurnished-3.jpg',
      'unfurnished-4.jpg',
    ],
  },
  showroom: {
    title: 'hub.showroom.title',
    description: 'hub.showroom.description',
    images: [
      'showroom-1.jpg',
      'showroom-2.jpg',
      'showroom-3.jpg',
      'showroom-4.jpg',
    ],
  },
  events: {
    title: 'hub.events.title',
    description: 'hub.events.description',
    images: [
      'events-1.jpg',
      'events-2.jpg',
      'events-3.jpg',
      'events-4.jpg',
    ],
  },
};

type HubCategory = keyof typeof hubData;

export const Hub = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<HubCategory>('furnished');

  const renderTabs = () => {
    return (
      <div className="mb-12 flex justify-center">
        <div className="flex space-x-2 overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
          {(Object.keys(hubData) as HubCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === tab ? 'bg-green-500 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}>
              {t(`hub.${tab}.title`)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    const { title, description, images } = hubData[activeTab];
    return (
      <div>
        <h3 className="text-2xl font-bold text-center mb-2">{t(title)}</h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{t(description)}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/5] lg:aspect-[3/4] bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/${image}`}
                alt={`${t(title)} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="hub" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">{t('hub.main_title')}</h2>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">{t('hub.main_subtitle')}</p>
        {renderTabs()}
        {renderContent()}
        <div className="text-center mt-12">
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">{t('hub.cta')}</a>
        </div>
      </div>
    </section>
  );
};
