/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Membership } from './components/Membership';
import { Hub } from './components/Hub';
import { Why } from './components/Why';
import { Availability } from './components/Availability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans max-w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Membership />
        <Hub />
        <Availability />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
