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

      <section class="mission section--shadow">
        <h2>{{ $t('mission.heading') }}</h2>
        <p class="abstract">{{ $t('mission.abstract') }}</p>
      </section>

      <section class="team section--shadow">
        <h2>{{ $t('team.heading') }}</h2>
        <p class="abstract">{{ $t('team.abstract') }}</p>
        <v-layout class="members" wrap justify-center>
          <v-flex xs6 sm4 v-for="(item,i) in team" :key="i">
            <div class="member-thumb">
              <img v-if="item.thumb" :src="'/images/agency/' +item.thumb" alt="Photo">
              <img v-else :src="'/images/agency/placeholder.jpg'" alt="Placeholder">
            </div>
            <div class="member-name">
              {{ item.name }}
            </div>
            <div class="member-position">
              {{ item.position }}
            </div>
            <div class="member-contacts">
              <div v-for="(item, i) in item.contacts" :key="'contact-' + i">
                <a :href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </section>

      <section class="company section--shadow">
        <h2>{{ $t('company.heading') }}</h2>
        <p class="abstract">{{ $t('company.abstract') }}</p>
      </section>

      <section class="partner">
        <h2>{{ $t('partner.heading') }}</h2>
        <p class="abstract">{{ $t('partner.abstract') }}</p>
        <v-layout class="partner" wrap justify-center>
          <v-flex xs6 sm3 v-for="(item,i) in partner" :key="i">
            <div class="partner-logo">
              <img :src="'/images/agency/' + item.logo" :alt="item.name">
            </div>
            <div v-if="item.hasOwnProperty('description')" class="partner-description">
              <div v-if="$i18n.locale === 'en'">{{ item.description.en }}</div>
              <div v-if="$i18n.locale === 'de'">{{ item.description.de }}</div>
            </div>
            <a class="s-btn s-btn-transparent" :href="item.web" target="_blank" rel="noopener">{{ $t('buttons.website') }}</a>
          </v-flex>
        </v-layout>
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
      team: {
        christophe: {
          thumb: 'christophe.jpg',
          position: this.$t('team.christophe.position'),
          name: 'Christophe',
          contacts: [
            {
              label: 'Email',
              url: 'mailto:christophe@santihans.com'
            },
            {
              label: 'Twitter',
              url: 'https://twitter.com/stophecom'
            },
            {
              label: 'Linkedin',
              url: 'https://www.linkedin.com/in/christophe-schwyzer-19b9193b/'
            }
          ]
        },
        nicolas: {
          thumb: 'nicolas.jpg',
          position: this.$t('team.nicolas.position'),
          name: 'Nicolas',
          contacts: [
            {
              label: 'Email',
              url: 'mailto:nicolas@santihans.com'
            },
            {
              label: 'Twitter',
              url: 'https://twitter.com/NicolasSchmutz'
            },
            {
              label: 'Linkedin',
              url: 'https://www.linkedin.com/in/nicolasschmutz/'
            }
          ]
        },
        tomasz: {
          position: this.$t('team.tomasz.position'),
          name: 'Tomasz',
          contacts: [
            {
              label: 'Linkedin',
              url: 'https://www.linkedin.com/in/tomaszdurka/'
            }
          ]

        },
        david: {
          // thumb: 'david.jpg',
          position: this.$t('team.david.position'),
          name: 'David'
        },
        et: {
          thumb: 'et.svg',
          position: this.$t('team.et.position'),
          name: this.$t('team.et.name'),
          contacts: [
            {
              label: this.$t('team.et.contact'),
              url: 'mailto:info@santihans.com'
            }
          ]
        }
      },
      partner: [
        {
          logo: 'cometas.svg',
          name: 'cometas',
          web: 'http://cometas.ch',
          description: {
            de: 'Digitale Kurse, Web- und Mobile-Software.',
            en: 'Full-service agency focusing on learn apps.'
          }
        }
        // {
        //   logo: 'taktwerk.svg',
        //   name: 'taktwerk',
        //   web: 'http://taktwerk.ch',
        //   description: 'Digitalisierung für KMU aus Industrie und Bau.'
        // }
      ]
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
          abstract:
            "Our mission is to produce appealing, custom-made and thought-through communication solutions for demanding customers. The company's style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique."
        },
        team: {
          heading: 'Team',
          abstract:
            'Small interdisciplinary team with magical skills and great ambition. We work without fixed structures, without office and without office hours. Instead, we follow agile product development methodologies and focus on what matters.',
          christophe: {
            position: 'Dad, Founder, Creative Director'
          },
          nicolas: {
            position: 'Partner, Product manager, Runner'
          },
          tomasz: {
            position: 'Consultant (Backend) Web Development'
          },
          david: {
            position: 'Consultant Graphic Design'
          },
          et: {
            position: 'Whatever you do best',
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
          christophe: {
            position: 'Papa, Gründer, Creative Director'
          },
          nicolas: {
            position: 'Partner, Produktmanager, Läufer'
          },
          tomasz: {
            position: 'Beratung (Backend-)Webentwicklung'
          },
          david: {
            position: 'Grafikdesign Freelancer'
          },
          et: {
            position: 'Was ist deine Leidenschaft? Wo liegt dein Talent?',
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
