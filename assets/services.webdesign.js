export default {
  client: {
    selectedSize: 1,
    size: {
      small: {
        label: 'Klein',
        hint: 'Statische Webseite, Portrait',
        priceMultiplyer: 1
      },
      medium: {
        label: 'Mittel',
        hint: 'Blog, Galerie, Kleinunternehmen, Verein',
        priceMultiplyer: 2
      },
      large: {
        label: 'Gross',
        hint: 'Unternehmen, Grossprojekt, Onlinehandel, App',
        priceMultiplyer: 4
      }
    },
    nonprofit: {
      label: 'NonProfit',
      hint: 'Rabatt für Non-Profit Organisationn, Open Souce Projekte, NGOs',
      selected: false,
      priceMultiplyer: 0.8
    }
  },
  basic: [{
      label: '100% Responsiveness',
      details: 'Gewöhnliche kommen über 50% des Internet-Verkehrs von Mobiletelefonen und Tablets. Wir garantieren funktionierende Webseiten für alle Bildschirmgrössen. Dabei gestalten wir nach dem mobile-first (Mobile zuerst) Kredo.'
    },
    {
      label: 'Support für moderne Browser',
      details: 'Wir unterstützen alle gängigen modernen Browser. Wir garantieren grundsätzlich für die gesamte Funktionalität einer App oder Webseite. Unterstützt werden insbesondere Chrome, Firefox, Safari, Microsoft Edge.'
    },
    {
      label: 'Barrierrefreiheit (Standard)',
      details: 'Webseiten und Apps werden grundsätzlich nach bester Praxis programmiert. Dies ermöglicht eine grundsätzliche Barrierrefreiheit (Z.b. screen reader). Achtung: Absolute Barrierrefreiheit wird im Basisangebot jedoch nicht garantiert.'
    },
    {
      label: 'Google Analytics',
      details: 'Zugang zu den Analyse Werkzeugen von Google Analytics. Finde heraus woher auf deine Webseite zugegriffen wird, welche Seiten wie lange besucht werden, usw. Achtung: Für diesen Service ist zusätzlich ein Google Account erforderlich.'
    },
    {
      label: 'Zugang zum Source Code',
      details: 'Falls nicht anders vereinbart ist der Source Code öffentlich zugänglich (Als Open-Source Software). Privat oder öffentlich - Sie erhalten vollen Zugang zum Source Code. Achtung: Für diesen Service ist zusätzlich ein Github Account erforderlich.'
    }
  ],
  advanced: {
    design: {
      label: 'Design',
      items: [{
          label: 'Webdesign',
          details: 'Unser Steckenpferd. Wir konzipieren, gestalten ihre Webseite von A-Z. Nach Wunsch erstellen wir Wireframes, Prototypen und passen den Prozess ihren Bedürfnen an. Dabei arbeiten wir in mehreren Iterationen und kreiren eine Webseite nach ihren Wünschen und Vorstellungen. Wir erstellen Farbkonzepte, Styleguides, User Interfaces, usw.',
          hint: 'Gestalung der Webseite: Struktur, Layout, Schriften, Farben',
          selected: true,
          units: 10,
          rate: 'graphics'
        },
        {
          label: 'Infografiken',
          details: 'Wir erstellen Grafikelemente, Icons, Illustrationen und ähnliches. Wir bearbeiten Photos und verbessern Bildmaterial mithilfe von Adobe Photoshop. ',
          hint: 'Erstellen von Illustrationen passend zu ihrem Inhalt.',
          selected: false,
          units: 6,
          rate: 'graphics'
        },
        {
          label: 'Stock Photos',
          details: 'Wir kümmern uns um die Suche und Erwerb geeigneter Photos um ihrer Webseite zu illustrieren.',
          hint: 'Wir suchen und erwerben passende Photos',
          selected: false,
          units: 2,
          rate: 'graphics'
        }
      ]
    },
    functionality: {
      label: 'Funktionalität',
      items: [{
          label: 'Hosting',
          details: 'Maximale Geschwindigkeit und Sicherheit: Alle unsere Webseiten und Apps werden auf Google Firebase gehosted. Dies garantiert maximale Verfügbarkeit, Geschwindigkeit und Sicherheit. Alle Webseiten werden über HTTPS ausgeliefert.',
          hint: 'Wir hosten ihre Webseite. Schnell, sicher (HTTPS) und bestmöglicher Verfügbarkeit',
          selected: true,
          units: 1,
          rate: 'hosting',
          recurringMonthly: true
        },
        {
          label: 'CMS',
          details: 'Sie möchten den Inhalt ihrer Webseite selbst verwalten? Kein Problem. Wir bieten Content Management System (CMS) Lösungen via <a href="https://prismic.io" target="_blank">prismic.io</a> an. Wir verknüpfen ihre Webseite für eine sichere, zuverlässige Verwaltung ihrer Inhalte.',
          hint: 'Content Management System: Verwalten sie ihre Inhalte selbst',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          label: 'Onlineshop',
          details: 'Wir integrieren Online Shops wie Shopify und ähnliche.',
          hint: 'Verkaufen sie Produkte online',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          label: 'Lokalisation',
          details: 'Haben Sie internationale Kundschaft? Wir bauen ihre Webseite nach Wunsch mehrsprachig auf. Wir übersetzen Deutsch, Englisch, Französisch, Italienisch, Polnisch.',
          hint: 'Stellen Sie ihre Webseite in mehreren Sprachen zur Verfügung',
          selected: false,
          units: 12,
          rate: 'development'
        },
        {
          label: 'Barrierrefreiheit +',
          details: 'Wir testen ihre Webseite mit aktuellen Validatoren für eine garantierte Barrierrefreiheit. Details: http://a11yproject.com/',
          hint: 'Garantierte Barrierrefreiheit',
          selected: false,
          units: 8,
          rate: 'development'
        },
        {
          label: 'Social Media',
          details: 'Wir verknüpfen ihre Webseite mit allen gängigen Social Media Platformen. Facebook, Twitter, Instagram, Tumblr',
          hint: 'Integration von Facebook, Twitter und Co.',
          selected: false,
          units: 6,
          rate: 'development'
        },
        {
          label: 'Interaktive Widgets',
          details: 'Ob Animation, Mini-Games oder interaktive Widgets. Der Fantasie sind keine Grenzen gesetzt.',
          hint: 'Interaktive Inhalte. Details auf Anfrage',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          label: 'Formulare',
          details: 'Wir erstellen Formulare jeglicher Art. Achtung: Wir bieten nur begrenzt server-seitige Verarbeitung der Formulardaten an. Für einfache Kontaktformulare verwenden wir die Dienstleistungen von <a href="https://formspree.io" target="_blank">Formspree</a>',
          hint: 'Formulare für Newsletter, Kontakt, Offerten, usw.',
          selected: false,
          units: 12,
          rate: 'development'
        },
        {
          label: 'Browsersupport +',
          details: 'Zusätzliche Unterstützung für bestimmte Browser (Versionen)',
          hint: 'Garantierte Kompatibilität für erwünschte Browser',
          selected: false,
          units: 18,
          rate: 'development'
        }
      ]
    },
    infrastructure: {
      label: 'Infrastruktur',
      items: [{
          label: 'Persönliche Domain',
          details: 'Wir übernehmen die Domainregistrierung (z.b. http://www.hansmuster.ch) für sie. Wir prüfen Verfügbarkeit ihres gewünschten Domains und machen allenfalls Alternativvorschläge. (via <a href="https://cyon.ch" target="_blank">cyon.ch</a>)',
          hint: 'Wir registrieren ihren Wunschdomain',
          selected: false,
          units: 1,
          rate: 'development'
        },
        {
          label: 'Persönliche Email',
          details: 'Wir stellen Email-Server zur verfügung. Falls sie über einen eigene Domain verfügen erhalten sie ihre Wunsch-Email-Adressen. Z.b. info@hansmuster.ch (via <a href="https://cyon.ch" target="_blank">cyon.ch</a>)',
          hint: 'Wir erstellen ihre Wunsch-Email-Adresse',
          selected: false,
          units: 1,
          rate: 'development'
        }
      ]
    },
    support: {
      label: 'Support',
      items: [{
          label: 'Support Basis',
          details: `
            - Instandhaltung Ihrer Webseite<br>
            - Beratung und Support für integrierte Dienstleistungen (CMS, Shop, usw.)<br>
            - Kosmetische Änderungen<br>
            - Maximal 5 Arbeitsstunden pro Monat<br>
            - Siehe AGBs für weitere Informationen
            `,
          hint: 'Standard Support. Siehe AGBs für mehr Informationen',
          selected: false,
          units: 5,
          rate: 'support',
          recurringMonthly: true
        },
        {
          label: 'Support Sorgenfrei',
          details: `
            Alle Punkte aus dem Basis Vertrag. Zusätzlich:<br>
            - Priorisierter Support<br>
            - Maximal 10 Arbeitsstunden pro Monat<br>
            `,
          hint: 'Priorisierter Support. Siehe AGBs für mehr Informationen',
          selected: false,
          units: 10,
          rate: 'support',
          recurringMonthly: true
        }
      ]
    }
  }
}
