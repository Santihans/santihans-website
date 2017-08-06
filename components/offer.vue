<template>
<div class="component-offer">
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
          <hr>
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
      step: 1
    }
  }
}
</script>

<style lang="scss">
@import "offer.scss"
</style>
