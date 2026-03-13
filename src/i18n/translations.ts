export type Lang = "en" | "it";

export const translations = {
  nav: {
    products: { en: "Products", it: "Prodotti" },
    approach: { en: "Approach", it: "Metodo" },
    about: { en: "About", it: "Chi siamo" },
    contact: { en: "Contact", it: "Contatti" },
    cta: { en: "Get in touch", it: "Contattaci" },
  },
  hero: {
    label: { en: "Software Company", it: "Software Company" },
    headline1: { en: "Building proprietary", it: "Costruiamo sistemi" },
    headline2: { en: "software systems across", it: "software proprietari in" },
    headline3: { en: "high-value verticals.", it: "verticali ad alto valore." },
    sub: {
      en: "Tenet System is the software company behind a growing portfolio of proprietary digital products across mobile, finance security and quantitative systems.",
      it: "Tenet System è la software company dietro un portfolio crescente di prodotti digitali proprietari nei settori mobile, sicurezza finanziaria e sistemi quantitativi.",
    },
    cta1: { en: "Explore products", it: "Scopri i prodotti" },
    cta2: { en: "Get in touch", it: "Contattaci" },
    tag1: { en: "3 Active Products", it: "3 Prodotti Attivi" },
    tag2: { en: "Proprietary Software", it: "Software Proprietario" },
    tag3: { en: "Vertical Systems", it: "Sistemi Verticali" },
  },
  whatIs: {
    label: { en: "Who we are", it: "Chi siamo" },
    heading: {
      en: "A software company built around proprietary products.",
      it: "Una software company costruita attorno a prodotti proprietari.",
    },
    sub: {
      en: "Tenet System is the structure through which proprietary digital products are conceived, developed and scaled.",
      it: "Tenet System è la struttura attraverso cui i prodotti digitali proprietari vengono concepiti, sviluppati e scalati.",
    },
    points: [
      {
        title: { en: "Proprietary by design", it: "Proprietari per scelta" },
        text: {
          en: "We build and own every product. No client work, no outsourcing — only proprietary software assets designed for long-term value.",
          it: "Costruiamo e possediamo ogni prodotto. Nessun lavoro per clienti, nessun outsourcing — solo asset software proprietari progettati per valore a lungo termine.",
        },
      },
      {
        title: { en: "Vertical focus", it: "Focus verticale" },
        text: {
          en: "Each product targets a specific market with purpose-built architecture, data models and business logic tailored to real industry problems.",
          it: "Ogni prodotto è orientato a un mercato specifico con architettura dedicata, modelli dati e logiche di business su misura per problemi reali.",
        },
      },
      {
        title: { en: "Execution-driven", it: "Orientati all'esecuzione" },
        text: {
          en: "From concept to deployment, every decision is guided by measurable outcomes, operational efficiency and scalable infrastructure.",
          it: "Dal concept al deployment, ogni decisione è guidata da risultati misurabili, efficienza operativa e infrastruttura scalabile.",
        },
      },
    ],
  },
  products: {
    label: { en: "Product Portfolio", it: "Portfolio Prodotti" },
    heading: { en: "Active products", it: "Prodotti attivi" },
    sub: {
      en: "Three products across three distinct verticals — united by proprietary ownership, data infrastructure and scalable architecture.",
      it: "Tre prodotti in tre verticali distinti — uniti da proprietà intellettuale, infrastruttura dati e architettura scalabile.",
    },
    items: [
      {
        name: "Tapper",
        category: { en: "Mobile Platform", it: "Piattaforma Mobile" },
        description: {
          en: "A mobile-first platform for talent discovery and performance advertising — designed to connect visibility, competition and monetisation within a scalable video ecosystem.",
          it: "Una piattaforma mobile-first per la scoperta di talenti e advertising performativo — progettata per connettere visibilità, competizione e monetizzazione in un ecosistema video scalabile.",
        },
        tags: {
          en: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
          it: ["Mobile-first", "Social Mechanics", "Performance Advertising"],
        },
      },
      {
        name: "FinGuard",
        category: { en: "Finance Security", it: "Sicurezza Finanziaria" },
        description: {
          en: "Anti-fraud BEC software for finance teams and SMEs, featuring automated IBAN verification, document OCR and cryptographic proof layers to secure payment workflows.",
          it: "Software anti-frode BEC per team finance e PMI, con verifica IBAN automatizzata, OCR documentale e livelli di prova crittografica per proteggere i flussi di pagamento.",
        },
        tags: {
          en: ["BEC Protection", "IBAN Verification", "OCR & Proof Layer"],
          it: ["Protezione BEC", "Verifica IBAN", "OCR & Proof Layer"],
        },
      },
      {
        name: "Delta Terminal",
        category: { en: "Quantitative Systems", it: "Sistemi Quantitativi" },
        description: {
          en: "A live monitoring and statistical reporting system built to transform quantitative signals into structured, measurable operational frameworks.",
          it: "Un sistema di monitoraggio live e reporting statistico progettato per trasformare segnali quantitativi in framework operativi strutturati e misurabili.",
        },
        tags: {
          en: ["Live Monitoring", "Statistical Reporting", "Quant Framework"],
          it: ["Monitoraggio Live", "Reporting Statistico", "Framework Quantitativo"],
        },
      },
    ],
  },
  approach: {
    label: { en: "Our Process", it: "Il Nostro Metodo" },
    heading: { en: "How we build products", it: "Come costruiamo i prodotti" },
    sub: {
      en: "Every product follows the same discipline: a real problem, clean architecture, continuous measurement.",
      it: "Ogni prodotto segue la stessa disciplina: un problema reale, un'architettura pulita, una misurazione continua.",
    },
    pillars: [
      {
        title: { en: "Opportunity", it: "Opportunità" },
        text: {
          en: "We identify verticals where technology, data or automation can create defensible competitive advantages.",
          it: "Identifichiamo verticali dove tecnologia, dati o automazione possono creare vantaggi competitivi difendibili.",
        },
      },
      {
        title: { en: "Architecture", it: "Architettura" },
        text: {
          en: "We design software systems aligned with technical complexity, monetisation models and long-term scalability requirements.",
          it: "Progettiamo sistemi software allineati a complessità tecnica, modelli di monetizzazione e requisiti di scalabilità a lungo termine.",
        },
      },
      {
        title: { en: "Execution", it: "Esecuzione" },
        text: {
          en: "Rapid development cycles, controlled iteration and deployment strategies oriented toward measurable business outcomes.",
          it: "Cicli di sviluppo rapidi, iterazione controllata e strategie di deployment orientate a risultati di business misurabili.",
        },
      },
      {
        title: { en: "Scale", it: "Scala" },
        text: {
          en: "Every system is built with infrastructure for growth — tracking, optimisation and operational efficiency from day one.",
          it: "Ogni sistema è costruito con infrastruttura per la crescita — tracking, ottimizzazione ed efficienza operativa dal primo giorno.",
        },
      },
    ],
  },
  thesis: {
    label: { en: "Our Thesis", it: "La Nostra Tesi" },
    heading1: { en: "Not an agency.", it: "Non un'agenzia." },
    heading2: { en: "Not a generic startup.", it: "Non una startup generica." },
    accent: { en: "A product engine.", it: "Un motore di prodotti." },
    sub: {
      en: "Tenet System exists to build, own and scale proprietary software products — each one designed as an independent, defensible business asset.",
      it: "Tenet System esiste per costruire, possedere e scalare prodotti software proprietari — ognuno progettato come un asset di business indipendente e difendibile.",
    },
    points: [
      {
        title: { en: "Proprietary products, not client work", it: "Prodotti proprietari, non lavoro per clienti" },
        text: {
          en: "Every product we build is owned by Tenet System. We invest in our own software assets rather than building for others.",
          it: "Ogni prodotto che costruiamo è di proprietà di Tenet System. Investiamo nei nostri asset software anziché costruire per altri.",
        },
      },
      {
        title: { en: "Vertical focus, not generic software", it: "Focus verticale, non software generico" },
        text: {
          en: "Each product targets a specific market with tailored architecture — not one-size-fits-all solutions.",
          it: "Ogni prodotto è orientato a un mercato specifico con architettura su misura — non soluzioni generiche.",
        },
      },
      {
        title: { en: "Data and automation at the core", it: "Dati e automazione al centro" },
        text: {
          en: "Our systems are built around data infrastructure and process automation as foundational capabilities.",
          it: "I nostri sistemi sono costruiti attorno a infrastruttura dati e automazione dei processi come capacità fondamentali.",
        },
      },
      {
        title: { en: "Commercial logic, not just technical elegance", it: "Logica commerciale, non solo eleganza tecnica" },
        text: {
          en: "Every architectural decision considers business viability, monetisation and market positioning alongside technical merit.",
          it: "Ogni decisione architetturale considera sostenibilità commerciale, monetizzazione e posizionamento di mercato oltre al merito tecnico.",
        },
      },
      {
        title: { en: "Structured for long-term scaling", it: "Strutturati per scalare nel lungo termine" },
        text: {
          en: "Products are designed from day one to grow — in users, data volume, features and market reach.",
          it: "I prodotti sono progettati dal primo giorno per crescere — in utenti, volume dati, funzionalità e copertura di mercato.",
        },
      },
    ],
  },
  about: {
    label: { en: "About", it: "Chi siamo" },
    heading: { en: "The company", it: "L'azienda" },
    description: {
      en: "Tenet System was founded to build proprietary software products with a concrete logic: combining business vision, technical execution and scalable models into self-sustaining digital assets.",
      it: "Tenet System è stata fondata per costruire prodotti software proprietari con una logica concreta: combinare visione di business, esecuzione tecnica e modelli scalabili in asset digitali autosufficienti.",
    },
    founderLabel: { en: "Founder", it: "Founder" },
    founderName: "Fabrizio Cerulli",
    founderBio: {
      en: "Fabrizio Cerulli founded Tenet System with a clear objective: to build proprietary software products that combine business logic, execution capability and scalability. After more than a decade managing companies, teams and operational growth, he brought this experience into building digital systems, also developing the technical expertise needed to transform ideas into real products. Today he leads Tenet System as a structure focused on vertical software, data, automation and long-term proprietary assets.",
      it: "Fabrizio Cerulli ha fondato Tenet System con un obiettivo preciso: costruire prodotti software proprietari capaci di unire logica di business, execution e scalabilità. Dopo oltre un decennio trascorso a gestire aziende, team e crescita operativa, ha portato questa esperienza nella costruzione di sistemi digitali, sviluppando anche il lato tecnico necessario a trasformare idee in prodotti reali. Oggi guida Tenet System come struttura focalizzata su software verticale, dati, automazione e asset proprietari a lungo termine.",
    },
  },
  contact: {
    label: { en: "Contact", it: "Contatti" },
    heading: { en: "Contact", it: "Contatti" },
    sub: {
      en: "For partnerships, selected enquiries or to learn more about Tenet System's product portfolio.",
      it: "Per partnership, richieste selezionate o per saperne di più sul portfolio prodotti di Tenet System.",
    },
    companyBlock: {
      en: "Tenet System di Fabrizio Cerulli\nVAT No. 14595820961\nVia Pietro Nenni 5, 20128 Milano, Italy",
      it: "Tenet System di Fabrizio Cerulli\nP. IVA 14595820961\nVia Pietro Nenni 5, 20128 Milano",
    },
    generalEmail: { en: "General email", it: "Email generale" },
    supportEmail: { en: "Support", it: "Supporto" },
    name: { en: "Name", it: "Nome" },
    namePlaceholder: { en: "Your name", it: "Il tuo nome" },
    email: { en: "Email", it: "Email" },
    emailPlaceholder: { en: "you@company.com", it: "tu@azienda.com" },
    company: { en: "Company / Project", it: "Azienda / Progetto" },
    companyPlaceholder: { en: "Company or project name", it: "Nome azienda o progetto" },
    message: { en: "Message", it: "Messaggio" },
    messagePlaceholder: { en: "Tell us about your needs...", it: "Raccontaci le tue esigenze..." },
    privacy: {
      en: "I agree to the processing of my data in accordance with the",
      it: "Acconsento al trattamento dei miei dati secondo la",
    },
    privacyLink: { en: "Privacy Policy", it: "Privacy Policy" },
    submit: { en: "Send message", it: "Invia messaggio" },
    successMessage: {
      en: "Message sent successfully. We'll get back to you as soon as possible.",
      it: "Messaggio inviato correttamente. Ti risponderemo appena possibile.",
    },
    errorMessage: {
      en: "Something went wrong. Please try again in a moment.",
      it: "Invio non riuscito. Riprova tra qualche istante.",
    },
  },
  footer: {
    tagline: { en: "Proprietary Software Systems", it: "Sistemi Software Proprietari" },
    legalName: "Tenet System",
    vat: { en: "VAT No. 14595820961", it: "P. IVA 14595820961" },
    products: { en: "Products", it: "Prodotti" },
    contact: { en: "Contact", it: "Contatti" },
    privacy: { en: "Privacy Policy", it: "Privacy Policy" },
    terms: { en: "Terms of Service", it: "Termini di Servizio" },
    bottom: {
      en: "Built around software, data and scalable execution.",
      it: "Costruito attorno a software, dati ed esecuzione scalabile.",
    },
  },
} as const;

export function t(obj: Record<Lang, string>, lang: Lang): string {
  return obj[lang];
}
