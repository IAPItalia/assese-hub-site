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
        "main_title": "Affitto Spazio (Hub Only)",
        "main_subtitle": "Soluzioni flessibili per chi ha bisogno di spazio professionale ad alta visibilità, ideale per showroom, pop-up, workshop, shooting, eventi aziendali, e presentazioni B2B.",
        "cta": "Prenota una visita",
        "furnished": {
          "title": "Mobilat",
          "description": "Spazio pronto all'uso, completamente arredato per incontri di lavoro, consulenze o come base operativa temporanea."
        },
        "unfurnished": {
          "title": "Nemobilat",
          "description": "Tela bianca da personalizzare secondo le tue esigenze, ideale per shooting fotografici, workshop creativi o eventi su misura."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Spazio espositivo con vetrine su strada per presentare i tuoi prodotti e collezioni in una zona strategica di Milano."
        },
        "events": {
          "title": "Eventi",
          "description": "Location versatile per eventi di networking, lanci di prodotto, presentazioni aziendali e incontri B2B."
        }
      },
      "why": {
        "title": "Perché ASSESE",
        "li1": "Un'unica base a Milano per operare, incontrare e presentare",
        "li2": "Domiciliazione + spazio fisico + networking, nello stesso ecosistema",
        "li3": "Approccio agile: tempi rapidi, soluzioni pratiche, contatti reali",
        "li4": "Adatto a imprese internazionali e PMI italiane che vogliono crescere"
      },
      "contact": {
        "title": "Contattaci",
        "subtitle": "Hai un progetto o un'idea? Clicca il pulsante qui sotto per inviarci un'email o copiare il nostro indirizzo. Visite solo su appuntamento."
      },
      "cta": {
        "button": "Contattaci",
        "copy": "Copia",
        "copied": "Copiato!",
        "copy_aria_label": "Copia indirizzo email",
        "subjects": {
          "contact": "Richiesta informazioni — ASSESE",
          "events": "Richiesta eventi / disponibilità — ASSESE",
          "showroom": "Richiesta showroom / locazione — ASSESE"
        },
        "bodies": {
          "contact": "Buongiorno,\n\nSono interessato/a a:\n\nNome:\nOrganizzazione:\nTelefono:\nMessaggio:\n\nGrazie!",
          "events": "Buongiorno,\n\nSono interessato/a a organizzare un evento:\n\nNome:\nOrganizzazione:\nTelefono:\nPeriodo:\nMessaggio:\n\nGrazie!",
          "showroom": "Buongiorno,\n\nSono interessato/a allo showroom:\n\nNome:\nOrganizzazione:\nTelefono:\nPeriodo:\nMessaggio:\n\nGrazie!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Tutti i diritti riservati.",
        "email": "Email: office@assese.eu",
        "phone": "Telefono: 00393892865881",
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
        "main_title": "Hub Rental (Hub Only)",
        "main_subtitle": "Flexible solutions for those who need a professional space with high visibility, ideal for showrooms, pop-ups, workshops, shootings, corporate events, and B2B presentations.",
        "cta": "Book a Visit",
        "furnished": {
          "title": "Furnished",
          "description": "Ready-to-use space, fully furnished for business meetings, consultations, or as a temporary operational base."
        },
        "unfurnished": {
          "title": "Unfurnished",
          "description": "A blank canvas to customize according to your needs, ideal for photo shoots, creative workshops, or tailor-made events."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Exhibition space with street-front windows to present your products and collections in a strategic area of Milan."
        },
        "events": {
          "title": "Events",
          "description": "Versatile location for networking events, product launches, corporate presentations, and B2B meetings."
        }
      },
      "why": {
        "title": "Why ASSESE",
        "li1": "A single base in Milan to operate, meet, and present",
        "li2": "Domiciliation + physical space + networking, in the same ecosystem",
        "li3": "Agile approach: fast times, practical solutions, real contacts",
        "li4": "Suitable for international companies and Italian SMEs that want to grow"
      },
      "contact": {
        "title": "Get in Touch",
        "subtitle": "Have a project or an idea? Click the button below to send us an email or copy our address. Visits by appointment only."
      },
      "cta": {
        "button": "Get in touch",
        "copy": "Copy",
        "copied": "Copied!",
        "copy_aria_label": "Copy email address",
        "subjects": {
          "contact": "Inquiry — ASSESE",
          "events": "Events / Availability Inquiry — ASSESE",
          "showroom": "Showroom / Rental Inquiry — ASSESE"
        },
        "bodies": {
          "contact": "Hello,\n\nI am interested in:\n\nName:\nOrganization:\nPhone:\nMessage:\n\nThank you!",
          "events": "Hello,\n\nI am interested in organizing an event:\n\nName:\nOrganization:\nPhone:\nPeriod:\nMessage:\n\nThank you!",
          "showroom": "Hello,\n\nI am interested in the showroom:\n\nName:\nOrganization:\nPhone:\nPeriod:\nMessage:\n\nThank you!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. All rights reserved.",
        "email": "Email: office@assese.eu",
        "phone": "Phone: 00393892865881",
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
        "main_title": "Alquiler de Espacio (Solo Hub)",
        "main_subtitle": "Soluciones flexibles para quienes necesitan un espacio profesional con alta visibilidad, ideal para showrooms, pop-ups, talleres, sesiones de fotos, eventos corporativos y presentaciones B2B.",
        "cta": "Reserva una visita",
        "furnished": {
          "title": "Amueblado",
          "description": "Espacio listo para usar, completamente amueblado para reuniones de negocios, consultorías o como base de operaciones temporal."
        },
        "unfurnished": {
          "title": "Sin amueblar",
          "description": "Un lienzo en blanco para personalizar según tus necesidades, ideal para sesiones de fotos, talleres creativos o eventos a medida."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Espacio de exposición con escaparates a la calle para presentar tus productos y colecciones en una zona estratégica de Milán."
        },
        "events": {
          "title": "Eventos",
          "description": "Ubicación versátil para eventos de networking, lanzamientos de productos, presentaciones corporativas y reuniones B2B."
        }
      },
      "why": {
        "title": "Por qué ASSESE",
        "li1": "Una única base en Milán para operar, reunirse y presentar",
        "li2": "Domiciliación + espacio físico + networking, en el mismo ecosistema",
        "li3": "Enfoque ágil: tiempos rápidos, soluciones prácticas, contactos reales",
        "li4": "Adecuado para empresas internacionales y pymes italianas que quieren crecer"
      },
      "contact": {
        "title": "Contáctanos",
        "subtitle": "¿Tienes un proyecto o una idea? Haz clic en el botón de abajo para enviarnos un correo electrónico o copiar nuestra dirección. Visitas solo con cita previa."
      },
      "cta": {
        "button": "Contáctanos",
        "copy": "Copiar",
        "copied": "¡Copiado!",
        "copy_aria_label": "Copiar dirección de correo electrónico",
        "subjects": {
          "contact": "Solicitud de información — ASSESE",
          "events": "Solicitud de eventos / disponibilidad — ASSESE",
          "showroom": "Solicitud de showroom / alquiler — ASSESE"
        },
        "bodies": {
          "contact": "Hola,\n\nEstoy interesado/a en:\n\nNombre:\nOrganización:\nTeléfono:\nMensaje:\n\n¡Gracias!",
          "events": "Hola,\n\nEstoy interesado/a en organizar un evento:\n\nNombre:\nOrganización:\nTeléfono:\nPeríodo:\nMensaje:\n\n¡Gracias!",
          "showroom": "Hola,\n\nEstoy interesado/a en el showroom:\n\nNombre:\nOrganización:\nTeléfono:\nPeríodo:\nMensaje:\n\n¡Gracias!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Todos los derechos reservados.",
        "email": "Correo electrónico: office@assese.eu",
        "phone": "Teléfono: 00393892865881",
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
        "main_title": "Hub-Miete (nur Hub)",
        "main_subtitle": "Flexible Lösungen für diejenigen, die einen professionellen Raum mit hoher Sichtbarkeit benötigen, ideal für Showrooms, Pop-ups, Workshops, Shootings, Firmenveranstaltungen und B2B-Präsentationen.",
        "cta": "Besuch buchen",
        "furnished": {
          "title": "Möbliert",
          "description": "Gebrauchsfertiger Raum, komplett möbliert für Geschäftstreffen, Beratungen oder als temporäre operative Basis."
        },
        "unfurnished": {
          "title": "Unmöbliert",
          "description": "Eine leere Leinwand, die Sie nach Ihren Bedürfnissen gestalten können, ideal für Fotoshootings, kreative Workshops oder maßgeschneiderte Veranstaltungen."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Ausstellungsraum mit straßenseitigen Schaufenstern zur Präsentation Ihrer Produkte und Kollektionen in einem strategischen Bereich von Mailand."
        },
        "events": {
          "title": "Veranstaltungen",
          "description": "Vielseitiger Ort für Networking-Veranstaltungen, Produkteinführungen, Unternehmenspräsentationen und B2B-Meetings."
        }
      },
      "why": {
        "title": "Warum ASSESE",
        "li1": "Eine einzige Basis in Mailand, um zu agieren, sich zu treffen und zu präsentieren",
        "li2": "Domizilierung + physischer Raum + Networking, im selben Ökosystem",
        "li3": "Agiler Ansatz: schnelle Zeiten, praktische Lösungen, echte Kontakte",
        "li4": "Geeignet für internationale Unternehmen und italienische KMU, die wachsen wollen"
      },
      "contact": {
        "title": "Kontaktieren Sie uns",
        "subtitle": "Haben Sie ein Projekt oder eine Idee? Klicken Sie auf die Schaltfläche unten, um uns eine E-Mail zu senden oder unsere Adresse zu kopieren. Besuche nur nach Vereinbarung."
      },
      "cta": {
        "button": "Kontaktieren Sie uns",
        "copy": "Kopieren",
        "copied": "Kopiert!",
        "copy_aria_label": "E-Mail-Adresse kopieren",
        "subjects": {
          "contact": "Anfrage — ASSESE",
          "events": "Anfrage zu Veranstaltungen / Verfügbarkeit — ASSESE",
          "showroom": "Anfrage zu Showroom / Miete — ASSESE"
        },
        "bodies": {
          "contact": "Hallo,\n\nIch interessiere mich für:\n\nName:\nOrganisation:\nTelefon:\nNachricht:\n\nDanke!",
          "events": "Hallo,\n\nIch interessiere mich für die Organisation einer Veranstaltung:\n\nName:\nOrganisation:\nTelefon:\nZeitraum:\nNachricht:\n\nDanke!",
          "showroom": "Hallo,\n\nIch interessiere mich für den Showroom:\n\nName:\nOrganisation:\nTelefon:\nZeitraum:\nNachricht:\n\nDanke!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Alle Rechte vorbehalten.",
        "email": "E-Mail: office@assese.eu",
        "phone": "Telefon: 00393892865881",
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
        "main_title": "Location de hub (Hub uniquement)",
        "main_subtitle": "Solutions flexibles pour ceux qui ont besoin d'un espace professionnel avec une grande visibilité, idéal pour les showrooms, pop-ups, ateliers, tournages, événements d'entreprise et présentations B2B.",
        "cta": "Réserver une visite",
        "furnished": {
          "title": "Meublé",
          "description": "Espace prêt à l'emploi, entièrement meublé pour les réunions d'affaires, les consultations ou comme base opérationnelle temporaire."
        },
        "unfurnished": {
          "title": "Non meublé",
          "description": "Une toile vierge à personnaliser selon vos besoins, idéale pour les séances photo, les ateliers créatifs ou les événements sur mesure."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Espace d'exposition avec vitrines sur rue pour présenter vos produits et collections dans un quartier stratégique de Milan."
        },
        "events": {
          "title": "Événements",
          "description": "Lieu polyvalent pour les événements de réseautage, les lancements de produits, les présentations d'entreprise et les réunions B2B."
        }
      },
      "why": {
        "title": "Pourquoi ASSESE",
        "li1": "Une base unique à Milan pour opérer, se rencontrer et présenter",
        "li2": "Domiciliation + espace physique + réseautage, dans le même écosystème",
        "li3": "Approche agile : délais rapides, solutions pratiques, contacts réels",
        "li4": "Convient aux entreprises internationales et aux PME italiennes qui veulent se développer"
      },
      "contact": {
        "title": "Contactez-nous",
        "subtitle": "Vous avez un projet ou une idée ? Cliquez sur le bouton ci-dessous pour nous envoyer un e-mail ou copier notre adresse. Visites sur rendez-vous uniquement."
      },
      "cta": {
        "button": "Contactez-nous",
        "copy": "Copier",
        "copied": "Copié !",
        "copy_aria_label": "Copier l'adresse e-mail",
        "subjects": {
          "contact": "Demande d'informations — ASSESE",
          "events": "Demande d'événements / disponibilité — ASSESE",
          "showroom": "Demande de showroom / location — ASSESE"
        },
        "bodies": {
          "contact": "Bonjour,\n\nJe suis intéressé(e) par :\n\nNom :\nOrganisation :\nTéléphone :\nMessage :\n\nMerci !",
          "events": "Bonjour,\n\nJe suis intéressé(e) par l'organisation d'un événement :\n\nNom :\nOrganisation :\nTéléphone :\nPériode :\nMessage :\n\nMerci !",
          "showroom": "Bonjour,\n\nJe suis intéressé(e) par le showroom :\n\nNom :\nOrganisation :\nTéléphone :\nPériode :\nMessage :\n\nMerci !"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Tous droits réservés.",
        "email": "E-mail : office@assese.eu",
        "phone": "Téléphone : 00393892865881",
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
        "box1_li5": "Consultanță pentru plan de afaceri și strategie de piață",
        "box1_li6": "Acces la o rețea de profesioniști și contacte cheie",
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
        "main_title": "Închiriere hub (doar hub)",
        "main_subtitle": "Soluții flexibile pentru cei care au nevoie de un spațiu profesional cu vizibilitate ridicată, ideal pentru showroom-uri, pop-up-uri, ateliere, ședințe foto, evenimente corporate și prezentări B2B.",
        "cta": "Rezervă o vizită",
        "furnished": {
          "title": "Mobilat",
          "description": "Spațiu gata de utilizare, complet mobilat pentru întâlniri de afaceri, consultanță sau ca bază operațională temporară."
        },
        "unfurnished": {
          "title": "Nemobilat",
          "description": "O pânză albă de personalizat în funcție de nevoile dvs., ideală pentru ședințe foto, ateliere creative sau evenimente personalizate."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Spațiu de expoziție cu vitrine la stradă pentru a vă prezenta produsele și colecțiile într-o zonă strategică din Milano."
        },
        "events": {
          "title": "Evenimente",
          "description": "Locație versatilă pentru evenimente de networking, lansări de produse, prezentări corporate și întâlniri B2B."
        }
      },
      "why": {
        "title": "De ce ASSESE",
        "li1": "O singură bază în Milano pentru a opera, a te întâlni și a prezenta",
        "li2": "Domiciliere + spațiu fizic + networking, în același ecosistem",
        "li3": "Abordare agilă: timpi rapizi, soluții practice, contacte reale",
        "li4": "Potrivit pentru companii internaționale și IMM-uri italiene care doresc să crească"
      },
      "contact": {
        "title": "Contactează-ne",
        "subtitle": "Ai un proiect sau o idee? Dă clic pe butonul de mai jos pentru a ne trimite un e-mail sau a copia adresa noastră. Vizite doar pe bază de programare."
      },
      "cta": {
        "button": "Contactează-ne",
        "copy": "Copiază",
        "copied": "Copiat!",
        "copy_aria_label": "Copiază adresa de e-mail",
        "subjects": {
          "contact": "Cerere de informații — ASSESE",
          "events": "Cerere evenimente / disponibilitate — ASSESE",
          "showroom": "Cerere showroom / închiriere — ASSESE"
        },
        "bodies": {
          "contact": "Bună ziua,\n\nSunt interesat(ă) de:\n\nNume:\nOrganizație:\nTelefon:\nMesaj:\n\nMulțumesc!",
          "events": "Bună ziua,\n\nSunt interesat(ă) de organizarea unui eveniment:\n\nNume:\nOrganizație:\nTelefon:\nPerioadă:\nMesaj:\n\nMulțumesc!",
          "showroom": "Bună ziua,\n\nSunt interesat(ă) de showroom:\n\nNume:\nOrganizație:\nTelefon:\nPerioadă:\nMesaj:\n\nMulțumesc!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Toate drepturile rezervate.",
        "email": "E-mail: office@assese.eu",
        "phone": "Telefon: la cerere",
        "visits": "Vizite pe bază de programare."
      },
      "availability": {
        "title": "Disponibilitate ASSESE HUB",
        "cta": "Cere o rezervare"
      }
    }
  },
  tr: {
    translation: {
      "header": {
        "home": "Anasayfa",
        "about": "Hakkımızda",
        "services": "Hizmetler",
        "membership": "Üyelik",
        "hub": "Merkez",
        "why": "Neden ASSESE",
        "availability": "Müsaitlik",
        "contact": "İletişim"
      },
      "hero": {
        "title": "ASSESE: İtalya'da büyümek ve Avrupa'ya açılmak için Milano'daki giriş noktanız.",
        "subtitle": "Çevik ve çapraz bir hızlandırıcıyız: İtalyan ve uluslararası şirketleri, Porta Genova'da stratejik bir operasyonel alana erişimle somut iş girişi, uluslararasılaşma ve yerelleştirme hizmetleriyle destekliyoruz.",
        "cta1": "Görüşme Ayarla",
        "cta2": "ASSESE HUB'ı Keşfet"
      },
      "about": {
        "title": "Hakkımızda",
        "subtitle": "Çevik bir hızlandırıcı, bir ortak çalışma alanı değil.",
        "paragraph": "ASSESE - Avrupa Ekonomik ve Sosyal Kalkınma Derneği – şirketlerin, startup'ların ve profesyonellerin bir fikri İtalya'da ve Avrupa bağlamında gerçek bir pazar varlığına dönüştürmelerine yardımcı olmak için doğdu. Çapraz olarak (tasarım, moda, ticaret, hizmetler, teknoloji) faaliyet gösteriyoruz ve pratik bir yaklaşımla çalışıyoruz: bağlantılar, etkinlikler, beceriler, fiziksel alan ve operasyonel destek."
      },
      "services": {
        "title": "Ne Yapıyoruz (Hizmetler)",
        "box1_title": "İtalya'ya İş Girişi (Milano)",
        "box1_li1": "Milano'da şirket yerelleştirme",
        "box1_li2": "Yazışma yönetimi ve profesyonel varlık",
        "box1_li3": "İdari ve mali destek (ortaklarla)",
        "box1_li4": "Başlangıç ve operasyonlar için rehberlik",
        "box2_title": "Avrupa'da Uluslararasılaşma ve Büyüme",
        "box2_li1": "Sınır ötesi genişleme için pratik yollar",
        "box2_li2": "B2B etkinlikleri ve ağ oluşturma",
        "box2_li3": "Tematik atölyeler (ihracat, e-ticaret, sözleşmeler, vergilendirme)",
        "box2_li4": "Uluslararası bağlantılar (Romanya, İspanya)",
        "box3_title": "ASSESE HUB – Porta Genova'da Operasyonel Alan",
        "box3_li1": "140 metrekare modüler açık alan",
        "box3_li2": "Sokağa bakan 3 vitrin",
        "box3_li3": "Yükseklik yaklaşık 5m",
        "box3_li4": "Geçici showroomlar, atölyeler, çekimler, sunumlar, iş etkinlikleri için uygun"
      },
      "membership": {
        "title": "İş Kurma Programı (Üyelik)",
        "subtitle": "Bu sadece bir adres değil: Milano'ya girmek ve varlığınızı etkinleştirmek için bir operasyonel pakettir.",
        "plan1_title": "TEMEL",
        "plan1_li1": "Şirket yerelleştirme",
        "plan1_li2": "Posta yönetimi",
        "plan1_li3": "HUB erişimi: 2 saat/ay",
        "plan1_li4": "Erişim: 1 ağ etkinliği/ay",
        "plan2_title": "PRO",
        "plan2_li1": "Tüm TEMEL özellikler",
        "plan2_li2": "HUB erişimi: 1 gün/ay",
        "plan2_li3": "Ağ etkinliklerine tam erişim",
        "plan2_li4": "ASSESE ağında şirket profili (listeleme)",
        "plan3_title": "BÜYÜME",
        "plan3_li1": "Tüm PRO özellikler",
        "plan3_li2": "HUB erişimi: 4 gün/ay",
        "plan3_li3": "1 üç aylık stratejik oturum (ortakla)",
        "plan3_li4": "Yerel ağa hedeflenmiş tanıtımlar (müsaitliğe bağlı)",
        "cta": "Detayları ve müsaitliği isteyin"
      },
      "hub": {
        "main_title": "Merkez Kiralama (Sadece Merkez)",
        "main_subtitle": "Showroomlar, pop-up'lar, atölyeler, çekimler, kurumsal etkinlikler ve B2B sunumları için ideal, yüksek görünürlüğe sahip profesyonel bir alana ihtiyaç duyanlar için esnek çözümler.",
        "cta": "Ziyaret Ayırt",
        "furnished": {
          "title": "Mobilyalı",
          "description": "İş toplantıları, danışmanlık veya geçici bir operasyonel üs olarak tamamen mobilyalı, kullanıma hazır alan."
        },
        "unfurnished": {
          "title": "Mobilyasız",
          "description": "İhtiyaçlarınıza göre özelleştirebileceğiniz boş bir tuval, fotoğraf çekimleri, yaratıcı atölyeler veya özel etkinlikler için ideal."
        },
        "showroom": {
          "title": "Showroom",
          "description": "Ürünlerinizi ve koleksiyonlarınızı Milano'nun stratejik bir bölgesinde sergilemek için sokağa bakan vitrinli sergi alanı."
        },
        "events": {
          "title": "Etkinlikler",
          "description": "Ağ etkinlikleri, ürün lansmanları, kurumsal sunumlar ve B2B toplantıları için çok yönlü bir mekan."
        }
      },
      "why": {
        "title": "Neden ASSESE",
        "li1": "Çalışmak, buluşmak ve sunum yapmak için Milano'da tek bir üs",
        "li2": "Yerelleştirme + fiziksel alan + ağ oluşturma, aynı ekosistemde",
        "li3": "Çevik yaklaşım: hızlı zamanlar, pratik çözümler, gerçek bağlantılar",
        "li4": "Büyümek isteyen uluslararası şirketler ve İtalyan KOBİ'leri için uygun"
      },
      "contact": {
        "title": "İletişime Geçin",
        "subtitle": "Bir projeniz veya bir fikriniz mi var? Bize bir e-posta göndermek veya adresimizi kopyalamak için aşağıdaki düğmeyi tıklayın. Ziyaretler sadece randevu ile."
      },
      "cta": {
        "button": "İletişime Geçin",
        "copy": "Kopyala",
        "copied": "Kopyalandı!",
        "copy_aria_label": "E-posta adresini kopyala",
        "subjects": {
          "contact": "Bilgi Talebi — ASSESE",
          "events": "Etkinlik / Müsaitlik Talebi — ASSESE",
          "showroom": "Showroom / Kiralama Talebi — ASSESE"
        },
        "bodies": {
          "contact": "Merhaba,\n\nİlgileniyorum:\n\nİsim:\nKuruluş:\nTelefon:\nMesaj:\n\nTeşekkürler!",
          "events": "Merhaba,\n\nBir etkinlik düzenlemekle ilgileniyorum:\n\nİsim:\nKuruluş:\nTelefon:\nDönem:\nMesaj:\n\nTeşekkürler!",
          "showroom": "Merhaba,\n\nShowroom ile ilgileniyorum:\n\nİsim:\nKuruluş:\nTelefon:\nDönem:\nMesaj:\n\nTeşekkürler!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Tüm hakları saklıdır.",
        "email": "E-posta: office@assese.eu",
        "phone": "Telefon: 00393892865881",
        "visits": "Ziyaretler randevu ile."
      },
      "availability": {
        "title": "ASSESE HUB Müsaitliği",
        "cta": "Rezervasyon Talep Et"
      }
    }
  },
  zh: {
    translation: {
      "header": {
        "home": "主页",
        "about": "关于我们",
        "services": "服务",
        "membership": "会员",
        "hub": "中心",
        "why": "为什么选择ASSESE",
        "availability": "可用性",
        "contact": "联系方式"
      },
      "hero": {
        "title": "ASSESE：您在米兰的切入点，助您在意大利发展并拓展至欧洲。",
        "subtitle": "我们是一家灵活的横向加速器：我们为意大利和国际公司提供具体的商业准入、国际化和本地化服务，并可使用位于Porta Genova的战略运营空间。",
        "cta1": "预约通话",
        "cta2": "探索ASSESE中心"
      },
      "about": {
        "title": "关于我们",
        "subtitle": "一个灵活的加速器，而不是一个联合办公空间。",
        "paragraph": "ASSESE - 欧洲经济和社会发展协会 – 旨在帮助公司、初创企业和专业人士将一个想法转变为在意大利和欧洲市场上的真实存在。我们横向运作（设计、时尚、贸易、服务、技术），并采用务实的方法：人脉、活动、技能、物理空间和运营支持。"
      },
      "services": {
        "title": "我们做什么（服务）",
        "box1_title": "意大利商业准入（米兰）",
        "box1_li1": "在米兰的公司注册地址",
        "box1_li2": "信件管理和专业形象",
        "box1_li3": "行政和财务支持（与合作伙伴）",
        "box1_li4": "启动和运营指导",
        "box2_title": "在欧洲的国际化和增长",
        "box2_li1": "跨境扩张的实用途径",
        "box2_li2": "B2B活动和社交",
        "box2_li3": "专题研讨会（出口、电子商务、合同、税务）",
        "box2_li4": "国际联系（罗马尼亚、西班牙）",
        "box3_title": "ASSESE中心 – Porta Genova的运营空间",
        "box3_li1": "140平方米的模块化开放空间",
        "box3_li2": "3个临街橱窗",
        "box3_li3": "高度约5米",
        "box3_li4": "适用于临时展厅、研讨会、拍摄、演示、商务活动"
      },
      "membership": {
        "title": "商业落地计划（会员）",
        "subtitle": "这不仅仅是一个地址：这是一个进入米兰并激活您业务的运营套餐。",
        "plan1_title": "基础",
        "plan1_li1": "公司注册地址",
        "plan1_li2": "邮件管理",
        "plan1_li3": "中心使用权：2小时/月",
        "plan1_li4": "参加：1次社交活动/月",
        "plan2_title": "专业",
        "plan2_li1": "所有基础版功能",
        "plan2_li2": "中心使用权：1天/月",
        "plan2_li3": "完全参加社交活动",
        "plan2_li4": "在ASSESE网络中的公司简介（列表）",
        "plan3_title": "增长",
        "plan3_li1": "所有专业版功能",
        "plan3_li2": "中心使用权：4天/月",
        "plan3_li3": "1次季度战略会议（与合作伙伴）",
        "plan3_li4": "在本地网络中进行有针对性的介绍（视情况而定）",
        "cta": "请求详细信息和可用性"
      },
      "hub": {
        "main_title": "中心租赁（仅限中心）",
        "main_subtitle": "为需要高知名度专业空间的人士提供灵活的解决方案，非常适合展厅、快闪店、研讨会、拍摄、公司活动和B2B演示。",
        "cta": "预约参观",
        "furnished": {
          "title": "带家具",
          "description": "随时可用的空间，为商务会议、咨询或作为临时运营基地提供全套家具。"
        },
        "unfurnished": {
          "title": "不带家具",
          "description": "一块可根据您的需求定制的空白画布，非常适合拍照、创意研讨会或量身定制的活动。"
        },
        "showroom": {
          "title": "展厅",
          "description": "在米兰的战略区域，通过临街橱窗展示您的产品和系列的展览空间。"
        },
        "events": {
          "title": "活动",
          "description": "适用于社交活动、产品发布、公司演示和B2B会议的多功能场所。"
        }
      },
      "why": {
        "title": "为什么选择ASSESE",
        "li1": "在米兰的一个基地，用于运营、会面和演示",
        "li2": "注册地址 + 物理空间 + 社交，在同一个生态系统中",
        "li3": "灵活的方法：快速、实用的解决方案、真实的人脉",
        "li4": "适合希望发展的国际公司和意大利中小企业"
      },
      "contact": {
        "title": "联系我们",
        "subtitle": "您有项目或想法吗？点击下面的按钮给我们发送电子邮件或复制我们的地址。仅限预约访问。"
      },
      "cta": {
        "button": "联系我们",
        "copy": "复制",
        "copied": "已复制！",
        "copy_aria_label": "复制电子邮件地址",
        "subjects": {
          "contact": "咨询 — ASSESE",
          "events": "活动/可用性咨询 — ASSESE",
          "showroom": "展厅/租赁咨询 — ASSESE"
        },
        "bodies": {
          "contact": "你好，\n\n我感兴趣的是：\n\n姓名：\n组织：\n电话：\n信息：\n\n谢谢！",
          "events": "你好，\n\n我有兴趣组织一个活动：\n\n姓名：\n组织：\n电话：\n期间：\n信息：\n\n谢谢！",
          "showroom": "你好，\n\n我对展厅感兴趣：\n\n姓名：\n组织：\n电话：\n期间：\n信息：\n\n谢谢！"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. 版权所有。",
        "email": "电子邮件：office@assese.eu",
        "phone": "电话：00393892865881",
        "visits": "仅限预约访问。"
      },
      "availability": {
        "title": "ASSESE中心可用性",
        "cta": "请求预订"
      }
    }
  },
  ru: {
    translation: {
      "header": {
        "home": "Главная",
        "about": "О нас",
        "services": "Услуги",
        "membership": "Членство",
        "hub": "Хаб",
        "why": "Почему ASSESE",
        "availability": "Доступность",
        "contact": "Контакты"
      },
      "hero": {
        "title": "ASSESE: Ваша точка входа в Милан для роста в Италии и расширения в Европе.",
        "subtitle": "Мы - гибкий и многопрофильный акселератор: мы поддерживаем итальянские и международные компании конкретными услугами по выходу на рынок, интернационализации и домицилиации, с доступом к стратегическому операционному пространству в Porta Genova.",
        "cta1": "Забронировать звонок",
        "cta2": "Откройте для себя ASSESE HUB"
      },
      "about": {
        "title": "О нас",
        "subtitle": "Гибкий акселеator, а не коворкинг.",
        "paragraph": "ASSESE - Ассоциация экономического и социального развития Европы – была создана, чтобы помочь компаниям, стартапам и профессионалам превратить идею в реальное присутствие на рынке: в Италии и в европейском контексте. Мы работаем в различных сферах (дизайн, мода, торговля, услуги, технологии) и используем практический подход: связи, мероприятия, навыки, физическое пространство и операционная поддержка."
      },
      "services": {
        "title": "Что мы делаем (Услуги)",
        "box1_title": "Выход на рынок Италии (Милан)",
        "box1_li1": "Домицилиация компании в Милане",
        "box1_li2": "Управление корреспонденцией и профессиональное присутствие",
        "box1_li3": "Административная и налоговая поддержка (с партнерами)",
        "box1_li4": "Руководство по запуску и операционной деятельности",
        "box2_title": "Интернационализация и рост в Европе",
        "box2_li1": "Практические пути для трансграничного расширения",
        "box2_li2": "B2B-мероприятия и нетворкинг",
        "box2_li3": "Тематические семинары (экспорт, электронная коммерция, контракты, налогообложение)",
        "box2_li4": "Международные связи (Румыния, Испания)",
        "box3_title": "ASSESE HUB – Операционное пространство в Porta Genova",
        "box3_li1": "140 кв.м модульного открытого пространства",
        "box3_li2": "3 витрины на улицу",
        "box3_li3": "Высота около 5 м",
        "box3_li4": "Подходит для временных шоу-румов, семинаров, съемок, презентаций, деловых мероприятий"
      },
      "membership": {
        "title": "Программа бизнес-посадки (Членство)",
        "subtitle": "Это не просто адрес: это операционный пакет для входа в Милан и активации вашего присутствия.",
        "plan1_title": "БАЗОВЫЙ",
        "plan1_li1": "Домицилиация компании",
        "plan1_li2": "Управление почтой",
        "plan1_li3": "Доступ в HUB: 2 часа/месяц",
        "plan1_li4": "Доступ: 1 сетевое мероприятие/месяц",
        "plan2_title": "ПРО",
        "plan2_li1": "Все из БАЗОВОГО",
        "plan2_li2": "Доступ в HUB: 1 день/месяц",
        "plan2_li3": "Полный доступ к сетевым мероприятиям",
        "plan2_li4": "Профиль компании в сети ASSESE (листинг)",
        "plan3_title": "РОСТ",
        "plan3_li1": "Все из ПРО",
        "plan3_li2": "Доступ в HUB: 4 дня/месяц",
        "plan3_li3": "1 ежеквартальная стратегическая сессия (с партнером)",
        "plan3_li4": "Целевые представления в местной сети (при наличии)",
        "cta": "Запросить детали и доступность"
      },
      "hub": {
        "main_title": "Аренда хаба (Только хаб)",
        "main_subtitle": "Гибкие решения для тех, кому нужно профессиональное пространство с высокой видимостью, идеально подходящее для шоу-румов, поп-апов, семинаров, съемок, корпоративных мероприятий и B2B-презентаций.",
        "cta": "Забронировать визит",
        "furnished": {
          "title": "Меблированный",
          "description": "Готовое к использованию пространство, полностью меблированное для деловых встреч, консультаций или в качестве временной операционной базы."
        },
        "unfurnished": {
          "title": "Немеблированный",
          "description": "Чистый холст для настройки в соответствии с вашими потребностями, идеально подходящий для фотосессий, творческих семинаров или индивидуальных мероприятий."
        },
        "showroom": {
          "title": "Шоу-рум",
          "description": "Выставочное пространство с витринами на улицу для представления ваших продуктов и коллекций в стратегическом районе Милана."
        },
        "events": {
          "title": "Мероприятия",
          "description": "Универсальное место для сетевых мероприятий, запусков продуктов, корпоративных презентаций и B2B-встреч."
        }
      },
      "why": {
        "title": "Почему ASSESE",
        "li1": "Единая база в Милане для работы, встреч и презентаций",
        "li2": "Домицилиация + физическое пространство + нетворкинг, в одной экосистеме",
        "li3": "Гибкий подход: быстрые сроки, практические решения, реальные контакты",
        "li4": "Подходит для международных компаний и итальянских МСП, которые хотят расти"
      },
      "contact": {
        "title": "Свяжитесь с нами",
        "subtitle": "У вас есть проект или идея? Нажмите кнопку ниже, чтобы отправить нам электронное письмо или скопировать наш адрес. Посещения только по предварительной записи."
      },
      "cta": {
        "button": "Свяжитесь с нами",
        "copy": "Копировать",
        "copied": "Скопировано!",
        "copy_aria_label": "Скопировать адрес электронной почты",
        "subjects": {
          "contact": "Запрос — ASSESE",
          "events": "Запрос на мероприятия / доступность — ASSESE",
          "showroom": "Запрос на шоу-рум / аренду — ASSESE"
        },
        "bodies": {
          "contact": "Здравствуйте,\n\nМеня интересует:\n\nИмя:\nОрганизация:\nТелефон:\nСообщение:\n\nСпасибо!",
          "events": "Здравствуйте,\n\nМеня интересует организация мероприятия:\n\nИмя:\nОрганизация:\nТелефон:\nПериод:\nСообщение:\n\nСпасибо!",
          "showroom": "Здравствуйте,\n\nМеня интересует шоу-рум:\n\nИмя:\nОрганизация:\nТелефон:\nПериод:\nСообщение:\n\nСпасибо!"
        }
      },
      "footer": {
        "copy": "© 2024 ASSESE Milano. Все права защищены.",
        "email": "Электронная почта: office@assese.eu",
        "phone": "Телефон: 00393892865881",
        "visits": "Посещения по предварительной записи."
      },
      "availability": {
        "title": "Доступность ASSESE HUB",
        "cta": "Запросить бронирование"
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
