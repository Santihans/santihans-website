<template>
<div class="component-offer">
  <div class="offer-head">
    <h3>{{ $t('offer.heading') }}</h3>
    <p class="responsive-text">{{ $t('offer.intro') }}*</p>
    <div class="price">
      <div class="price-initial">
        {{ $t('offer.startingPrice') }} CHF <span v-text.number="offerSummary.rateInitial + offerSummary.rateYearly"></span>
      </div>
    </div>
  </div>
  <form method="POST" v-on:submit.prevent="onSubmit">
    <v-stepper v-model="step" vertical>
      <v-stepper-step step="0" v-bind:complete="step > 0">
        {{ $t(services.basic.label) }}
      </v-stepper-step>

      <v-stepper-step step="1" v-bind:complete="step > 1">
        {{ $t('step.1.title') }}
        <small>{{ $t('step.1.directions') }}</small>
      </v-stepper-step>
      <v-stepper-content step="1">
        <div class="stepper-content">
          <v-radio v-for="(value, key, index) in services.client.size" v-model="services.client.selectedSize" :key="index" :label="$t(`${value.label}`)" :hint="$t(`${value.hint}`)" persistent-hint :value="key"></v-radio>
          <v-checkbox :label="$t(services.client.nonprofit.label)" v-model="services.client.nonprofit.selected" :hint="$t(services.client.nonprofit.hint)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn primary @click="step = 2">{{ $t('buttons.continue') }}</v-btn>
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
            <v-btn flat @click="step = 1">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 3">{{ $t('buttons.continue') }}</v-btn>
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
            <v-btn flat @click="step = 2">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 4">{{ $t('buttons.continue') }}</v-btn>
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
            <v-btn flat @click="step = 3">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 5">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="5">
        Zusamenfassung
      </v-stepper-step>
      <v-stepper-content step="5">
        <div class="stepper-content">
          <v-data-table class="table-offer-initial" v-bind:headers="headerInitial" :items="offerSummary.summary.initial" hide-actions>
            <template slot="items" scope="props">
              <td>{{ props.item.label }}</td>
              <td class="text-xs-right">{{ props.item.hours }}</td>
              <td class="text-xs-right">{{ props.item.rateHourly }}</td>
              <td class="text-xs-right"><span class="total">{{ props.item.rateTotal }}</span></td>
            </template>
          </v-data-table>
          <v-data-table class="table-offer-recurring" v-bind:headers="headersRecurring" :items="offerSummary.summary.recurring" hide-actions v-show="offerSummary.summary.recurring.length">
            <template slot="items" scope="props">
              <td>{{ props.item.label }}</td>
              <td class="text-xs-right">{{ props.item.units }}</td>
              <td class="text-xs-right"><span class="total">{{ props.item.rateYearly }}</span></td>
            </template>
          </v-data-table>
        </div>
        <div class="stepper-action">
          <v-btn flat @click="step = 4">{{ $t('buttons.back') }}</v-btn>
          <v-btn primary @click="step = 6">{{ $t('buttons.sendRequest') }}</v-btn>
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
import { services, messages } from '~/assets/services.webdesign.js'
import Rates from '~/assets/services.rates.js'
var extend = require('node.extend')

export default {
  computed: {
    offerSummary: function () {
      var self = this
      var summary = {}
      var rateInitialTotal = this.rates.base
      var multiplyer = this.services.client.size[this.services.client.selectedSize].priceMultiplyer
      var rateYearlyTotal = 0

      summary.initial = [{
        label: this.services.basic.label + ' (' + this.services.client.size[this.services.client.selectedSize].label + ')',
        rateTotal: rateInitialTotal * multiplyer
      }]
      summary.recurring = []

      _.each(this.services.advanced, function (type) {
        _.each(type.items, function (item) {
          if (item.selected && item.hasOwnProperty('units') && item.hasOwnProperty('rate')) {
            if (item.hasOwnProperty('recurringYearly') && item.recurringYearly) {
              summary.recurring.push({
                label: item.label,
                units: item.units,
                rateYearly: self.rates.yearly[item.rate] * item.units
              })
              rateYearlyTotal += self.rates.yearly[item.rate] * item.units
            } else {
              summary.initial.push({
                label: item.label,
                hours: item.units * multiplyer,
                rateHourly: self.rates.hourly[item.rate],
                rateTotal: self.rates.hourly[item.rate] * item.units * multiplyer
              })
              rateInitialTotal += self.rates.hourly[item.rate] * item.units
            }
          }
        })
      })

      rateInitialTotal *= multiplyer
      if (this.services.client.nonprofit.selected) {
        var discount = rateInitialTotal * this.services.client.nonprofit.discount
        rateInitialTotal -= discount
        summary.initial.push({
          label: this.services.client.nonprofit.label + ' (-' + this.services.client.nonprofit.discount * 100 + '%)',
          rateTotal: -discount
        })
      }

      summary.initial.push({
        label: 'Total',
        rateTotal: rateInitialTotal
      })
      summary.recurring.push({
        label: 'Total pro Jahr',
        rateYearly: rateYearlyTotal
      })

      return {
        rateInitial: rateInitialTotal,
        rateYearly: rateYearlyTotal,
        summary: summary
      }
    }
  },
  data() {
    return {
      services: services,
      rates: Rates,
      step: 1,
      headerInitial: [{
          text: 'Leistung',
          align: 'left',
          sortable: false,
          value: 'label'
        },
        {
          text: 'Anzahl Stunden',
          sortable: false,
          value: 'hours'
        },
        {
          text: 'Stundenansatz CHF',
          sortable: false,
          value: 'rateTotal'
        },
        {
          text: 'Total CHF',
          sortable: false,
          value: 'rateTotal'
        }
      ],
      headersRecurring: [{
          text: 'Wiederkehrende Leistung',
          align: 'left',
          sortable: false,
          value: 'label'
        },
        {
          text: 'Einheiten',
          sortable: false,
          value: 'units'
        },
        {
          text: 'Total CHF',
          sortable: false,
          value: 'rateYearly'
        }
      ]
    }
  },
  i18n: extend(true, {}, messages, {
    messages: {
      en: {
        offer: {
          heading: 'Instant Quote',
          intro: 'Use our interactive widget and get a quote in just 2 minutes',
          startingPrice: 'starting at'
        },
        step: {
          1: {
            title: 'Scope',
            directions: 'Choose type of project'
          }
        }

      },
      de: {
        offer: {
          heading: 'Interaktive Offerte',
          intro: 'Nimm dir 2 Minuten Zeit um eine unverbindliche Offerte zusammenzustellen.',
          startingPrice: 'ab'
        },
        step: {
          1: {
            title: 'Umfang der Webseite',
            directions: 'Wähle die Art des Projektes'
          }
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import "offer.scss"
</style>
