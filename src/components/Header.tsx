import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="hero" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.home')}</Link>
      <Link to="about" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.about')}</Link>
      <Link to="services" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.services')}</Link>
      <Link to="membership" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.membership')}</Link>
      <Link to="hub" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.hub')}</Link>
      <Link to="why" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.why')}</Link>
      <Link to="availability" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.availability')}</Link>
      <Link to="contact" smooth={true} duration={500} className="block md:inline-block px-4 py-2 md:py-0 cursor-pointer" onClick={() => setIsOpen(false)}>{t('header.contact')}</Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center">
          {navLinks}
          <LanguageSwitcher />
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ml-4">{t('cta.button')}</a>
        </div>
        <div className="md:hidden flex items-center">
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">{t('cta.button')}</a>
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};
