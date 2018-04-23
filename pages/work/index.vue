<template>
  <div id="work">
    <div class="page-header">
      <h1>{{ $t('pages.work') }}</h1>
      <clouds />
      <img class="illustration" src="/images/header-store.svg" alt="Illustration" />
    </div>
    <div class="page-content">
      <section class="company boundaries">
        <h2>{{ $t('work.heading') }}</h2>
        <p class="abstract">{{ $t('work.abstract') }}</p>
      </section>
      <section class="loading" v-if="loading">
        <spinner />
      </section>
      <div v-else class="boundaries" v-for="(item) in sortedProjects(projects)" :key="item._meta.id">
        <nuxt-link class="link-box" :to="{ path: localePath('/work/' + `${item.urlSlug}`)}" :alt="$t('buttons.more')">
          <section class="work" :style="'background-image:url('+ (item.headerImage ? item.headerImage.url : '') +');'">
            <div class="work-inner">

              <h2>{{ item.title }}</h2>
              <div class="abstract">
                <template v-if="$i18n.locale === 'en'">
                  {{ item.abstractEn }}
                </template>
                <template v-if="$i18n.locale === 'de'">
                  {{ item.abstractDe }}
                </template>
              </div>

              <tags :tags="item.tags" />
              <span v-ripple class="s-btn s-btn-pink">{{ $t('buttons.more') }} </span>
            </div>
          </section>
        </nuxt-link>
      </div>
      <contact-us/>

    </div>
  </div>
</template>

<script>
import Clouds from '@/components/clouds.vue'
import Spinner from '@/components/Spinner.vue'
import Tags from '@/components/Tags.vue'
import projectsQuery from '@/apollo/query/projects.graphql'
import ContactUs from '~/components/contactUs.vue'

export default {
  components: {
    Clouds,
    Tags,
    Spinner,
    ContactUs
  },
  head() {
    return {
      title: this.$t('pages.work')
    }
  },
  data() {
    return {
      projects: [],
      loading: true
    }
  },
  apollo: {
    projects: {
      query: projectsQuery,
      prefetch: true,
      fetchPolicy: 'cache-and-network',
      watchLoading(isLoading, countModifier) {
        this.loading = isLoading
      }
    }
  },
  methods: {
    sortedProjects: function (items) {
      const sortable = Object.keys(items).map(i => items[i])
      const published = sortable.filter(item => item._meta.published === true)
      published.sort(function (a, b) {
        return b.date - a.date
      })
      return published
    }
  },
  i18n: {
    messages: {
      en: {
        work: {
          heading: 'Recent Highlights',
          abstract:
            'Our cross-functional, agile team creates custom communications solutions for demanding clients in a variety of fields.'
        },
        heading: {
          scope: 'Project Scope',
          impressions: 'Impressions'
        }
      },
      de: {
        work: {
          heading: 'Aktuelle Highlights',
          abstract:
            'Unser funktionsübergreifendes, agiles Team entwickelt massgeschneiderte Kommunikationslösungen für anspruchsvolle Kunden aus den unterschiedlichsten Bereichen.'
        },
        heading: {
          scope: 'Projektumfang',
          impressions: 'Impressionen'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';
</style>
