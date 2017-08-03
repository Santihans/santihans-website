<template>
<div>
  <div class="page-header">
    <h1>{{ $t('pages.services') }}</h1>
  </div>
  <v-tabs dark fixed centered>
    <v-tabs-bar slot="activators">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item v-for="i in items" :key="i" :href="'#tab-' + items.indexOf(i)">
        {{ i.title }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content v-for="i in items" :key="i" :id="'tab-' + items.indexOf(i)">
      <section class="page-content boundaries">
        <h2>{{ i.title }}</h2>
        <component-webdesign v-show="i.id === 'webdesign'"></component-webdesign>
        <div>
          <v-btn primary large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
        </div>
      </section>
    </v-tabs-content>
  </v-tabs>

</div>
</template>

<script>
import Webdesign from '~/components/webdesign.vue'

export default {
  data() {
    return {
      items: [{
          id: 'webdesign',
          title: this.$t('webdesign')
        },
        {
          id: 'branding',
          title: this.$t('branding')
        },
        {
          id: 'advertising',
          title: this.$t('advertising')
        }
      ]
    }
  },
  head() {
    return {
      title: this.$t('pages.services')
    }
  },
  components: {
    'component-webdesign': Webdesign
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

<style lang="scss" scoped>
@import 'services.scss';
</style>
