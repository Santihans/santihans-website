<template>
  <div id="agency">
    <page-header :title="$t('pages.agency')" backgroundImage="header-agency.svg">
      <img class="ship" src="/images/header/header-agency-ship.svg" alt="Illustration" />
    </page-header>
    <div class="page-content boundaries">

      <section class="mission section--shadow">
        <h2>{{ $t('mission.heading') }}</h2>
        <p class="abstract">{{ $t('mission.abstract') }}</p>
      </section>

      <section class="team section--shadow">
        <h2>{{ $t('team.heading') }}</h2>
        <p class="abstract">{{ $t('team.abstract') }}</p>
        <spinner v-if="loading" inline />
        <div v-else class="members grid">
          <div v-for="(item,i) in sortedTeam(team)" :key="i">

            <no-ssr>
              <div class="member-image">
                <progressive-img v-if="item.image" :src="item.image.url" :alt="item.name" />
                <progressive-img v-else :src="'/images/agency/placeholder.jpg'" alt="Placeholder" />
              </div>
            </no-ssr>
            <div class="member-name">
              {{ item.name }}
            </div>
            <div class="member-mission">
              <template v-if="$i18n.locale === 'en'">{{ item.missionEn }}</template>
              <template v-if="$i18n.locale === 'de'">{{ item.missionDe }}</template>
            </div>
            <div class="member-contacts">
              <div>
                <a v-if="item.email" :href="'mailto:' +item.email">Email</a>
              </div>
              <div>
                <a v-if="item.twitter" :href="item.twitter" target="_blank" rel="noopener">Twitter</a>
              </div>
              <div>
                <a v-if="item.linkedIn" :href="item.linkedIn" target="_blank" rel="noopener">LinkedIn</a>
              </div>
            </div>
          </div>
          <div>
            <div class="member-image">
              <no-ssr>
                <progressive-img src="/images/agency/et.svg" alt="ET" />
              </no-ssr>
            </div>
            <div class="member-name">
              {{ $t('team.et.name') }}
            </div>
            <div class="member-mission">
              {{ $t('team.et.mission') }}
            </div>
            <div class="member-contacts">
              <a href="mailto:info@santihans.com">{{ $t('team.et.contact') }}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="company section--shadow">
        <h2>{{ $t('company.heading') }}</h2>
        <p class="abstract">{{ $t('company.abstract') }}</p>
      </section>

      <section class="partner">
        <h2>{{ $t('partner.heading') }}</h2>
        <p class="abstract">{{ $t('partner.abstract') }}</p>
        <div class="partner grid">
          <div v-for="(item,i) in partner" :key="i">
            <a :href="item.web" target="_blank" rel="noopener">
              <div class="partner-logo">
                <img :src="'/images/agency/' + item.logo" :alt="item.name" />
              </div>
              <div v-if="item.hasOwnProperty('description')" class="partner-description">
                <div v-if="$i18n.locale === 'en'">{{ item.description.en }}</div>
                <div v-if="$i18n.locale === 'de'">{{ item.description.de }}</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
    <contact-us />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import Spinner from '~/components/Spinner.vue'
import teamQuery from '@/apollo/query/team.graphql'
import ContactUs from '~/components/contactUs.vue'

export default {
  head() {
    return {
      title: this.$t('pages.agency'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('company.abstract') }
      ]
    }
  },
  components: {
    PageHeader,
    Spinner,
    ContactUs
  },
  data() {
    return {
      team: [],
      loading: true,
      partner: [
        {
          logo: 'cometas.svg',
          name: 'cometas',
          web: 'http://cometas.ch',
          description: {
            de: 'Digitale Kurse, Web- und Mobile-Software.',
            en: 'Full-service agency focusing on learn apps.'
          }
        },
        {
          logo: 'atticode.svg',
          name: 'atticode',
          web: 'http://atticode.com',
          description: {
            de: 'Massgeschneiderte Softwarelösungen.',
            en: 'Tailored software solutions.'
          }
        },
        {
          logo: 'rotkopf.svg',
          name: 'Rotkopf',
          web: 'https://www.rotkopf.ch',
          description: {
            de: 'Reklame, die bewegt.',
            en: 'Advertising.'
          }
        }
        // {
        //   logo: 'taktwerk.svg',
        //   name: 'taktwerk',
        //   web: 'http://taktwerk.ch',
        //   description: {
        //     de: 'Digitalisierung für KMU aus Industrie und Bau.',
        //     en: 'Digitisation for SMEs'
        //   }
        // }
      ]
    }
  },
  apollo: {
    team: {
      query: teamQuery,
      prefetch: true,
      fetchPolicy: 'cache-and-network',
      watchLoading(isLoading, countModifier) {
        this.loading = isLoading
      }
    }
  },
  methods: {
    sortedTeam: function (items) {
      const sortable = Object.keys(items).map(i => items[i])
      const published = sortable.filter(item => item._meta.published === true)
      published.sort(function (a, b) {
        return a.date - b.date
      })
      return published
    }
  },
  i18n: {
    messages: {
      en: {
        mission: {
          heading: 'Mission',
          abstract:
            "Our mission is to produce appealing, custom-made and thought-through communication solutions for demanding customers. The company's style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique."
        },
        team: {
          heading: 'Team',
          abstract:
            'Small interdisciplinary team with magical skills and great ambition. We work without fixed structures, without office and without office hours. Instead, we follow agile product development methodologies and focus on what matters.',
          et: {
            mission: 'Whatever you do best',
            name: 'You?',
            contact: 'Apply'
          }
        },
        company: {
          heading: 'About us',
          abstract:
            'We are a design and communications agency with its main focus on outstanding web experiences.  We attach great importance to user-friendly design and strive for agile, goal-oriented working methods. "Santihans" is an old basel-german expression for "St. Johann", a district in the north of Gross-Basel with a border to France and access to the Rhine.'
        },
        partner: {
          heading: 'Partner',
          abstract: 'We work together with great companies.'
        },
        buttons: {
          website: 'Website'
        }
      },
      de: {
        mission: {
          heading: 'Mission',
          abstract:
            'Unsere Mission ist es, ansprechende, massgeschneiderte und durchdachte Kommunikationslösungen für anspruchsvolle Kunden zu entwickeln. Unser Stil folgt modernen Gestaltungsprinzipien, ist manchmal ungewöhnlich, oft minimalistisch, aber immer einzigartig.'
        },
        team: {
          heading: 'Team',
          abstract:
            'Ein kleines Team mit magischen Kräften und grossem Tatendrang. Wir arbeiten ohne starre Strukturen, ohne Büro und ohne feste Arbeitszeiten. Stattdessen folgen wir agilen Produktentwicklungsmethoden und konzentrieren uns auf das Wesentliche.',
          et: {
            mission: 'Was ist deine Leidenschaft? Wo liegt dein Talent?',
            name: 'Du?',
            contact: 'Bewirb dich'
          }
        },
        company: {
          heading: 'Über uns',
          abstract:
            'Wir sind eine Design- und Kommunikationsagentur mit Fokus auf aussergewöhnliche Web-Erlebnisse. Wir legen grossen Wert auf benutzerfreundliches Design und streben nach agilen, zielorientierten Arbeitsmethoden. "Santihans" ist ein alter, basel-deutscher Ausdruck für "St. Johann", das nördlichste Quartier in Gross-Basel an der Grenze zu Frankreich  mit Zugang zum Rhein.'
        },
        partner: {
          heading: 'Partner',
          abstract: 'Wir werden von hervorragenden Partnern unterstützt.'
        },
        buttons: {
          website: 'Webseite'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'agency.scss';
</style>
