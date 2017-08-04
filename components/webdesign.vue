<template>
<div class="component-webdesign">
  <p class="abstract">{{ $t('abstract') }}</p>
  <div class="teaser">
    <img src="/images/webdesign/santihans-responsive.jpg" alt="Webdesign">
  </div>

  <section class="services">
    <h3>Basisangebot</h3>
    <p class="responsive-text">Wir sind spezialisiert auf Konzeption, Design und Umsetzung von Webseiten. Mit anderen Worten: Wir kümmern uns um alles was der Kunde im Browser zu sehen bekommt. Wir setzen Webseiten nach einer bestehenden Vorlage um oder übernehmen gleich Konzeption
      und Design (Layout, Farbkonzepte, UI/UX, usw.) von Beginn weg. Alle unsere Webseiten erfüllen grundsätzlich folgende Basisfunktionen:</p>
    <v-expansion-panel class="services-basic">
      <v-expansion-panel-content v-for="(item,i) in servicesBasic" :key="i">
        <div slot="header">
          <v-icon success>check_circle</v-icon>{{ item.label }}</div>
        <v-card>
          <v-card-text class="inner">{{ item.details}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <h4>Weitere Dienstleistungen</h4>
    <v-expansion-panel class="services-advanced">
      <v-expansion-panel-content v-for="(item,i) in servicesAdvanced" :key="i">
        <div slot="header">
          <v-icon accent>add_circle</v-icon>{{ item.label }}</div>
        <v-card>
          <v-card-text class="inner">
            <v-expansion-panel class="services-advanced-inner">
              <v-expansion-panel-content v-for="(item,i) in item.items" :key="i">
                <div slot="header">
                  <v-icon accent>fiber_manual_record</v-icon>{{ item.label }}</div>
                <v-card>
                  <v-card-text class="inner" v-html="item.details"></v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </section>

  <section class="offer">
    <div class="offer-head">
      <h3>Interaktive Offerte</h3>
      <p class="responsive-text">Nimm dir 2 Minuten Zeit um eine unverbindliche Offerte zusammenzustellen.*</p>
      <div class="price">
        Offer: <strong>CHF <span v-text="price">0</span></strong>
      </div>
    </div>
    <form method="POST" v-on:submit.prevent="onSubmit">
      <v-stepper v-model="step" vertical>
        <v-stepper-step step="0" v-bind:complete="step > 0">
          Basisangebot
          <small>Wähle die Art des Projektes</small>
        </v-stepper-step>
        <v-stepper-step step="1" v-bind:complete="step > 1">
          Zweck der Webseite
          <small>Wähle die Art des Projektes</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <div class="stepper-content">
            <v-radio label="Small" hint="-> Persönliche Webseite, Blog, Gallerie" persistent-hint="true" v-model="ex8" value="radio-1"></v-radio>

            <v-radio label="Medium" hint="-> Kleinunternehmen, Projekt, Verein" persistent-hint="true" v-model="ex8" value="radio-2"></v-radio>
            <v-radio label="Large" hint="-> Unternehmen, Grossprojekt, Onlinehandel, App" persistent-hint="true" v-model="ex8" value="radio-2"></v-radio>
            <v-radio label="Large" hint="-> Nonprofit" persistent-hint="true" v-model="ex8" value="radio-2"></v-radio>

            <div class="stepper-action">
              <v-btn primary @click="step = 2">Continue</v-btn>
            </div>
          </div>
        </v-stepper-content>
        <v-stepper-step step="2" v-bind:complete="step > 2">
          Configure analytics for this app
          <small>Summarize if needed</small>
        </v-stepper-step>
        <v-stepper-content step="2">
          <div class="stepper-content">
            <v-checkbox v-bind:label="`Checkbox 1: ${ex1.toString()}`" v-model="ex1" light></v-checkbox>
            <v-checkbox v-bind:label="`Checkbox 2: ${ex2.toString()}`" v-model="ex2" light></v-checkbox>
            <v-checkbox v-bind:label="`Checkbox 2: ${ex2.toString()}`" v-model="ex2" light></v-checkbox>
            <div class="stepper-action">
              <v-btn flat @click="step = 1">Cancel</v-btn>
              <v-btn primary @click="step = 3">Continue</v-btn>
            </div>
          </div>
        </v-stepper-content>
        <v-stepper-step step="3" v-bind:complete="step > 3">
          Musterbeispiele
          <small>Optional</small>
        </v-stepper-step>
        <v-stepper-content step="3">
          <div class="stepper-content">
            <p>Liste Referenz Webseiten welche dir gefallen und die du passend findest. </p>
            <v-text-field name="reference" label="Referenz URL" v-model="reference"></v-text-field>
            <v-text-field name="reference" label="Referenz URL" v-model="reference"></v-text-field>
            <v-text-field name="reference" label="Referenz URL" v-model="reference"></v-text-field>
            <div class="stepper-action">
              <v-btn flat @click="step = 1">Cancel</v-btn>
              <v-btn primary @click="step = 3">Continue</v-btn>
            </div>
          </div>
        </v-stepper-content>
        <v-stepper-step step="4">
          View setup instructions
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
          <v-btn primary @click.native="step = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </form>
    <div class="offer-footer">
      <small>*Gilt als Anhaltspunkt für ein Beratungsgespräch. Ersetzt nicht die schriftliche Offerte. Preisänderungen vorbehalten.</small>
    </div>
  </section>
  <section class="references">
    <h3>References</h3>
    <v-layout wrap class="references">
      <v-flex xs6 sm3 v-for="(item,i) in referencesBranding" :key="i">
        <a v-ripple :href="item.url" target="_blank">
        <img :src="item.src" alt="Example">
      </a>
      </v-flex>
    </v-layout>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      price: '100',

      ex1: true,
      ex2: false,
      ex3: true,
      ex4: false,
      ex8: 'radio-1',
      ex9: 'radio-3',

      step: 1,
      servicesBasic: [{
          label: '100% Responsiveness',
          details: 'Gewöhnliche kommen über 50% des Internet-Verkehrs von Mobiletelefonen und Tablets. Wir garantieren funktionierende Webseiten für alle Bildschirmgrössen. Dabei gestalten wir nach dem mobile-first (Mobile zuerst) Kredo.'
        },
        {
          label: 'Maximale Geschwindigkeit und Sicherheit',
          details: 'Alle unsere Webseiten und Apps werden auf Google Firebase gehosted. Dies garantiert maximale Verfügbarkeit, Geschwindigkeit und Sicherheit. Alle Webseiten werden über HTTPS ausgeliefert.'
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
      servicesAdvanced: [{
          label: 'Website',
          items: [{
              label: 'CMS',
              details: 'Sie möchten den Inhalt ihrer Webseite selbst verwalten? Kein Problem. Wir bieten Content Management System (CMS) Lösungen via <a href="https://prismic.io" target="_blank">prismic.io</a> an. Wir verknüpfen ihre Webseite für eine sichere, zuverlässige Verwaltung ihrer Inhalte.',
              price: '100'
            },
            {
              label: 'Onlineshop',
              details: 'Wir integrieren Online Shops wie Shopify und ähnliche.',
              price: '100'
            },
            {
              label: 'Lokalisation',
              details: 'Haben Sie internationale Kundschaft? Wir bauen ihre Webseite nach Wunsch mehrsprachig auf. Wir übersetzen Deutsch, Englisch, Französisch, Italienisch, Polnisch.',
              price: '100'
            },
            {
              label: 'Barrierrefreiheit +',
              details: 'Wir testen ihre Webseite mit aktuellen Validatoren für eine garantierte Barrierrefreiheit. Details: http://a11yproject.com/',
              price: '100'
            },
            {
              label: 'Facebook, Twitter, usw.',
              details: 'Wir verknüpfen ihre Webseite mit allen gängigen Social Media Platformen. Facebook, Twitter, Instagram, Tumblr',
              price: '100'
            },
            {
              label: 'Interaktive Widgets',
              details: 'Ob Animation, Mini-Games oder interaktive Widgets. Der Fantasie sind keine Grenzen gesetzt.',
              price: '100'
            },
            {
              label: 'Formulare',
              details: 'Wir erstellen Formulare jeglicher Art. Achtung: Wir bieten nur begrenzt server-seitige Verarbeitung der Formulardaten an. Für einfache Kontaktformulare verwenden wir die Dienstleistungen von <a href="https://formspree.io" target="_blank">Formspree</a>',
              price: '100'
            },
            {
              label: 'Browsersupport +',
              details: 'Zusätzliche Unterstützung für bestimmte Browser (Versionen)',
              price: '100'
            }
          ]
        },
        {
          label: 'Infrastruktur',
          items: [{
              label: 'Ihre Domain',
              details: 'Wir übernehmen die Domainregistrierung (z.b. http://www.hansmuster.ch) für sie. Wir prüfen Verfügbarkeit ihres gewünschten Domains und machen allenfalls Alternativvorschläge. (via <a href="https://cyon.ch" target="_blank">cyon.ch</a>)',
              price: '100'
            },
            {
              label: 'Ihre Email',
              details: 'Wir stellen Email-Server zur verfügung. Falls sie über einen eigene Domain verfügen erhalten sie ihre Wunsch-Email-Adressen. Z.b. info@hansmuster.ch (via <a href="https://cyon.ch" target="_blank">cyon.ch</a>)',
              price: '100'
            }
          ]
        },
        {
          label: 'Support',
          items: [{
              label: 'Support Vertrag Basis',
              details: `
              - Instandhaltung Ihrer Webseite<br>
              - Beratung und Support für integrierte Dienstleistungen (CMS, Shop, usw.)<br>
              - Kosmetische Änderungen<br>
              - Maximal 5 Arbeitsstunden pro Monat<br>
              - Siehe AGBs für weitere Informationen
              `,
              price: '100'
            },
            {
              label: 'Support Vertrag Sorgenfrei',
              details: `
              Alle Punkte aus dem Basis Vertrag. Zusätzlich:<br>
              - Priorisierter Support<br>
              - Maximal 10 Arbeitsstunden pro Monat<br>
              `,
              price: '100'
            }
          ]
        }
      ],
      referencesBranding: [{
          src: '/images/webdesign/frontale.jpg',
          url: 'http://frontale-festival.github.io'
        },
        {
          src: '/images/webdesign/denkmal.jpg',
          url: 'http://denkmal.org'
        },
        {
          src: '/images/webdesign/brigittehenke.jpg',
          url: 'http://brigittehenke.ch'
        },
        {
          src: '/images/webdesign/madeinbasel.jpg',
          url: 'http://madeinbasel.org'
        }
      ]
    }
  },
  i18n: {
    messages: {
      en: {
        abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.'
      },
      de: {
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto, eligendi ducimus quaerat officiis illo aliquid. Maxime ducimus soluta, eveniet, eum fugit asperiores quam, nam nisi eius sit id reprehenderit.'
      }
    }
  }
}
</script>

<style lang="scss">
@import "webdesign.scss"
</style>
