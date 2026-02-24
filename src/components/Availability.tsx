import React from 'react';
import { useTranslation } from 'react-i18next';

export const Availability = () => {
  const { t } = useTranslation();

  return (
    <section id="availability" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">{t('availability.title')}</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          {/* 
            ==================================================================
            INSTRUCTIONS FOR ADMIN:
            1. Go to your Google Calendar.
            2. In "Settings and sharing" for your calendar, get the "Embed code".
            3. Paste the iframe code below, replacing the placeholder.
            ==================================================================
          */}
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=example%40gmail.com&ctz=Europe%2FRome" 
            style={{border: 0}} 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
          ></iframe>
        </div>
        <a 
          href="mailto:office@assese.eu?subject=Richiesta%20di%20prenotazione%20ASSESE%20HUB"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          {t('availability.cta')}
        </a>
      </div>
    </section>
  );
};
