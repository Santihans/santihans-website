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
        <v-btn large color="primary" :to="localePath('/work')">{{ $t('more') }}</v-btn>
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
        <v-btn large color="primary" :to="localePath('/work')">{{ $t('more') }}</v-btn>
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
        <v-btn large color="primary" :to="localePath('/work')">{{ $t('more') }}</v-btn>
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
          headline: 'Web Experiences',
          abstract: 'We create individual handcrafted communication solutions. Our websites are well designed, fast and accessible. We anticipate your customers\' needs to build next-level user interfaces.'
        },
        branding: {
          headline: 'Corporate Identity',
          abstract: 'We develop corporate identity solutions that perfectly represent the values of your organisation. We make sure you leave your customers with a lasting positive impression.'
        },
        advertising: {
          headline: 'Snappy Communications',
          abstract: 'Spread your message and increase brand awareness! We help you communicate with your target audience by developing new communication assets.'
        }
      },
      de: {
        more: 'Mehr Erfahren',
        contact: 'Kontakt',
        webdesign: {
          headline: 'Premium Webseiten',
          abstract: 'Wir erstellen anspruchsvolle Webanwendungen mit Fokus auf individuellem Design und benutzerfreundlichen User-Interfaces. Dabei setzen wir stets auf neueste Technologien und passen uns bestehenden Back-Ends an.'
        },
        branding: {
          headline: 'Corporate Identity',
          abstract: 'Hinterlasse einen bleibenden Eindruck! Wir entwerfen Marken-Identitäten für deine Organisation oder dein Projekt. Schwerpunkt sind schlichte, wiedererkennbare und einzigartige Designs.'
        },
        advertising: {
          headline: 'Bissige Kommunikation',
          abstract: 'Erreiche deine Kundschaft und steigere die Bekanntheit deiner Marke. Wir erarbeiten individuelle Kommunikationslösungen und Werbekampagnen die bewegen.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
