import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  it: {
    translation: {
      "header": {
        "home": "Home",
        "about": "Chi Siamo",
        "services": "Servizi",
        "membership": "Membership",
        "hub": "Hub",
        "why": "Perché ASSESE",
        "availability": "Disponibilità",
        "contact": "Contatti"
      },
      "hero": {
        "title": "ASSESE: il tuo punto di ingresso a Milano per crescere in Italia ed espanderti in Europa.",
        "subtitle": "Siamo un acceleratore agile e trasversale: supportiamo imprese italiane e internazionali con servizi concreti di business entry, internazionalizzazione e domiciliazione, con accesso a uno spazio operativo strategico a Porta Genova.",
        "cta1": "Prenota una call",
        "cta2": "Scopri ASSESE HUB"
      },
      "about": {
        "title": "Chi Siamo",
        "subtitle": "Un acceleratore agile, non un coworking.",
        "paragraph": "ASSESE - Associazione per lo Sviluppo Economico e Sociale Europeo – nasce per aiutare aziende, startup e professionisti a trasformare un'idea in presenza reale sul mercato: in Italia e nel contesto europeo. Operiamo in modo trasversale (design, fashion, trade, servizi, tecnologia) e lavoriamo con un approccio pratico: connessioni, eventi, competenze, spazio fisico e supporto operativo."
      },
      "services": {
        "title": "Cosa Facciamo (Servizi)",
        "box1_title": "Business Entry Italia (Milano)",
        "box1_li1": "Domiciliazione aziendale a Milano",
        "box1_li2": "Gestione corrispondenza e presenza professionale",
        "box1_li3": "Supporto amministrativo e fiscale (con partner)",
        "box1_li4": "Orientamento per avvio e operatività",
        "box2_title": "Internazionalizzazione e crescita in Europa",
        "box2_li1": "Percorsi pratici per espansione cross-border",
        "box2_li2": "Eventi B2B e networking",
        "box2_li3": "Workshop tematici (export, e-commerce, contratti, fiscalità)",
        "box2_li4": "Connessioni internazionali (Romania, Spagna)",
        "box3_title": "ASSESE HUB – Spazio operativo a Porta Genova",
        "box3_li1": "140mq open space modulare",
        "box3_li2": "3 vetrine su strada",
        "box3_li3": "Altezza circa 5m",
        "box3_li4": "Adatto per showroom temporanei, workshop, shooting, presentazioni, eventi business"
      },
      "membership": {
        "title": "Business Landing Program (Membership)",
        "subtitle": "Non è solo un indirizzo: è un pacchetto operativo per entrare a Milano e attivare la tua presenza.",
        "plan1_title": "BASIC",
        "plan1_li1": "Domiciliazione aziendale",
        "plan1_li2": "Gestione posta",
        "plan1_li3": "Accesso HUB: 2 ore/mese",
        "plan1_li4": "Accesso: 1 evento networking/mese",
        "plan2_title": "PRO",
        "plan2_li1": "Tutto BASIC",
        "plan2_li2": "Accesso HUB: 1 giorno/mese",
        "plan2_li3": "Accesso completo eventi networking",
        "plan2_li4": "Profilo azienda nel network ASSESE (listing)",
        "plan3_title": "GROWTH",
        "plan3_li1": "Tutto PRO",
        "plan3_li2": "Accesso HUB: 4 giorni/mese",
        "plan3_li3": "1 sessione strategica trimestrale (con partner)",
        "plan3_li4": "Introduzioni mirate nella rete locale (su disponibilità)",
        "cta": "Richiedi dettagli e disponibilità"
      },
      "hub": {
        "title": "Affitto Spazio (Hub Only)",
        "subtitle": "Affitto breve ASSESE HUB (Porta Genova – Milano)",
        "description": "Soluzioni flessibili per chi ha bisogno di spazio professionale ad alta visibilità:",
        "item1": "1 giorno",
        "item2": "3 giorni",
        "item3": "1 settimana",
        "item4": "1 mese",
        "ideal_for": "Ideale per: showroom, pop-up, workshop, shooting, eventi aziendali, presentazioni B2B.",
        "cta": "Prenota una visita"
      },
      "why": {
        "title": "Perché ASSESE",
        "li1": "Un'unica base a Milano per operare, incontrare e presentare",
        "li2": "Domiciliazione + spazio fisico + networking, nello stesso ecosistema",
        "li3": "Approccio agile: tempi rapidi, soluzioni pratiche, contatti reali",
        "li4": "Adatto a imprese internazionali e PMI italiane che vogliono crescere"
      },
      "contact": {
        "title": "Contatti",
        "p1": "ASSESE - Milano (Porta Genova)",
        "p2": "Email: office@assese.eu",
        "p4": "Visite su appuntamento."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Tutti i diritti riservati.",
        "email": "Email: office@assese.eu",
        "visits": "Visite su appuntamento."
      },
      "availability": {
        "title": "Disponibilità ASSESE HUB",
        "cta": "Richiedi una prenotazione"
      }
    }
  },
  en: {
    translation: {
      "header": {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "membership": "Membership",
        "hub": "Hub",
        "why": "Why ASSESE",
        "availability": "Availability",
        "contact": "Contact"
      },
      "hero": {
        "title": "ASSESE: Your entry point to Milan for growing in Italy and expanding into Europe.",
        "subtitle": "We are an agile and transversal accelerator: we support Italian and international companies with concrete business entry, internationalization, and domiciliation services, with access to a strategic operational space in Porta Genova.",
        "cta1": "Book a Call",
        "cta2": "Discover ASSESE HUB"
      },
      "about": {
        "title": "About Us",
        "subtitle": "An agile accelerator, not a coworking space.",
        "paragraph": "ASSESE - Association for European Economic and Social Development – was born to help companies, startups, and professionals transform an idea into a real market presence: in Italy and in the European context. We operate transversally (design, fashion, trade, services, technology) and work with a practical approach: connections, events, skills, physical space, and operational support."
      },
      "services": {
        "title": "What We Do (Services)",
        "box1_title": "Business Entry Italy (Milan)",
        "box1_li1": "Company domiciliation in Milan",
        "box1_li2": "Correspondence management and professional presence",
        "box1_li3": "Administrative and fiscal support (with partners)",
        "box1_li4": "Guidance for startup and operations",
        "box2_title": "Internationalization and Growth in Europe",
        "box2_li1": "Practical paths for cross-border expansion",
        "box2_li2": "B2B events and networking",
        "box2_li3": "Thematic workshops (export, e-commerce, contracts, taxation)",
        "box2_li4": "International connections (Romania, Spain)",
        "box3_title": "ASSESE HUB – Operational Space in Porta Genova",
        "box3_li1": "140sqm modular open space",
        "box3_li2": "3 street-front windows",
        "box3_li3": "Height approx. 5m",
        "box3_li4": "Suitable for temporary showrooms, workshops, shootings, presentations, business events"
      },
      "membership": {
        "title": "Business Landing Program (Membership)",
        "subtitle": "It's not just an address: it's an operational package to enter Milan and activate your presence.",
        "plan1_title": "BASIC",
        "plan1_li1": "Company domiciliation",
        "plan1_li2": "Mail management",
        "plan1_li3": "HUB access: 2 hours/month",
        "plan1_li4": "Access: 1 networking event/month",
        "plan2_title": "PRO",
        "plan2_li1": "All of BASIC",
        "plan2_li2": "HUB access: 1 day/month",
        "plan2_li3": "Full access to networking events",
        "plan2_li4": "Company profile in the ASSESE network (listing)",
        "plan3_title": "GROWTH",
        "plan3_li1": "All of PRO",
        "plan3_li2": "HUB access: 4 days/month",
        "plan3_li3": "1 quarterly strategic session (with partner)",
        "plan3_li4": "Targeted introductions into the local network (upon availability)",
        "cta": "Request details and availability"
      },
      "hub": {
        "title": "Hub Rental (Hub Only)",
        "subtitle": "Short-term rental ASSESE HUB (Porta Genova – Milan)",
        "description": "Flexible solutions for those who need a professional space with high visibility:",
        "item1": "1 day",
        "item2": "3 days",
        "item3": "1 week",
        "item4": "1 month",
        "ideal_for": "Ideal for: showrooms, pop-ups, workshops, shootings, corporate events, B2B presentations.",
        "cta": "Book a Visit"
      },
      "why": {
        "title": "Why ASSESE",
        "li1": "A single base in Milan to operate, meet, and present",
        "li2": "Domiciliation + physical space + networking, in the same ecosystem",
        "li3": "Agile approach: fast times, practical solutions, real contacts",
        "li4": "Suitable for international companies and Italian SMEs that want to grow"
      },
      "contact": {
        "title": "Contact",
        "p1": "ASSESE - Milan (Porta Genova)",
        "p2": "Email: office@assese.eu",
        "p4": "Visits by appointment."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. All rights reserved.",
        "email": "Email: office@assese.eu",
        "visits": "Visits by appointment."
      },
      "availability": {
        "title": "ASSESE HUB Availability",
        "cta": "Request a Booking"
      }
    }
  },
  es: {
    translation: {
      "header": {
        "home": "Inicio",
        "about": "Quiénes Somos",
        "services": "Servicios",
        "membership": "Membresía",
        "hub": "Hub",
        "why": "Por qué ASSESE",
        "availability": "Disponibilidad",
        "contact": "Contacto"
      },
      "hero": {
        "title": "ASSESE: Tu punto de entrada a Milán para crecer en Italia y expandirte en Europa.",
        "subtitle": "Somos un acelerador ágil y transversal: apoyamos a empresas italianas e internacionales con servicios concretos de entrada de negocios, internacionalización y domiciliación, con acceso a un espacio operativo estratégico en Porta Genova.",
        "cta1": "Reserva una llamada",
        "cta2": "Descubre ASSESE HUB"
      },
      "about": {
        "title": "Quiénes Somos",
        "subtitle": "Un acelerador ágil, no un coworking.",
        "paragraph": "ASSESE - Asociación para el Desarrollo Económico y Social Europeo – nació para ayudar a empresas, startups y profesionales a transformar una idea en una presencia real en el mercado: en Italia y en el contexto europeo. Operamos de manera transversal (diseño, moda, comercio, servicios, tecnología) y trabajamos con un enfoque práctico: conexiones, eventos, competencias, espacio físico y apoyo operativo."
      },
      "services": {
        "title": "Qué Hacemos (Servicios)",
        "box1_title": "Entrada de Negocios en Italia (Milán)",
        "box1_li1": "Domiciliación de empresas en Milán",
        "box1_li2": "Gestión de correspondencia y presencia profesional",
        "box1_li3": "Soporte administrativo y fiscal (con socios)",
        "box1_li4": "Orientación para el inicio y la operatividad",
        "box2_title": "Internacionalización y Crecimiento en Europa",
        "box2_li1": "Rutas prácticas para la expansión transfronteriza",
        "box2_li2": "Eventos B2B y networking",
        "box2_li3": "Talleres temáticos (exportación, comercio electrónico, contratos, fiscalidad)",
        "box2_li4": "Conexiones internacionales (Rumania, España)",
        "box3_title": "ASSESE HUB – Espacio Operativo en Porta Genova",
        "box3_li1": "140m² de espacio abierto modular",
        "box3_li2": "3 escaparates a la calle",
        "box3_li3": "Altura aprox. 5m",
        "box3_li4": "Adecuado para showrooms temporales, talleres, sesiones de fotos, presentaciones, eventos de negocios"
      },
      "membership": {
        "title": "Programa de Aterrizaje de Negocios (Membresía)",
        "subtitle": "No es solo una dirección: es un paquete operativo para entrar en Milán y activar tu presencia.",
        "plan1_title": "BÁSICO",
        "plan1_li1": "Domiciliación de empresas",
        "plan1_li2": "Gestión de correo",
        "plan1_li3": "Acceso al HUB: 2 horas/mes",
        "plan1_li4": "Acceso: 1 evento de networking/mes",
        "plan2_title": "PRO",
        "plan2_li1": "Todo lo de BÁSICO",
        "plan2_li2": "Acceso al HUB: 1 día/mes",
        "plan2_li3": "Acceso completo a eventos de networking",
        "plan2_li4": "Perfil de la empresa en la red ASSESE (listado)",
        "plan3_title": "CRECIMIENTO",
        "plan3_li1": "Todo lo de PRO",
        "plan3_li2": "Acceso al HUB: 4 días/mes",
        "plan3_li3": "1 sesión estratégica trimestral (con socio)",
        "plan3_li4": "Introducciones específicas en la red local (según disponibilidad)",
        "cta": "Solicita detalles y disponibilidad"
      },
      "hub": {
        "title": "Alquiler de Espacio (Solo Hub)",
        "subtitle": "Alquiler a corto plazo ASSESE HUB (Porta Genova – Milán)",
        "description": "Soluciones flexibles para quienes necesitan un espacio profesional con alta visibilidad:",
        "item1": "1 día",
        "item2": "3 días",
        "item3": "1 semana",
        "item4": "1 mes",
        "ideal_for": "Ideal para: showrooms, pop-ups, talleres, sesiones de fotos, eventos corporativos, presentaciones B2B.",
        "cta": "Reserva una visita"
      },
      "why": {
        "title": "Por qué ASSESE",
        "li1": "Una única base en Milán para operar, reunirse y presentar",
        "li2": "Domiciliación + espacio físico + networking, en el mismo ecosistema",
        "li3": "Enfoque ágil: tiempos rápidos, soluciones prácticas, contactos reales",
        "li4": "Adecuado para empresas internacionales y pymes italianas que quieren crecer"
      },
      "contact": {
        "title": "Contacto",
        "p1": "ASSESE - Milán (Porta Genova)",
        "p2": "Correo electrónico: office@assese.eu",
        "p4": "Visitas con cita previa."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Todos los derechos reservados.",
        "email": "Correo electrónico: office@assese.eu",
        "visits": "Visitas con cita previa."
      },
      "availability": {
        "title": "Disponibilidad de ASSESE HUB",
        "cta": "Solicitar una reserva"
      }
    }
  },
  de: {
    translation: {
      "header": {
        "home": "Startseite",
        "about": "Über uns",
        "services": "Dienstleistungen",
        "membership": "Mitgliedschaft",
        "hub": "Hub",
        "why": "Warum ASSESE",
        "availability": "Verfügbarkeit",
        "contact": "Kontakt"
      },
      "hero": {
        "title": "ASSESE: Ihr Einstiegspunkt nach Mailand, um in Italien zu wachsen und in Europa zu expandieren.",
        "subtitle": "Wir sind ein agiler und transversaler Beschleuniger: Wir unterstützen italienische und internationale Unternehmen mit konkreten Dienstleistungen für den Geschäftseintritt, die Internationalisierung und die Domizilierung, mit Zugang zu einem strategischen operativen Raum in Porta Genova.",
        "cta1": "Anruf buchen",
        "cta2": "Entdecken Sie ASSESE HUB"
      },
      "about": {
        "title": "Über uns",
        "subtitle": "Ein agiler Beschleuniger, kein Coworking Space.",
        "paragraph": "ASSESE - Verein zur Förderung der wirtschaftlichen und sozialen Entwicklung in Europa – wurde gegründet, um Unternehmen, Start-ups und Fachleuten zu helfen, eine Idee in eine reale Marktpräsenz umzuwandeln: in Italien und im europäischen Kontext. Wir agieren transversal (Design, Mode, Handel, Dienstleistungen, Technologie) und arbeiten mit einem praktischen Ansatz: Verbindungen, Veranstaltungen, Kompetenzen, physischer Raum und operative Unterstützung."
      },
      "services": {
        "title": "Was wir tun (Dienstleistungen)",
        "box1_title": "Geschäftseintritt Italien (Mailand)",
        "box1_li1": "Firmendomizilierung in Mailand",
        "box1_li2": "Korrespondenzmanagement und professionelle Präsenz",
        "box1_li3": "Administrative und steuerliche Unterstützung (mit Partnern)",
        "box1_li4": "Orientierung für Gründung und Betrieb",
        "box2_title": "Internationalisierung und Wachstum in Europa",
        "box2_li1": "Praktische Wege für die grenzüberschreitende Expansion",
        "box2_li2": "B2B-Veranstaltungen und Networking",
        "box2_li3": "Thematische Workshops (Export, E-Commerce, Verträge, Steuern)",
        "box2_li4": "Internationale Verbindungen (Rumänien, Spanien)",
        "box3_title": "ASSESE HUB – Operativer Raum in Porta Genova",
        "box3_li1": "140m² modularer offener Raum",
        "box3_li2": "3 straßenseitige Schaufenster",
        "box3_li3": "Höhe ca. 5m",
        "box3_li4": "Geeignet für temporäre Showrooms, Workshops, Shootings, Präsentationen, Geschäftsveranstaltungen"
      },
      "membership": {
        "title": "Business Landing Program (Mitgliedschaft)",
        "subtitle": "Es ist nicht nur eine Adresse: Es ist ein operatives Paket, um in Mailand Fuß zu fassen und Ihre Präsenz zu aktivieren.",
        "plan1_title": "BASIC",
        "plan1_li1": "Firmendomizilierung",
        "plan1_li2": "Postverwaltung",
        "plan1_li3": "HUB-Zugang: 2 Stunden/Monat",
        "plan1_li4": "Zugang: 1 Networking-Veranstaltung/Monat",
        "plan2_title": "PRO",
        "plan2_li1": "Alles von BASIC",
        "plan2_li2": "HUB-Zugang: 1 Tag/Monat",
        "plan2_li3": "Voller Zugang zu Networking-Veranstaltungen",
        "plan2_li4": "Unternehmensprofil im ASSESE-Netzwerk (Listing)",
        "plan3_title": "GROWTH",
        "plan3_li1": "Alles von PRO",
        "plan3_li2": "HUB-Zugang: 4 Tage/Monat",
        "plan3_li3": "1 vierteljährliche strategische Sitzung (mit Partner)",
        "plan3_li4": "Gezielte Einführungen in das lokale Netzwerk (nach Verfügbarkeit)",
        "cta": "Details und Verfügbarkeit anfragen"
      },
      "hub": {
        "title": "Hub-Miete (nur Hub)",
        "subtitle": "Kurzzeitmiete ASSESE HUB (Porta Genova – Mailand)",
        "description": "Flexible Lösungen für diejenigen, die einen professionellen Raum mit hoher Sichtbarkeit benötigen:",
        "item1": "1 Tag",
        "item2": "3 Tage",
        "item3": "1 Woche",
        "item4": "1 Monat",
        "ideal_for": "Ideal für: Showrooms, Pop-ups, Workshops, Shootings, Firmenveranstaltungen, B2B-Präsentationen.",
        "cta": "Besuch buchen"
      },
      "why": {
        "title": "Warum ASSESE",
        "li1": "Eine einzige Basis in Mailand, um zu agieren, sich zu treffen und zu präsentieren",
        "li2": "Domizilierung + physischer Raum + Networking, im selben Ökosystem",
        "li3": "Agiler Ansatz: schnelle Zeiten, praktische Lösungen, echte Kontakte",
        "li4": "Geeignet für internationale Unternehmen und italienische KMU, die wachsen wollen"
      },
      "contact": {
        "title": "Kontakt",
        "p1": "ASSESE - Mailand (Porta Genova)",
        "p2": "E-Mail: office@assese.eu",
        "p4": "Besuche nach Vereinbarung."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Alle Rechte vorbehalten.",
        "email": "E-Mail: office@assese.eu",
        "visits": "Besuche nach Vereinbarung."
      },
      "availability": {
        "title": "Verfügbarkeit ASSESE HUB",
        "cta": "Buchung anfragen"
      }
    }
  },
  fr: {
    translation: {
      "header": {
        "home": "Accueil",
        "about": "À propos de nous",
        "services": "Services",
        "membership": "Adhésion",
        "hub": "Hub",
        "why": "Pourquoi ASSESE",
        "availability": "Disponibilité",
        "contact": "Contact"
      },
      "hero": {
        "title": "ASSESE : Votre point d'entrée à Milan pour vous développer en Italie et vous étendre en Europe.",
        "subtitle": "Nous sommes un accélérateur agile et transversal : nous soutenons les entreprises italiennes et internationales avec des services concrets d'entrée sur le marché, d'internationalisation et de domiciliation, avec un accès à un espace opérationnel stratégique à Porta Genova.",
        "cta1": "Réserver un appel",
        "cta2": "Découvrir ASSESE HUB"
      },
      "about": {
        "title": "À propos de nous",
        "subtitle": "Un accélérateur agile, pas un espace de coworking.",
        "paragraph": "ASSESE - Association pour le Développement Économique et Social Européen – est née pour aider les entreprises, les startups et les professionnels à transformer une idée en une présence réelle sur le marché : en Italie et dans le contexte européen. Nous opérons de manière transversale (design, mode, commerce, services, technologie) et travaillons avec une approche pratique : connexions, événements, compétences, espace physique et soutien opérationnel."
      },
      "services": {
        "title": "Ce que nous faisons (Services)",
        "box1_title": "Entrée sur le marché italien (Milan)",
        "box1_li1": "Domiciliation d'entreprise à Milan",
        "box1_li2": "Gestion de la correspondance et présence professionnelle",
        "box1_li3": "Soutien administratif et fiscal (avec des partenaires)",
        "box1_li4": "Orientation pour le démarrage et les opérations",
        "box2_title": "Internationalisation et croissance en Europe",
        "box2_li1": "Parcours pratiques pour l'expansion transfrontalière",
        "box2_li2": "Événements B2B et réseautage",
        "box2_li3": "Ateliers thématiques (exportation, e-commerce, contrats, fiscalité)",
        "box2_li4": "Connexions internationales (Roumanie, Espagne)",
        "box3_title": "ASSESE HUB – Espace opérationnel à Porta Genova",
        "box3_li1": "Espace ouvert modulaire de 140 m²",
        "box3_li2": "3 vitrines sur rue",
        "box3_li3": "Hauteur d'environ 5 m",
        "box3_li4": "Convient pour les showrooms temporaires, les ateliers, les tournages, les présentations, les événements d'entreprise"
      },
      "membership": {
        "title": "Programme d'atterrissage d'affaires (Adhésion)",
        "subtitle": "Ce n'est pas seulement une adresse : c'est un package opérationnel pour entrer à Milan et activer votre présence.",
        "plan1_title": "DE BASE",
        "plan1_li1": "Domiciliation d'entreprise",
        "plan1_li2": "Gestion du courrier",
        "plan1_li3": "Accès au HUB : 2 heures/mois",
        "plan1_li4": "Accès : 1 événement de réseautage/mois",
        "plan2_title": "PRO",
        "plan2_li1": "Tout DE BASE",
        "plan2_li2": "Accès au HUB : 1 jour/mois",
        "plan2_li3": "Accès complet aux événements de réseautage",
        "plan2_li4": "Profil de l'entreprise dans le réseau ASSESE (listing)",
        "plan3_title": "CROISSANCE",
        "plan3_li1": "Tout PRO",
        "plan3_li2": "Accès au HUB : 4 jours/mois",
        "plan3_li3": "1 session stratégique trimestrielle (avec partenaire)",
        "plan3_li4": "Introductions ciblées dans le réseau local (selon disponibilité)",
        "cta": "Demander les détails et la disponibilité"
      },
      "hub": {
        "title": "Location de hub (Hub uniquement)",
        "subtitle": "Location à court terme ASSESE HUB (Porta Genova – Milan)",
        "description": "Solutions flexibles pour ceux qui ont besoin d'un espace professionnel avec une grande visibilité :",
        "item1": "1 jour",
        "item2": "3 jours",
        "item3": "1 semaine",
        "item4": "1 mois",
        "ideal_for": "Idéal pour : showrooms, pop-ups, ateliers, tournages, événements d'entreprise, présentations B2B.",
        "cta": "Réserver une visite"
      },
      "why": {
        "title": "Pourquoi ASSESE",
        "li1": "Une base unique à Milan pour opérer, se rencontrer et présenter",
        "li2": "Domiciliation + espace physique + réseautage, dans le même écosystème",
        "li3": "Approche agile : délais rapides, solutions pratiques, contacts réels",
        "li4": "Convient aux entreprises internationales et aux PME italiennes qui veulent se développer"
      },
      "contact": {
        "title": "Contact",
        "p1": "ASSESE - Milan (Porta Genova)",
        "p2": "E-mail : office@assese.eu",
        "p4": "Visites sur rendez-vous."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Tous droits réservés.",
        "email": "E-mail : office@assese.eu",
        "visits": "Visites sur rendez-vous."
      },
      "availability": {
        "title": "Disponibilité de l'ASSESE HUB",
        "cta": "Demander une réservation"
      }
    }
  },
  ro: {
    translation: {
      "header": {
        "home": "Acasă",
        "about": "Despre noi",
        "services": "Servicii",
        "membership": "Abonament",
        "hub": "Hub",
        "why": "De ce ASSESE",
        "availability": "Disponibilitate",
        "contact": "Contact"
      },
      "hero": {
        "title": "ASSESE: Punctul tău de intrare în Milano pentru a crește în Italia și a te extinde în Europa.",
        "subtitle": "Suntem un accelerator agil și transversal: sprijinim companiile italiene și internaționale cu servicii concrete de intrare pe piață, internaționalizare și domiciliere, cu acces la un spațiu operațional strategic în Porta Genova.",
        "cta1": "Rezervă o discuție",
        "cta2": "Descoperă ASSESE HUB"
      },
      "about": {
        "title": "Despre noi",
        "subtitle": "Un accelerator agil, nu un spațiu de coworking.",
        "paragraph": "ASSESE - Asociația pentru Dezvoltare Economică și Socială Europeană – s-a născut pentru a ajuta companiile, startup-urile și profesioniștii să transforme o idee într-o prezență reală pe piață: în Italia și în contextul european. Operăm transversal (design, modă, comerț, servicii, tehnologie) și lucrăm cu o abordare practică: conexiuni, evenimente, competențe, spațiu fizic și suport operațional."
      },
      "services": {
        "title": "Ce facem (Servicii)",
        "box1_title": "Intrare pe piața din Italia (Milano)",
        "box1_li1": "Domicilierea companiei în Milano",
        "box1_li2": "Gestionarea corespondenței și prezență profesională",
        "box1_li3": "Suport administrativ și fiscal (cu parteneri)",
        "box1_li4": "Orientare pentru pornire și operațiuni",
        "box2_title": "Internaționalizare și creștere în Europa",
        "box2_li1": "Căi practice pentru extinderea transfrontalieră",
        "box2_li2": "Evenimente B2B și networking",
        "box2_li3": "Ateliere tematice (export, e-commerce, contracte, fiscalitate)",
        "box2_li4": "Conexiuni internaționale (România, Spania)",
        "box3_title": "ASSESE HUB – Spațiu operațional în Porta Genova",
        "box3_li1": "140mp spațiu deschis modular",
        "box3_li2": "3 vitrine la stradă",
        "box3_li3": "Înălțime aprox. 5m",
        "box3_li4": "Potrivit pentru showroom-uri temporare, ateliere, ședințe foto, prezentări, evenimente de afaceri"
      },
      "membership": {
        "title": "Program de aterizare de afaceri (Abonament)",
        "subtitle": "Nu este doar o adresă: este un pachet operațional pentru a intra în Milano și a-ți activa prezența.",
        "plan1_title": "DE BAZĂ",
        "plan1_li1": "Domicilierea companiei",
        "plan1_li2": "Gestionarea corespondenței",
        "plan1_li3": "Acces HUB: 2 ore/lună",
        "plan1_li4": "Acces: 1 eveniment de networking/lună",
        "plan2_title": "PRO",
        "plan2_li1": "Totul de la DE BAZĂ",
        "plan2_li2": "Acces HUB: 1 zi/lună",
        "plan2_li3": "Acces complet la evenimentele de networking",
        "plan2_li4": "Profilul companiei în rețeaua ASSESE (listare)",
        "plan3_title": "CREȘTERE",
        "plan3_li1": "Totul de la PRO",
        "plan3_li2": "Acces HUB: 4 zile/lună",
        "plan3_li3": "1 sesiune strategică trimestrială (cu partener)",
        "plan3_li4": "Introduceri direcționate în rețeaua locală (în funcție de disponibilitate)",
        "cta": "Cere detalii și disponibilitate"
      },
      "hub": {
        "title": "Închiriere hub (doar hub)",
        "subtitle": "Închiriere pe termen scurt ASSESE HUB (Porta Genova – Milano)",
        "description": "Soluții flexibile pentru cei care au nevoie de un spațiu profesional cu vizibilitate ridicată:",
        "item1": "1 zi",
        "item2": "3 zile",
        "item3": "1 săptămână",
        "item4": "1 lună",
        "ideal_for": "Ideal pentru: showroom-uri, pop-up-uri, ateliere, ședințe foto, evenimente corporate, prezentări B2B.",
        "cta": "Rezervă o vizită"
      },
      "why": {
        "title": "De ce ASSESE",
        "li1": "O singură bază în Milano pentru a opera, a te întâlni și a prezenta",
        "li2": "Domiciliere + spațiu fizic + networking, în același ecosistem",
        "li3": "Abordare agilă: timpi rapizi, soluții practice, contacte reale",
        "li4": "Potrivit pentru companii internaționale și IMM-uri italiene care doresc să crească"
      },
      "contact": {
        "title": "Contact",
        "p1": "ASSESE - Milano (Porta Genova)",
        "p2": "E-mail: office@assese.eu",
        "p4": "Vizite pe bază de programare."
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Toate drepturile rezervate.",
        "email": "E-mail: office@assese.eu",
        "visits": "Vizite pe bază de programare."
      },
      "availability": {
        "title": "Disponibilitate ASSESE HUB",
        "cta": "Cere o rezervare"
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
