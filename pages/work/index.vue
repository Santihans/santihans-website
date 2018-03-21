<template>
  <div id="work">
    <div class="page-header">
      <h1>{{ $t('pages.work') }}</h1>
      <clouds />
      <img class="illustration" src="~assets/images/header-store.svg" alt="Illustration">
    </div>
    <div class="page-content">
      <section class="company boundaries">
        <h2>{{ $t('work.heading') }}</h2>
        <p class="abstract">{{ $t('work.abstract') }}</p>
      </section>

      <div class="boundaries" v-for="(item) in sortedProjects(projects)" :key="item._meta.id">
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
            <nuxt-link v-ripple class="s-btn s-btn-pink" alt="Preview" :to="{ path: localePath('/work/' + `${item._meta.id}`)}">{{ $t('buttons.more') }} </nuxt-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Clouds from '@/components/clouds.vue'
import Tags from '@/components/Tags.vue'
import projectsQuery from '@/apollo/query/projects.graphql'

export default {
  components: {
    Clouds,
    Tags
  },
  head() {
    return {
      title: this.$t('pages.work')
    }
  },
  data() {
    return {
      projects: []
    }
  },
  apollo: {
    projects: {
      query: projectsQuery,
      prefetch: true
    }
  },
  methods: {
    sortedProjects: function (items) {
      const sortable = Object.keys(items).map(i => items[i])
      sortable.sort(function (a, b) {
        return b.date - a.date
      })
      return sortable
    }
  },
  i18n: {
    messages: {
      en: {
        work: {
          heading: 'Less, but better',
          abstract: 'Corporate communication is all about sending the right message to the right audience. Your brand has to tell a story. We help you tell your story.'
        },
        heading: {
          scope: 'Project Scope',
          impressions: 'Impressions'
        }
      },
      de: {
        work: {
          heading: 'Lorem i',
          abstract: 'sdf'
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
