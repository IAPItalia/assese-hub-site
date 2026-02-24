import React from 'react';

export const Logo = () => {
  const logoUrl = `${import.meta.env.BASE_URL}images/assese_logo.svg`;
  return (
    <img src={logoUrl} alt="ASSESE Logo" className="h-16" />
  );
};
