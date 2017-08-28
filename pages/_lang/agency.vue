<template>
<div id="agency">
  <div class="page-header">
    <h1>{{ $t('pages.agency') }}</h1>
    <component-clouds />
    <div class="illustration">
      <img src="~assets/images/header-agency.svg" alt="Illustration">
      <img class="ship" src="~assets/images/header-agency-ship.svg" alt="Illustration">
    </div>
  </div>
  <div class="page-content boundaries">
    <section class="company section--shadow">
      <h2>{{ $t('company.heading') }}</h2>
      <p class="abstract">{{ $t('company.abstract') }}</p>
    </section>

    <section class="team section--shadow">
      <h2>{{ $t('team.heading') }}</h2>
      <p class="abstract">{{ $t('team.abstract') }}</p>
      <v-layout class="members" wrap justify-center>
        <v-flex xs6 sm3 v-for="(item,i) in team" :key="i">
          <div class="member-thumb">
            <img :src="'/images/agency/' +item.thumb" alt="Photo">
          </div>
          <div class="member-name">
            {{ item.name }}
          </div>
          <div class="member-position">
            {{ item.position }}
          </div>
          <div class="member-contacts">
            <div v-for="item in item.contacts">
              <a :href="item.url" target="_blank">{{ item.label }}</a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section class="mission">
      <h2>{{ $t('mission.heading') }}</h2>
      <p class="abstract">{{ $t('mission.abstract') }}</p>
    </section>
  </div>
</div>
</template>

<script>
import Clouds from '~/components/clouds.vue'

export default {
  head() {
    return {
      title: this.$t('pages.agency')
    }
  },
  data() {
    return {
      team: [{
          thumb: 'christophe.jpg',
          position: 'Founder, Designer, Web Enthusiast',
          name: 'Christophe',
          contacts: [{
              label: 'Email',
              url: 'mailto:info@santihans.com'
            },
            {
              label: 'Twitter',
              url: 'https://twitter.com/stophecom'
            },
            {
              label: 'Facebook',
              url: 'https://www.facebook.com/christopheschwyzer'
            }
          ]
        },
        {
          thumb: 'remo.jpg',
          position: 'Consultant Strategy & Finance',
          name: 'Remo'
        },
        {
          thumb: 'david.jpg',
          position: 'Consultant Graphic Design',
          name: 'David',
          contacts: [{
            label: 'Facebook',
            url: 'https://www.facebook.com/david.steiner.986'
          }]
        },
        {
          thumb: 'team-placeholder.svg',
          position: this.$t('team.apply.position'),
          name: this.$t('team.apply.name'),
          contacts: [{
            label: this.$t('team.apply.contact'),
            url: 'mailto:info@santihans.com'
          }]
        }
      ]
    }
  },
  components: {
    'component-clouds': Clouds
  },
  i18n: {
    messages: {
      en: {
        company: {
          heading: 'About us',
          abstract: 'Santihans is a design and communications agency with its main focus on web design, branding and advertising. "Santihans" is an old basel-german expression for "St. Johann", a district in the north of Gross-Basel with a border to France and access to the Rhine.'
        },
        team: {
          heading: 'Team',
          abstract: 'Tiny team with magical skills and great ambition. We work without fixed structures, without office and without office hours. Instead, we use the possibilities of the Internet, work remotely, communicate and collaborate online. (We meet to celebrate though.)',
          apply: {
            position: 'Whatever you do best',
            name: 'You?',
            contact: 'Apply'
          }
        },
        mission: {
          heading: 'Mission',
          abstract: 'Santihans produces appealing, custom-made and thought-through communication solutions for demanding customers. The company\'s style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique.'
        }
      },
      de: {
        company: {
          heading: 'Über uns',
          abstract: 'Santihans ist eine Design- und Kommunikationsagentur mit Fokus auf Webdesign, Markengestaltung und Werbung. "Santihans" ist ein alter, basel-deutscher Ausdruck für "St. Johann", das nördlichste Quartier in Gross-Basel an der Grenze zu Frankreich  und mit Zugang zum Rhein.'
        },
        team: {
          heading: 'Team',
          abstract: 'Ein kleines Team mit magischen Kräften und grossem Tatendrang. Wir arbeiten ohne starre Strukturen, ohne Büro und ohne Bürozeiten. Wir nutzen die Möglichkeiten des Internets, arbeiten remote, kommunizieren und kollaborieren online. (Wir treffen uns zum feiern.)',
          apply: {
            position: 'Wo dein Talent liegt',
            name: 'Du?',
            contact: 'Bewirb dich'
          }
        },
        mission: {
          heading: 'Mission',
          abstract: 'Die Agentur produziert ansprechende, handgemachte und durchdachte Kommunikationslösungen für anspruchsvolle Kunden. Santihans’ Stil folgt modernen Design-Prinzipien, ist manchmal ungewöhnlich, oft minimalistisch, aber immer einzigartig.'
        }

      }
    }
  }
}
</script>

<style lang="scss">
@import "agency.scss";
</style>
