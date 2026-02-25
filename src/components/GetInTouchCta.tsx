import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Context = 'contact' | 'events' | 'showroom';

interface GetInTouchCtaProps {
  context: Context;
}

export const GetInTouchCta: React.FC<GetInTouchCtaProps> = ({ context }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const getMailtoData = () => {
    const recipient = 'office@assese.eu';
    let subject = '';
    let body = '';

    switch (context) {
      case 'contact':
        subject = t('cta.subjects.contact');
        body = t('cta.bodies.contact');
        break;
      case 'events':
        subject = t('cta.subjects.events');
        body = t('cta.bodies.events');
        break;
      case 'showroom':
        subject = t('cta.subjects.showroom');
        body = t('cta.bodies.showroom');
        break;
    }

    return {
      recipient,
      subject: encodeURIComponent(subject),
      body: encodeURIComponent(body),
    };
  };

  const { recipient, subject, body } = getMailtoData();
  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(recipient);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="text-center">
      <a href={mailtoLink} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">
        {t('cta.button')}
      </a>
      <div className="mt-4 text-sm text-gray-600">
        <span>{recipient}</span>
        <button onClick={handleCopy} className="ml-2 px-2 py-1 border border-gray-300 rounded-md text-xs font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500" aria-label={t('cta.copy_aria_label')}>
          {copied ? t('cta.copied') : t('cta.copy')}
        </button>
      </div>
    </div>
  );
};
