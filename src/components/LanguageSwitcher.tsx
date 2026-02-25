import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'it', name: 'Italiano' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'ro', name: 'Română' },
  { code: 'tr', name: 'Türkçe' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-white border border-gray-300 rounded-md py-2 px-4 appearance-none cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
