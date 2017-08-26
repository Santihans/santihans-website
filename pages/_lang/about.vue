<template>
<div id="about">
  <div class="page-header">
    <h1>{{ $t('pages.about') }}</h1>
    <component-clouds />
    <div class="illustration">
      <img src="~assets/images/header-about.svg" alt="Illustration">
      <img class="ship" src="~assets/images/header-about-ship.svg" alt="Illustration">
    </div>
  </div>
  <div class="page-content boundaries">
    <section class="mission section--shadow">
      <h2>{{ $t('mission.heading') }}</h2>
      <p class="abstract">{{ $t('mission.abstract') }}</p>
    </section>
    <section class="team section--shadow">
      <h2>{{ $t('team.heading') }}</h2>
      <p class="abstract">{{ $t('team.abstract') }}</p>
    </section>
    <section class="name">
      <h2>{{ $t('name.heading') }}</h2>
      <p class="abstract">{{ $t('name.abstract') }}</p>
    </section>
  </div>
</div>
</template>

<script>
import Clouds from '~/components/clouds.vue'

export default {
  head() {
    return {
      title: this.$t('pages.about')
    }
  },
  components: {
    'component-clouds': Clouds
  },
  i18n: {
    messages: {
      en: {
        mission: {
          heading: 'Mission',
          abstract: 'Santihans is a design and communications agency with its main focus on web design, branding and advertising. The company produces appealing, custom-made and thought-through communication solutions for demanding customers. Santihans’ style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique.'
        },
        team: {
          heading: 'Team',
          abstract: 'Tiny team with magical skills and great ambition. Want to be part of it? Contact us!'
        },
        name: {
          heading: 'Name',
          abstract: 'Santihans is an old basel-german expression for "St. johann", a district in the north of Gross-Basel with a border to France and access to the Rhine. '
        }
      },
      de: {
        mission: {
          heading: 'Mission',
          abstract: 'Santihans ist eine Design- und Kommunikationsagentur mit Fokus auf Webdesign, Markengestaltung und Werbung. Die Agentur produziert ansprechende, handgemachte und durchdachte Kommunikationslösungen für anspruchsvolle Kunden. Santihans’ Stil folgt modernen Design-Prinzipien, ist manchmal ungewöhnlich, oft minimalistisch, aber immer einzigartig.'
        },
        team: {
          heading: 'Team',
          abstract: 'Ein kleines Team mit magischen Kräften und grossem Tatendrang. Möchtest du dabei sein? Melde dich!'
        },
        name: {
          heading: 'Name',
          abstract: 'Santihans ist ein alter basel-deutscher Ausdruck für "St. johann", das nördlichste Quartier in Gross-Basel an der Grenze zu Frankreich  und mit Zugang zum Rhein.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "about.scss";
</style>
