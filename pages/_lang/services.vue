<template>
<div id="services">
  <div class="page-header">
    <h1>{{ $t('pages.services') }}</h1>
    <component-clouds />
    <img class="illustration" src="~assets/images/header-services.svg" alt="Illustration">
  </div>
  <v-tabs dark fixed centered v-model="active">
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="(item, key, index) in tabs" :key="key" :to="'#' + key" exact>
        {{ item.title }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content v-for="(item, key, index) in tabs" :key="key" :id="key">
      <div class="page-content boundaries">
        <component-webdesign v-if="key === 'webdesign'"></component-webdesign>
        <component-branding v-if="key === 'branding'"></component-branding>
        <component-advertising v-if="key === 'advertising'"></component-advertising>
      </div>
    </v-tabs-content>
  </v-tabs>
</div>
</template>

<script>
import Webdesign from '~/components/webdesign.vue'
import Branding from '~/components/branding.vue'
import Advertising from '~/components/advertising.vue'
import clouds from '~/components/clouds.vue'

export default {
  data() {
    return {
      active: null,
      tabs: {
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
  watch: {
    '$route' (to, from) {
      this.active = this.$route.hash && this.tabs.hasOwnProperty(this.$route.hash.substring(1)) ? this.$route.hash.substring(1) : 'webdesign'
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
    'component-advertising': Advertising,
    'component-clouds': clouds
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
