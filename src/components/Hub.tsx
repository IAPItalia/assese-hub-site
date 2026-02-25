import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { GetInTouchCta } from './GetInTouchCta';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    React.useEffect(() => {
      if (!emblaApi) return;

      const onSelectEvent = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      onSelectEvent();
      emblaApi.on('select', onSelectEvent);

      return () => {
        emblaApi.off('select', onSelectEvent);
      };
    }, [emblaApi]);

    const { title, description, images } = hubData[activeTab];
    return (
      <div>
        <h3 className="text-2xl font-bold text-center mb-2">{t(title)}</h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{t(description)}</p>
        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {images.map((image, index) => (
                <div className="embla__slide" key={index}>
                  <div className="aspect-[4/5] lg:aspect-[16/9] bg-gray-200 rounded-lg shadow-md overflow-hidden mx-2">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${image}`}
                      alt={`${t(title)} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-opacity disabled:opacity-50" onClick={scrollPrev} disabled={!canScrollPrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-opacity disabled:opacity-50" onClick={scrollNext} disabled={!canScrollNext}>
            <ChevronRight size={24} />
          </button>
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
        <div className="mt-10">
          <GetInTouchCta context={activeTab === 'events' ? 'events' : activeTab === 'showroom' ? 'showroom' : 'contact'} />
        </div>
      </div>
    </section>
  );
};
