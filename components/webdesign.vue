<template>
<div class="component-webdesign">
  <section class="intro">
    <h2>Webdesign</h2>
    <p class="abstract">{{ $t('abstract') }}</p>
    <div class="teaser">
      <img src="/images/webdesign/santihans-responsive.jpg" alt="Webdesign">
    </div>
    <div class="text-xs-center">
      <v-btn large flat outline :to="localePath('/contact')">Interaktive Offerte</v-btn>
    </div>
  </section>
  <section class="services">
    <h3>Dienstleistungen</h3>
    <div class="responsive-text">Hier finden Sie alle unsere Webdesign-Angebote im Überblick.</div>
    <v-expansion-panel class="expansion-custom">
      <v-expansion-panel-content v-for="(item,i) in services.advanced" :key="i">
        <div slot="header">
          <v-icon accent>add_circle</v-icon>{{ item.label }}</div>
        <v-card>
          <v-card-text class="inner">
            <v-expansion-panel class="expansion-custom level-2">
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
    <div class="services-footer"><small>Vermissen Sie eine Dienstleistung? Wir arbeiten mit mehreren Partnern zusammen und finden bestimmt eine Lösung für ihre Bedürfnisse. Kontaktieren Sie uns.</small></div>
  </section>

  <section class="basics">
    <h4>Basisangebot</h4>
    <p>Unabhängig von der Grösse ihres Projektes - alle unsere Webseiten verfügen grundsätzlich über folgende Basisfunktionen:</p>
    <v-expansion-panel class="expansion-custom">
      <v-expansion-panel-content v-for="(item,i) in services.basic" :key="i">
        <div slot="header">
          <v-icon success>check_circle</v-icon>{{ item.label }}</div>
        <v-card>
          <v-card-text class="inner">{{ item.details}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </section>

  <section class="offer">
    <div class="offer-head">
      <h3>Interaktive Offerte</h3>
      <p class="responsive-text">Nimm dir 2 Minuten Zeit um eine unverbindliche Offerte zusammenzustellen.*</p>
      <div class="price">
        ab CHF <span>{{ calculatedPrice }}</span>
      </div>
    </div>
    <form method="POST" v-on:submit.prevent="onSubmit">
      <v-stepper v-model="step" vertical>
        <v-stepper-step step="0" v-bind:complete="step > 0">
          Basisangebot
        </v-stepper-step>

        <v-stepper-step step="1" v-bind:complete="step > 1">
          Umfang der Webseite
          <small>Wähle die Art des Projektes</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <div class="stepper-content">
            <v-radio v-for="(item,i) in services.client.size" v-model="services.client.selectedSize" :label="item.label" :hint="item.hint" persistent-hint :value="item.priceMultiplyer"></v-radio>
            <v-checkbox :label="services.client.nonprofit.label" v-model="services.client.nonprofit.selected" :hint="services.client.nonprofit.hint" persistent-hint light></v-checkbox>
            <div class="stepper-action">
              <v-btn primary @click="step = 2">Continue</v-btn>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step step="2" v-bind:complete="step > 2">
          Design
          <small>Bitte auswählen</small>
        </v-stepper-step>
        <v-stepper-content step="2">
          <div class="stepper-content">
            <v-checkbox v-for="(item,i) in services.advanced.design.items" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <div class="stepper-action">
              <v-btn flat @click="step = 1">Zurück</v-btn>
              <v-btn primary @click="step = 3">Weiter</v-btn>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step step="3" v-bind:complete="step > 3">
          Funktionalität
          <small>Bitte auswählen</small>
        </v-stepper-step>
        <v-stepper-content step="3">
          <div class="stepper-content">
            <v-checkbox v-for="(item,i) in services.advanced.functionality.items" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <div class="stepper-action">
              <v-btn flat @click="step = 2">Zurück</v-btn>
              <v-btn primary @click="step = 4">Weiter</v-btn>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step step="4" v-bind:complete="step > 4">
          Infrastruktur/Support
          <small>Bitte auswählen</small>
        </v-stepper-step>
        <v-stepper-content step="4">
          <div class="stepper-content">
            <v-checkbox v-for="(item,i) in services.advanced.infrastructure.items" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <v-checkbox v-for="(item,i) in services.advanced.support.items" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <div class="stepper-action">
              <v-btn flat @click="step = 3">Zurück</v-btn>
              <v-btn primary @click="step = 5">Weiter</v-btn>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step step="5" editable>
          Kontaktinformationen
        </v-stepper-step>
        <v-stepper-content step="5">
          <div class="stepper-content">
            Achtung: Sie haben "Design" ausgeschlossen. Ich verstehe dass ich die …
            <v-text-field name="email" :label="$t('form.email')" v-model="email" required :rules="[rules.required, rules.email]"></v-text-field>
            <v-text-field name="message" :label="$t('form.message')" counter v-model="message" max="600" multi-line></v-text-field>

            <v-btn v-show="!showReferenceInput" primary @click="showReferenceInput = true">Referenzen</v-btn>
            <div v-show="showReferenceInput">
              <p>Musterbeispiele: Liste Referenz Webseiten welche dir gefallen und die du passend findest. </p>
              <v-text-field name="reference" label="Referenz URL" v-model="reference"></v-text-field>
              <v-text-field name="reference" label="Referenz URL" v-model="reference"></v-text-field>
            </div>
          </div>

          <div class="stepper-action">
            <v-btn flat @click="step = 4">Zurück</v-btn>
            <v-btn primary @click="step = 6">Abschicken</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper>
    </form>
    <div class="offer-footer">
      <small>*Gilt als Anhaltspunkt für ein Beratungsgespräch. Ersetzt nicht die schriftliche Offerte. Preisänderungen vorbehalten.</small>
    </div>
  </section>

  <section class="references">
    <h4>Referenzen</h4>
    <p>Im Folgenden finden Sie eine Auswahl an kürzlich realisierten Projekten.</p>
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
import _ from 'underscore'

export default {
  computed: {
    calculatedPrice: function () {
      _.each(this.services.advanced, function (el) {
        console.log(el)
      })
      var calculatedPrice = this.price * this.services.client.selectedSize
      if (this.services.client.nonprofit.selected) {
        calculatedPrice *= this.services.client.nonprofit.priceMultiplyer
      }

      return calculatedPrice
    }
  },
  data() {
    return {
      price: 1200,
      priceRecurringMonthly: 20,
      reference: null,

      showReferenceInput: false,
      message: null,
      email: null,
      rules: {
        required: (value) => (value === null || !!value) || this.$t('form.error.required'),
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (value === null || pattern.test(value)) || this.$t('form.error.invalidEmail')
        }
      },
      formSuccess: false,

      step: 1,
      services: {
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
              priceMultiplyer: 3
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
        advanced: {
          design: {
            label: 'Design',
            items: [{
                label: 'Webdesign',
                details: 'Unser Steckenpferd. Wir konzipieren, gestalten ihre Webseite von A-Z. Nach Wunsch erstellen wir Wireframes, Prototypen und passen den Prozess ihren Bedürfnen an. Dabei arbeiten wir in mehreren Iterationen und kreiren eine Webseite nach ihren Wünschen und Vorstellungen. Wir erstellen Farbkonzepte, Styleguides, User Interfaces, usw.',
                hint: 'Gestalung der Webseite: Struktur, Layout, Schriften, Farben',
                selected: true,
                price: 800
              },
              {
                label: 'Illustrationen',
                details: 'Wir erstellen Grafikelemente, Icons, Illustrationen und ähnliches. Wir bearbeiten Photos und verbessern Bildmaterial mithilfe von Adobe Photoshop. ',
                hint: 'Erstellen von Grafiken passend zu ihrem Inhalt.',
                selected: false,
                price: 400
              },
              {
                label: 'Stock Photos',
                details: 'Wir kümmern uns um die Suche und Erwerb geeigneter Photos um ihrer Webseite zu illustrieren.',
                hint: 'Wir suchen und erwerben passende Photos',
                selected: false,
                price: 200
              }
            ]
          },
          functionality: {
            label: 'Funktionalität',
            items: [{
                label: 'CMS',
                details: 'Sie möchten den Inhalt ihrer Webseite selbst verwalten? Kein Problem. Wir bieten Content Management System (CMS) Lösungen via <a href="https://prismic.io" target="_blank">prismic.io</a> an. Wir verknüpfen ihre Webseite für eine sichere, zuverlässige Verwaltung ihrer Inhalte.',
                hint: 'Content Management System: Verwalten sie ihre Inhalte selbst',
                selected: false,
                price: 1000
              },
              {
                label: 'Onlineshop',
                details: 'Wir integrieren Online Shops wie Shopify und ähnliche.',
                hint: 'Verkaufen sie Produkte online',
                selected: false,
                price: 1000
              },
              {
                label: 'Lokalisation',
                details: 'Haben Sie internationale Kundschaft? Wir bauen ihre Webseite nach Wunsch mehrsprachig auf. Wir übersetzen Deutsch, Englisch, Französisch, Italienisch, Polnisch.',
                hint: 'Stellen Sie ihre Webseite in mehreren Sprachen zur Verfügung',
                selected: false,
                price: 600
              },
              {
                label: 'Barrierrefreiheit +',
                details: 'Wir testen ihre Webseite mit aktuellen Validatoren für eine garantierte Barrierrefreiheit. Details: http://a11yproject.com/',
                hint: 'Garantierte Barrierrefreiheit',
                selected: false,
                price: 600
              },
              {
                label: 'Social Media',
                details: 'Wir verknüpfen ihre Webseite mit allen gängigen Social Media Platformen. Facebook, Twitter, Instagram, Tumblr',
                hint: 'Integration von Facebook, Twitter und Co.',
                selected: false,
                price: 300
              },
              {
                label: 'Interaktive Widgets',
                details: 'Ob Animation, Mini-Games oder interaktive Widgets. Der Fantasie sind keine Grenzen gesetzt.',
                hint: 'Interaktive Inhalte. Details auf Anfrage',
                price: 800
              },
              {
                label: 'Formulare',
                details: 'Wir erstellen Formulare jeglicher Art. Achtung: Wir bieten nur begrenzt server-seitige Verarbeitung der Formulardaten an. Für einfache Kontaktformulare verwenden wir die Dienstleistungen von <a href="https://formspree.io" target="_blank">Formspree</a>',
                hint: 'Formulare für Newsletter, Kontakt, Offerten, usw.',
                selected: false,
                price: 800
              },
              {
                label: 'Browsersupport +',
                details: 'Zusätzliche Unterstützung für bestimmte Browser (Versionen)',
                hint: 'Garantierte Kompatibilität für erwünschte Browser',
                selected: false,
                price: 800
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
                price: 100
              },
              {
                label: 'Persönliche Email',
                details: 'Wir stellen Email-Server zur verfügung. Falls sie über einen eigene Domain verfügen erhalten sie ihre Wunsch-Email-Adressen. Z.b. info@hansmuster.ch (via <a href="https://cyon.ch" target="_blank">cyon.ch</a>)',
                hint: 'Wir erstellen ihre Wunsch-Email-Adresse',
                selected: false,
                price: 100
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
                priceRecurringMonthly: 100
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
                priceRecurringMonthly: 200
              }
            ]
          }
        }
      },

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
        abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details for maximum customer satisfaction.',
        form: {
          email: 'Email',
          message: 'Message'
        }

      },
      de: {
        abstract: 'Wir sind spezialisiert auf Konzeption, Design und Umsetzung von Webseiten. Wir gestalten alles was der Kunde im Browser zu sehen bekommt. Wir setzen Webseiten nach einer bestehenden Vorlage um oder übernehmen Konzeption und Design von Beginn weg.',
        form: {
          email: 'E-mail',
          message: 'Bemerkungen'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "webdesign.scss"
</style>
