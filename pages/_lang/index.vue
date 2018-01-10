<template>
  <div id="index">
    <component-wallpaper></component-wallpaper>
    <div class="illustration-webdesign">
      <div class="illustration">
        <img src="~assets/images/webdesign.svg" alt="Illustration">
        <img class="arrow" src="~assets/images/arrow.svg" alt="Illustration">
      </div>
    </div>
    <section id="sectionWebDesign" class="service-webdesign boundaries">
      <h2>{{ $t('webdesign.headline') }}</h2>
      <p class="abstract">{{ $t('webdesign.abstract') }}</p>
      <div>
        <v-btn large color="primary" :to="localePath('/services')">{{ $t('more') }}</v-btn>
      </div>
      <div>
        <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
      </div>
    </section>

    <div class="illustration-branding"></div>

    <section class="service-branding boundaries">
      <div class="illustration">
        <img src="~assets/images/branding.svg" alt="Illustration">
        <component-watch/>
      </div>
      <h2>{{ $t('branding.headline') }}</h2>
      <p class="abstract">{{ $t('branding.abstract') }}</p>
      <div>
        <v-btn large color="primary" :to="localePath('/services#branding')">{{ $t('more') }}</v-btn>
      </div>
      <div>
        <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
      </div>
    </section>

    <div class="illustration-advertising">
      <component-clouds/>
      <img class="illustration" src="~assets/images/communications.svg" alt="Illustration">
      <component-zeppelin/>
    </div>

    <section class="advertising boundaries">
      <h2>{{ $t('advertising.headline') }}</h2>
      <p class="abstract">{{ $t('advertising.abstract') }}</p>
      <div>
        <v-btn large color="primary" :to="localePath('/services#advertising')">{{ $t('more') }}</v-btn>
      </div>
      <div>
        <v-btn flat large :to="localePath('/contact')">{{ $t('contact') }}</v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import wallpaper from '~/components/wallpaper.vue'
import watch from '~/components/watch.vue'
import clouds from '~/components/clouds.vue'
import zeppelin from '~/components/zeppelin.vue'

export default {
  name: 'HomePage',
  components: {
    'component-wallpaper': wallpaper,
    'component-watch': watch,
    'component-clouds': clouds,
    'component-zeppelin': zeppelin
  },
  scrollToTop: true,
  head() {
    return {
      title: this.$t('pages.home')
    }
  },
  i18n: {
    messages: {
      en: {
        more: 'Learn more',
        contact: 'Contact us',
        webdesign: {
          headline: 'Stunning Web Design',
          abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We care about the details so you don\'t have to.'
        },
        branding: {
          headline: 'Iconic Branding',
          abstract: 'We develop corporate identitiy solutions that perfectly represent the values of your organisation. We make sure you leave your customers with a lasting positive impression.'
        },
        advertising: {
          headline: 'Smart Advertising',
          abstract: 'We help you aquire new customers with targeted creative advertising. We create everything from ad campaigns to print products like business cards and packaging solutions.'
        }
      },
      de: {
        more: 'Mehr Erfahren',
        contact: 'Kontakt',
        webdesign: {
          headline: 'Fabelhafte Webseiten',
          abstract: 'Santihans erstellt enspruchsvolle Webapplikationen mit Fokus auf individuellem Design und benutzerfreundlichen User-Interfaces. Dabei setzen wir stets auf neuste Technologien und passen uns bestehenden Back-Ends an.'
        },
        branding: {
          headline: 'Individuelle Marken',
          abstract: 'Hinterlasse einen bleibenden Eindruck! Santihans entwickelt Marken-Idenditäten für deine Organisation oder dein Projekt. Schwerpunkt sind schlichte, wiedererkennbare und einzigartige Logo-Designs.'
        },
        advertising: {
          headline: 'Wirksame Werbung',
          abstract: 'Erweitere deine Kundschaft mithilfe kreativer Werbemassnahmen. Santihans erarbeitet digitale Werbekampagnen nach deinen Wünschen und Vorstellungen.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
