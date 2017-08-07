<template>
<div id="services">
  <div class="page-header">
    <h1>{{ $t('pages.services') }}</h1>
  </div>
  <v-tabs dark fixed centered>
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="(item, key, index) in items" :key="index" :href="'#tab-' + index">
        {{ item.title }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content v-for="(item, key, index) in items" :key="index" :id="'tab-' + index">
      <div class="page-content boundaries">
        <component-webdesign v-show="key === 'webdesign'"></component-webdesign>
        <component-branding v-show="key === 'branding'"></component-branding>
        <component-advertising v-show="key === 'advertising'"></component-advertising>
      </div>
    </v-tabs-content>
  </v-tabs>
</div>
</template>

<script>
import Webdesign from '~/components/webdesign.vue'
import Branding from '~/components/branding.vue'
import Advertising from '~/components/advertising.vue'

export default {
  data() {
    return {
      items: {
        webdesign: {
          title: this.$t('webdesign')
        },
        branding: {
          title: this.$t('branding')
        },
        advertising: {
          title: this.$t('advertising')
        }
      }
    }
  },
  head() {
    return {
      title: this.$t('pages.services')
    }
  },
  components: {
    'component-webdesign': Webdesign,
    'component-branding': Branding,
    'component-advertising': Advertising
  },
  i18n: {
    messages: {
      en: {
        webdesign: 'Webdesign',
        branding: 'Branding',
        advertising: 'Advertising'
      },
      de: {
        webdesign: 'Webdesign',
        branding: 'Branding',
        advertising: 'Werbung'
      }
    }
  }
}
</script>

<style lang="scss">
@import 'services.scss';
</style>
