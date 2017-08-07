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
        {{ $t('step.initial.title') }}
        <small>{{ $t('step.initial.directions') }}</small>
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
        {{ $t(`${services.advanced.design.label}`) }}
        <small>{{ $t('directions.choose') }}</small>
      </v-stepper-step>
      <v-stepper-content step="2">
        <div class="stepper-content">
          <v-checkbox v-for="(item,i) in services.advanced.design.items" v-model="item.selected" :key="i" :label="$t(`${item.label}`) + (item.hasOwnProperty('extra') ? ' (' + $t(`${item.extra}`) + ')' : '')" :hint="$t(`${item.hint}`)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn flat @click="step = 1">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 3">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="3" v-bind:complete="step > 3">
        {{ $t(`${services.advanced.functionality.label}`) }}
        <small>{{ $t('directions.choose') }}</small>
      </v-stepper-step>
      <v-stepper-content step="3">
        <div class="stepper-content">
          <v-checkbox v-for="(item,i) in services.advanced.functionality.items" v-model="item.selected" :key="i" :label="$t(`${item.label}`)" :hint="$t(`${item.hint}`)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn flat @click="step = 2">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 4">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="4" v-bind:complete="step > 4">
        {{ $t(`${services.advanced.infrastructure.label}`) }} / {{ $t(`${services.advanced.support.label}`) }}
        <small>{{ $t('directions.choose') }}</small>
      </v-stepper-step>
      <v-stepper-content step="4">
        <div class="stepper-content">
          <v-checkbox v-for="(item,i) in services.advanced.infrastructure.items" v-model="item.selected" :key="i" :label="$t(`${item.label}`)  + (item.hasOwnProperty('extra') ? ' (' + $t(`${item.extra}`) + ')' : '')" :hint="$t(`${item.hint}`)" persistent-hint light></v-checkbox>
          <v-checkbox v-for="(item,i) in services.advanced.support.items" v-model="item.selected" :key="i" :label="$t(`${item.label}`)" :hint="$t(`${item.hint}`)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn flat @click="step = 3">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 5">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="5" editable>
        {{ $t('step.summary.title') }}
      </v-stepper-step>
      <v-stepper-content step="5">
        <div class="stepper-content">
          <v-data-table class="table-offer-initial" v-bind:headers="headerInitial" :items="offerSummary.summary.initial" hide-actions>
            <template slot="items" scope="props">
              <td>{{ $t(`${props.item.label}`) }} <span v-if="props.item.hasOwnProperty('extra')">({{ $t(`${props.item.extra}`) }})</span></td>
              <td class="text-xs-right">{{ props.item.hours }}</td>
              <td class="text-xs-right">{{ props.item.rateHourly }}</td>
              <td class="text-xs-right"><span class="total">{{ props.item.rateTotal }}</span></td>
            </template>
          </v-data-table>
          <v-data-table class="table-offer-recurring" v-bind:headers="headersRecurring" :items="offerSummary.summary.recurring" hide-actions v-show="offerSummary.summary.recurring.length">
            <template slot="items" scope="props">
              <td>{{ $t(`${props.item.label}`) }}</td>
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
    <small>* {{ $t('offer.footer') }}</small>
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
        label: this.services.basic.label,
        extra: this.services.client.size[this.services.client.selectedSize].label,
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
          label: this.services.client.nonprofit.label,
          extra: '-' + this.services.client.nonprofit.discount * 100 + '%',
          rateTotal: -discount
        })
      }

      summary.initial.push({
        label: 'step.summary.total',
        rateTotal: rateInitialTotal
      })
      summary.recurring.push({
        label: 'step.summary.totalYearly',
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
          text: this.$t('headerInitial[0]'),
          align: 'left',
          sortable: false,
          value: 'label'
        },
        {
          text: this.$t('headerInitial[1]'),
          sortable: false,
          value: 'hours'
        },
        {
          text: this.$t('headerInitial[2]'),
          sortable: false,
          value: 'rateTotal'
        },
        {
          text: this.$t('headerInitial[3]'),
          sortable: false,
          value: 'rateTotal'
        }
      ],
      headersRecurring: [{
          text: this.$t('headerRecurring[0]'),
          align: 'left',
          sortable: false,
          value: 'label'
        },
        {
          text: this.$t('headerRecurring[1]'),
          sortable: false,
          value: 'units'
        },
        {
          text: this.$t('headerRecurring[2]'),
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
          startingPrice: 'starting at',
          footer: 'This interactive quote is an estimation based on past experiences. Final quote may differ. Rates may change at any time.'
        },
        step: {
          initial: {
            title: 'Project Scope',
            directions: 'Choose type of project'
          },
          summary: {
            title: 'Summary',
            total: 'Total',
            totalYearly: 'Total per year'
          }
        },
        headerInitial: [
          'Service',
          'Hours',
          'Rate/hour in CHF',
          'Total CHF'
        ],
        headerRecurring: [
          'Recurring Service',
          'Units',
          'Total CHF'
        ]
      },
      de: {
        offer: {
          heading: 'Interaktive Offerte',
          intro: 'Nimm dir 2 Minuten Zeit um eine unverbindliche Offerte zusammenzustellen.',
          startingPrice: 'ab',
          footer: 'Offerte ist eine Schätzung basierend auf Erfahrungswerte. Definitive Offerte kann abweichen. Preisänderungen vorbehalten.'
        },
        step: {
          initial: {
            title: 'Umfang der Webseite',
            directions: 'Wähle die Art des Projektes'
          },
          summary: {
            title: 'Zusammenfassung',
            total: 'Total',
            totalYearly: 'Total pro Jahr'
          }
        },
        headerInitial: [
          'Leistung',
          'Anzahl Stunden',
          'Stundenansatz CHF',
          'Total CHF'
        ],
        headerRecurring: [
          'Wiederkehrende Leistung',
          'Einheiten',
          'Total CHF'
        ]
      }
    }
  })
}
</script>

<style lang="scss">
@import "offer.scss"
</style>
