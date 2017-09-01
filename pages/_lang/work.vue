<template>
<div id="work" @keyup.esc="dialog=false">
  <div class="page-header">
    <h1>{{ $t('pages.work') }}</h1>
    <component-clouds />
    <img class="illustration" src="~assets/images/header-work.svg" alt="Illustration">
  </div>
  <div class="page-content boundaries">
    <section class="portfolio">
      <v-layout wrap>
        <v-flex xs6 sm4 v-for="(item,i) in portfolio" :key="i">
          <v-dialog class="portfolio-dialog" v-model="dialog" width="600" content-class="dialog-custom">
            <nuxt-link class="portfolio-link" v-ripple slot="activator" alt="Preview" :to="{ path: localePath('/work')}">
              <v-card>
                <img :src="'/images/work/' + item.id + '/thumb.png'" alt="Preview">
                <div class="project">
                  <div class="name">{{ item.name }}</div>
                  <ul class="tags">
                    <li v-for="item in item.tags">{{ item }}</li>
                  </ul>
                </div>
              </v-card>
            </nuxt-link>
            <div class="dialog-custom-footer">
              <v-btn primary @click="dialog = false">{{ $t('buttons.close' )}}</v-btn>
            </div>
          </v-dialog>
        </v-flex>
      </v-layout>
    </section>
  </div>
</div>
</template>

<script>
import clouds from '~/components/clouds.vue'

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
      dialog: false,
      portfolio: [{
          id: 'denkmal',
          name: 'Denkmal.org',
          tags: ['webdesign', 'branding', 'advertising'],
          abstract: 'Denkmal.org is a nightlife-calendar by locals',
          details: {}
        },
        {
          id: 'cargomedia',
          name: 'Cargo Media AG',
          tags: ['webdesign', 'branding'],
          abstract: 'Corporate Identity, Website and more.',
          details: {}
        },
        {
          id: 'frontale',
          name: 'Frontâle Festival',
          tags: ['webdesign', 'branding', 'advertising'],
          abstract: 'Corporate Identity, Website and more.',
          details: {}
        },
        {
          id: 'gundelistreetteam',
          name: 'Gundeli Street Team',
          tags: ['branding', 'merchandise'],
          abstract: 'Logo, Running Community',
          details: {}
        },
        {
          id: 'brigittehenke',
          name: 'Brigitte Henke',
          tags: ['webdesign', 'cms'],
          abstract: 'Personal Portfolio Website',
          details: {}
        },
        {
          id: 'kingchiller',
          name: 'Kingchiller',
          tags: ['branding'],
          abstract: 'Fun Project',
          details: {}
        },
        {
          id: 'marguerite',
          name: 'Marguerite',
          tags: ['illustration'],
          abstract: 'Fun Project',
          details: {}
        },
        {
          id: 'art44',
          name: 'art44',
          tags: ['branding'],
          abstract: 'Corporate Identity',
          details: {}
        }
      ]
    }
  },
  i18n: {
    messages: {
      en: {
        portfolio: {

        }
      },
      de: {
        portfolio: {}
      }
    }
  }
}
</script>

<style lang="scss">
@import 'work.scss';
</style>
