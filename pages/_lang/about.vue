<template>
<div id="about">
  <div class="page-header">
    <h1>{{ $t('pages.about') }}</h1>
  </div>
  <section class="page-content boundaries">
    <section class="mission">
      <h2>{{ $t('mission.heading') }}</h2>
      <p class="abstract">{{ $t('mission.abstract') }}</p>
    </section>
    <section class="team">
      <h2>{{ $t('team.heading') }}</h2>
      <p class="abstract">{{ $t('team.abstract') }}</p>
    </section>
  </section>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.about')
    }
  },
  i18n: {
    messages: {
      en: {
        mission: {
          heading: 'Mission Statement',
          abstract: 'Santihans is a design and communications agency with its main focus on web design, branding and advertising. The company produces appealing, custom-made and thought-through communication solutions for demanding customers. Santihans’ style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique.'
        },
        team: {
          heading: 'Team',
          abstract: 'Tiny team with magical skills and great ambition. Sounds like you? Contact us!'
        }
      },
      de: {
        mission: {
          heading: 'Mission',
          abstract: 'Santihans ist eine Design- und Kommunikationsagentur mit Fokus auf Webdesign, Markengestaltung und Werbung. Die Agentur produziert ansprechende, handgemachte und durchdachte Kommunikationslösungen für anspruchsvolle Kunden. Santihans’ Stil folgt modernen Design-Prinzipien, ist manchmal ungewöhnlich, oft minimalistisch, aber immer einzigartig.'
        },
        team: {
          heading: 'Team',
          abstract: 'Ein kleines Team mit magischen Kräften und grossem Tatendrang. Trifft auch auf dich zu? Melde dich!'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "about.scss";
</style>
