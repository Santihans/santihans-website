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
        <div class="price-initial">
          ab CHF <span v-text.number="offerSummary.rateInitial"></span>
        </div>
        <div class="price-recurring">
          + CHF <span v-text.number="offerSummary.rateMonthly"></span> pro Monat
        </div>
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
            <v-radio v-for="(item,i) in services.client.size" v-model="services.client.selectedSize" :key="i" :label="item.label" :hint="item.hint" persistent-hint :value="item.priceMultiplyer"></v-radio>
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
            <v-checkbox v-for="(item,i) in services.advanced.design.items" v-model="item.selected" :key="i" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
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
            <v-checkbox v-for="(item,i) in services.advanced.functionality.items" v-model="item.selected" :key="i" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
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
            <v-checkbox v-for="(item,i) in services.advanced.infrastructure.items" v-model="item.selected" :key="i" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <v-checkbox v-for="(item,i) in services.advanced.support.items" v-model="item.selected" :key="i" :label="item.label" :hint="item.hint" persistent-hint light></v-checkbox>
            <div class="stepper-action">
              <v-btn flat @click="step = 3">Zurück</v-btn>
              <v-btn primary @click="step = 5">Weiter</v-btn>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step step="5" editable>
          Zusamenfassung
        </v-stepper-step>
        <v-stepper-content step="5">
          <div class="stepper-content">
            Achtung: Sie haben "Design" ausgeschlossen. Ich verstehe dass ich die …
            <ul v-for="items in offerSummary.summary" v-if="items.hasOwnProperty('initial')">
              <li v-for="item in items">
                {{ item.label }} - ({{ item.hours }}h) - Total: {{ item.rateTotal }}
              </li>
            </ul>
            <ul v-for="items in offerSummary.summary" v-if="items.hasOwnProperty('recurring')">
              <li v-for="item in items">
                Monatliche Kosten: {{ item.label }} - {{ item.rateMonthly }}
              </li>
            </ul>
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
import Services from '~/assets/services.webdesign.js'
import Rates from '~/assets/services.rates.js'

export default {
  computed: {
    offerSummary: function () {
      var self = this
      var summary = []
      var rateInitialTotal = this.rates.base
      var rateMonthlyTotal = 0

      _.each(this.services.advanced, function (type) {
        _.each(type.items, function (item) {
          if (item.selected && item.hasOwnProperty('units')) {
            if (item.hasOwnProperty('recurringMonthly') && item.recurringMonthly) {
              summary.push({
                recurring: {
                  label: item.label,
                  rateMonthly: self.rates.monthly[item.rate] * item.units
                }
              })
              rateMonthlyTotal += self.rates.monthly[item.rate] * item.units
            } else {
              summary.push({
                initial: {
                  label: item.label,
                  hours: item.units,
                  rateHourly: self.rates.hourly[item.rate],
                  rateTotal: self.rates.hourly[item.rate] * item.units
                }
              })
              rateInitialTotal += self.rates.hourly[item.rate] * item.units
            }
          }
        })
      })

      rateInitialTotal *= this.services.client.selectedSize
      if (this.services.client.nonprofit.selected) {
        rateInitialTotal *= this.services.client.nonprofit.priceMultiplyer
      }

      return {
        rateInitial: rateInitialTotal,
        rateMonthly: rateMonthlyTotal,
        summary: summary
      }
    }
  },
  data() {
    return {
      services: Services,
      rates: Rates,

      step: 1,

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
