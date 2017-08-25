<template>
<div class="component-quote-branding">
  <div class="offer-head">
    <h3>{{ $t('offer.heading') }}</h3>
    <p class="abstract">{{ $t('offer.intro') }}*</p>
    <div class="price">
      <div class="price-initial">
        {{ $t('offer.startingPrice') }} CHF <span v-text.number="offerSummary.rateInitial"></span>
      </div>
    </div>
  </div>
  <div class="offer-body">
    <v-stepper v-model="step" vertical>
      <v-stepper-step step="1" v-bind:complete="step > 1">
        {{ $t(`${services.client.label}`) }}
        <small>{{ $t(`${services.client.hint}`) }}</small>
      </v-stepper-step>
      <v-stepper-content step="1">
        <div class="stepper-content">
          <v-radio v-for="(value, key, index) in services.client.size" v-model="services.client.selectedSize" :key="index" :label="$t(`${value.label}`)" :hint="$t(`${value.hint}`)" persistent-hint :value="key"></v-radio>
          <v-checkbox :label="$t(services.client.nameExists.label)" v-model="services.client.nameExists.selected" :hint="$t(services.client.nameExists.hint)" persistent-hint light></v-checkbox>
          <v-checkbox :label="$t(services.client.nonprofit.label)" v-model="services.client.nonprofit.selected" :hint="$t(services.client.nonprofit.hint)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn primary @click="step = 2">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="2" v-bind:complete="step > 2">
        {{ $t(`${services.advanced.name.label}`) }}
        <small>{{ $t('directions.choose') }}</small>
      </v-stepper-step>
      <v-stepper-content step="2">
        <div class="stepper-content">
          <v-checkbox v-for="(item,i) in services.advanced.name.items" v-if="!(services.client.nameExists.selected && `services.client.nameExists.selected` === `${item.hidden}`)" v-model="item.selected " :key="i " :label="$t(`${item.label}`) " :hint="$t(`${item.hint}`) "
            persistent-hint light></v-checkbox>
          <div class="stepper-action ">
            <v-btn flat @click="step=1 ">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step=3 ">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="3 " v-bind:complete="step> 3"> {{ $t(`${services.advanced.design.label}`) }}
        <small>{{ $t('directions.choose') }}</small>
      </v-stepper-step>
      <v-stepper-content step="3">
        <div class="stepper-content">
          <v-checkbox v-for="(item,i) in services.advanced.design.items" v-model="item.selected" :key="i" :label="$t(`${item.label}`) + (item.hasOwnProperty('extra') ? ' (' + $t(`${item.extra}`) + ')' : '')" :hint="$t(`${item.hint}`)" persistent-hint light></v-checkbox>
          <div class="stepper-action">
            <v-btn flat @click="step = 2">{{ $t('buttons.back') }}</v-btn>
            <v-btn primary @click="step = 4">{{ $t('buttons.continue') }}</v-btn>
          </div>
        </div>
      </v-stepper-content>

      <v-stepper-step step="4">
        {{ $t('step.summary.title') }}
      </v-stepper-step>
      <v-stepper-content step="4">
        <div class="stepper-content summary">
          <div class="summary-meta print-only" aria-hidden="true">
            <img class="logo" src="~assets/images/logo.svg" alt="Santihans Logo">
            <component-address :showPhone="false" :showCountry="false" />
            <div class="date">
              Basel, <time>{{ currentDate }}</time>
            </div>
            <h4>{{ $t('offer.headingPrint') }}</h4>
          </div>
          <v-data-table class="table-offer-initial" v-bind:headers="headerInitial" :items="offerSummary.summary" hide-actions>
            <template slot="items" scope="props">
              <td>{{ props.item.label }} <span v-if="props.item.hasOwnProperty('extra')">({{ props.item.extra }})</span></td>
              <td class="text-xs-right">{{ props.item.hours }}</td>
              <td class="text-xs-right">{{ props.item.rateHourly }}</td>
              <td class="text-xs-right"><span class="total">{{ props.item.rateTotal }}</span></td>
            </template>
          </v-data-table>
          <div class="summary-legal print-only" aria-hidden="true">
            <div class="abstract">
              <small>* {{ $t('offer.footer') }}</small>
            </div>
          </div>
        </div>
        <div class="stepper-action">
          <v-btn class="btn-print" flat @click="printSummary()">{{ $t('buttons.print' )}}</v-btn>
          <v-btn flat @click="step = 3">{{ $t('buttons.back') }}</v-btn>

          <v-dialog v-model="dialog" width="600" content-class="dialog-custom">
            <v-btn primary slot="activator">{{ $t('buttons.sendRequest') }}</v-btn>
            <h3 v-show="formSuccess">{{ $t('success.heading') }}</h3>
            <component-contact-form :title="$t('contactTitle')" subject="Santihans Branding Quote" :quote="offerSummary" @success="formPostSuccess">
              <v-btn flat @click="dialog = false">{{ $t('buttons.close' )}}</v-btn>
            </component-contact-form>
            <div class="dialog-custom-footer" v-show="formSuccess">
              <v-btn class="btn-print" flat @click="printSummary()">{{ $t('success.buttons.print' )}}</v-btn>
              <v-btn primary @click="dialog = false">{{ $t('buttons.close' )}}</v-btn>
            </div>
          </v-dialog>
        </div>
      </v-stepper-content>
    </v-stepper>
  </div>
  <div class="offer-footer">
    <small>* {{ $t('offer.footer') }}</small>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import _ from 'underscore'
import { services, messages } from '~/assets/services.branding.js'
import Rates from '~/assets/services.rates.js'
import address from '~/components/contactAddress.vue'
import contactForm from '~/components/contactForm.vue'
var extend = require('node.extend')

export default {
  components: {
    'component-contact-form': contactForm,
    'component-address': address
  },
  data() {
    return {
      services: services,
      rates: Rates,
      step: 1,
      dialog: false,
      formSuccess: false,
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
      ]
    }
  },
  methods: {
    formPostSuccess: function () {
      this.formSuccess = true
    },
    printSummary: function () {
      var $html = $(this.$el).find('.summary')
      var w = window.open()
      $.get('/styles/print-quote.css', function (response) {
        var styles = $('<style>')
        styles.html(response)
        $html.prepend(styles)
      }).then(function () {
        w.document.write($html[0].outerHTML)
        _.delay(function () {
          w.print()
          w.close()
        }, 200)
      })
    }
  },
  computed: {
    currentDate: function () {
      var date = new Date()
      return date.toLocaleDateString('de-DE')
    },
    offerSummary: function () {
      var self = this
      var summary = []
      var rateInitialTotal = this.rates.base.branding
      var multiplyer = this.services.client.size[this.services.client.selectedSize].priceMultiplyer

      summary = [{
        label: this.$t(this.services.client.label),
        extra: this.$t(this.services.client.size[this.services.client.selectedSize].label)
      }]

      _.each(this.services.advanced, function (type) {
        _.each(type.items, function (item) {
          if (item.selected && item.hasOwnProperty('units') && item.hasOwnProperty('rate')) {
            summary.push({
              label: self.$t(item.label),
              hours: item.units * multiplyer,
              rateHourly: self.rates.hourly[item.rate],
              rateTotal: self.rates.hourly[item.rate] * item.units * multiplyer
            })
            rateInitialTotal += self.rates.hourly[item.rate] * item.units
          }
        })
      })

      rateInitialTotal *= multiplyer
      if (this.services.client.nonprofit.selected) {
        var discount = rateInitialTotal * this.services.client.nonprofit.discount
        rateInitialTotal -= discount
        summary.push({
          label: this.$t(this.services.client.nonprofit.label),
          extra: '-' + this.services.client.nonprofit.discount * 100 + '%',
          rateTotal: -discount
        })
      }

      summary.push({
        label: this.$t('step.summary.total'),
        rateTotal: rateInitialTotal
      })

      return {
        rateInitial: rateInitialTotal,
        summary: summary
      }
    }
  },
  i18n: extend(true, {}, messages, {
    messages: {
      en: {
        offer: {
          heading: 'Instant Quote',
          headingPrint: 'Provisional Quote',
          intro: 'Use our interactive widget and get a quote in just 2 minutes',
          startingPrice: 'starting at',
          footer: 'This interactive quote is an estimation based on past experiences. Final quote may differ. Rates may change at any time.'
        },
        step: {
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
        contactTitle: 'Send request',
        success: {
          heading: 'Thank You',
          buttons: {
            print: 'Print Quote'
          }
        }
      },
      de: {
        offer: {
          heading: 'Interaktive Offerte',
          headingPrint: 'Provisorische Offerte',
          intro: 'Nimm dir 2 Minuten Zeit um eine unverbindliche Offerte zusammenzustellen.',
          startingPrice: 'ab',
          footer: 'Offerte ist eine Schätzung basierend auf Erfahrungswerten. Definitive Offerte kann abweichen. Preisänderungen vorbehalten.'
        },
        step: {
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
        contactTitle: 'Anfrage senden',
        success: {
          heading: 'Vielen Dank',
          buttons: {
            print: 'Offerte drucken'
          }
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import "quoteBranding.scss";
</style>
