<template>
  <div id="work">
    <page-header :title="$t('pages.work')" backgroundImage="header-store.svg"></page-header>

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
          <div class="work" :style="'background-image:url('+ (item.headerImage ? item.headerImage.url : '') +');'">
            <div class="work-inner">
              <tags :tags="item.tags" />
              <h2>{{ item.title }}</h2>
              <div class="description">
                <template v-if="$i18n.locale === 'en'">
                  {{ item.abstractEn }}
                </template>
                <template v-if="$i18n.locale === 'de'">
                  {{ item.abstractDe }}
                </template>
              </div>
              <span v-ripple class="s-btn s-btn-pink">{{ $t('buttons.more') }} </span>
            </div>
          </div>
        </nuxt-link>
      </div>
      <contact-us/>

    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Spinner from '@/components/Spinner.vue'
import Tags from '@/components/Tags.vue'
import projectsQuery from '@/apollo/query/projects.graphql'
import ContactUs from '~/components/contactUs.vue'

export default {
  components: {
    PageHeader,
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
@import '~assets/styles/variables.scss';

#work {
  .page-header {
    background-color: $colorViolett;

    .clouds svg g {
      fill: lighten($colorViolett, 8);
    }
  }

  .loading {
    position: relative;
  }

  .link-box {
    display: block;
    text-decoration: none;
  }

  .work {
    align-items: flex-end;
    background-position: center center;
    background-size: cover;
    color: white;
    display: flex;
    height: 60vmax;
    justify-content: center;
    padding-bottom: 3vmin;
    padding-top: 3vmin;
    position: relative;
    margin-bottom: 5vmin;

    @media screen and (min-width: $breakpointSmall) {
      height: 60vmin;
    }

    &::after {
      background-image: linear-gradient(
        to top,
        hsla(0, 0%, 0%, 0.41) 0%,
        hsla(0, 0%, 0%, 0.405) 7.7%,
        hsla(0, 0%, 0%, 0.392) 14.8%,
        hsla(0, 0%, 0%, 0.373) 21%,
        hsla(0, 0%, 0%, 0.35) 26.5%,
        hsla(0, 0%, 0%, 0.326) 31.4%,
        hsla(0, 0%, 0%, 0.3) 35.9%,
        hsla(0, 0%, 0%, 0.273) 40.1%,
        hsla(0, 0%, 0%, 0.246) 44.2%,
        hsla(0, 0%, 0%, 0.218) 48.1%,
        hsla(0, 0%, 0%, 0.191) 52%,
        hsla(0, 0%, 0%, 0.163) 56%,
        hsla(0, 0%, 0%, 0.135) 60.1%,
        hsla(0, 0%, 0%, 0.109) 64.3%,
        hsla(0, 0%, 0%, 0.083) 68.8%,
        hsla(0, 0%, 0%, 0.059) 73.7%,
        hsla(0, 0%, 0%, 0.036) 79.2%,
        hsla(0, 0%, 0%, 0.018) 85.4%,
        hsla(0, 0%, 0%, 0.005) 92.5%,
        hsla(0, 0%, 0%, 0) 100%
      );
      bottom: 0;
      content: '';
      height: 80%;
      left: 0;
      position: absolute;
      width: 100%;
    }

    .work-inner {
      font-size: 1.2em;
      max-width: 100%;
      position: relative;
      width: 90%;
      z-index: 1;
    }

    :not(.s-btn) {
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    h2 {
      font-size: 1.6em;
      line-height: 1;

      @media screen and (min-width: $breakpointSmall) {
        font-size: 3em;
      }
    }

    .description {
      margin-bottom: 1em;
    }

    .s-btn {
      margin: 0;
    }
  }

  .tags {
    font-weight: bold;
    margin-bottom: 1em;
  }
}
</style>
