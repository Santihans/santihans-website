<template>
<div id="work" @keyup.esc="[handleDialogVisibility(), $router.push(localePath('/work'))]">
  <div class="page-header">
    <h1>{{ $t('pages.work') }}</h1>
    <component-clouds />
    <img class="illustration" src="~assets/images/header-work.svg" alt="Illustration">
  </div>
  <div class="page-content boundaries">
    <section class="portfolio">
      <v-layout wrap>
        <v-flex xs6 sm4 v-for="(item, key, index) in portfolio" :key="key">
          <v-dialog lazy fullscreen hide-overlay v-model="item.dialog" class="portfolio-dialog" width="800" content-class="dialog-custom dialog-custom--portfolio">
            <nuxt-link class="portfolio-link" v-ripple slot="activator" alt="Preview" :to="{ path: localePath('/work') + '#' + `${key}`}">
              <v-card>
                <img :src="'/images/work/' + key + '/thumb.png'" alt="Preview">
                <div class="project">
                  <div class="name">{{ item.name }}</div>
                  <ul class="tags">
                    <li v-for="item in item.tags">{{ item }}</li>
                  </ul>
                </div>
              </v-card>
            </nuxt-link>
            <div class="dialog-header" :style="{'background-color': item.details.colorBg}">
              <div class="boundaries">
                <v-btn icon large class="btn-close" @click="[item.dialog=false, $router.push(localePath('/work'))]">
                  <v-icon>close</v-icon>
                </v-btn>
                <h3 :style=" { 'color': item.details.colorFg} ">{{ item.name }}</h3>
                <p class="abstract " :style="{ 'color': item.details.colorFg} ">
                  {{ $t(`${item.details.abstract}`) }}
                </p>
                <div v-if="item.details.hasOwnProperty( 'website') " class="text-xs-center ">
                  <v-btn flat outline dark :style="{ 'color': item.details.colorFg} " :href="item.details.website " target="_blank ">{{ $t('buttons.visitWebsite') }}</v-btn>
                </div>
              </div>
            </div>
            <div class="dialog-content boundaries ">
              <div v-if="item.details.hasOwnProperty( 'scope') " class="scope ">
                <h4>{{ $t('heading.scope') }}</h4>
                <ul>
                  <li v-for="(item, key) in item.details.scope ">
                    <span v-if="key=='webdesign' ">{{ $t('service.webdesign') }}</span>
                    <span v-if="key=='branding' ">{{ $t('service.branding') }}</span>
                    <span v-if="key=='advertising' ">{{ $t('service.advertising') }}</span>: {{ $t(`${item}`) }}</li>
                </ul>
              </div>
              <h4>{{ $t('heading.impressions') }}</h4>
              <figure class="image " v-for="image in item.details.images ">
                <img :src=" '/images/work/' + key + '/' + image.src " :alt="image.caption ">
                <figcaption v-if="$i18n.locale === 'en'" class="image-caption ">{{ image.caption.en }}</figcaption>
                <figcaption v-if="$i18n.locale === 'de'" class="image-caption ">{{ image.caption.de }}</figcaption>
              </figure>
              <div class="dialog-footer ">
                <v-btn primary @click="[item.dialog=false, $router.push(localePath('/work'))]">{{ $t('buttons.close' )}}</v-btn>
              </div>
            </div>
          </v-dialog>
        </v-flex>
      </v-layout>
    </section>
  </div>
</div>
</template>

<script>
import _ from 'underscore'
import clouds from '~/components/clouds.vue'
import { portfolio, messages } from '~/assets/work.portfolio.js'
var extend = require('node.extend')

export default {
  components: {
    'component-clouds': clouds
  },
  head() {
    return {
      title: this.$t('pages.work')
    }
  },
  data() {
    return {
      portfolio: portfolio
    }
  },
  methods: {
    handleDialogVisibility: function () {
      var openDialog = this.$route.hash ? this.$route.hash.slice(1) : false
      var self = this
      if (openDialog) {
        _.defer(function () {
          self.portfolio[openDialog].dialog = true
        })
      } else {
        _.defer(function () {
          _.each(self.portfolio, function (item) {
            item.dialog = false
          })
        })
      }
    }
  },
  created() {
    this.handleDialogVisibility()
  },
  watch: {
    '$route': 'handleDialogVisibility'
  },
  i18n: extend(true, {}, messages, {
    messages: {
      en: {
        heading: {
          scope: 'Project Scope',
          impressions: 'Impressions'
        }
      },
      de: {
        heading: {
          scope: 'Projektumfang',
          impressions: 'Impressionen'
        }
      }
    }
  })
}
</script>

<style lang="scss">
@import 'work.scss';
</style>
