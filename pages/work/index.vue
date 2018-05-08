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
      <div v-else class="boundaries">
        <nuxt-link class="link-box selected" v-for="(item) in sortedProjects(projects, true)" :key="item._meta.id" :to="{ path: localePath('/work/' + `${item.urlSlug}`)}" :alt="$t('buttons.more')" :style="'background-image:url('+ (item.headerImage ? item.headerImage.url : '') +');'">
          <div class="selected-inner">
            <tags :tags="item.tags" />
            <h3 class="ellipsis">{{ item.title }}</h3>
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
        </nuxt-link>

        <section class="company boundaries">
          <h2>{{ $t('more.heading') }}</h2>
          <p class="abstract">{{ $t('more.abstract') }}</p>
        </section>

        <div class="grid">
          <nuxt-link class="link-box more" v-for="(item) in sortedProjects(projects)" :key="item._meta.id" :to="{ path: localePath('/work/' + `${item.urlSlug}`)}" :alt="$t('buttons.more')">
            <div class="more-content">
              <tags :tags="item.tags" />
              <h3 class="ellipsis">{{ item.title }}</h3>
              <div class="description">
                <template v-if="$i18n.locale === 'en'">
                  {{ item.abstractEn }}
                </template>
                <template v-if="$i18n.locale === 'de'">
                  {{ item.abstractDe }}
                </template>
              </div>
            </div>
            <div class="more-image" :style="'background-image:url('+ (item.headerImage ? item.headerImage.url : '') +');'"></div>
          </nuxt-link>
        </div>
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
      title: this.$t('pages.work'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('work.abstract') }
      ]
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
    sortedProjects: function (items, selected = null) {
      let sortable = Object.keys(items).map(i => items[i])
      sortable = sortable.filter(item => item._meta.published === true)
      sortable = sortable.filter(item => item.selected === selected)
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
          heading: 'Selected Projects',
          abstract:
            'A selection of nice stuff we recently created. Our work combines great design, state of the art technology and the ambition to create next-level online experiences.'
        },
        more: {
          heading: 'There is more',
          abstract: 'Smaller projects - not less ❤.'
        },
        heading: {
          scope: 'Project Scope',
          impressions: 'Impressions'
        }
      },
      de: {
        work: {
          heading: 'Ausgewählte Projekte',
          abstract:
            'Eine Selektion aus kürzlich entstandenen Arbeiten. Unser Schaffen verbindet grossartiges Design, modernste Technologie und den Ehrgeiz, Online-Erlebnisse der nächsten Generation zu schaffen.'
        },
        more: {
          heading: 'Es gibt noch mehr',
          abstract: 'Kleinere Projekte - nicht weniger ❤.'
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
    color: inherit;
    text-decoration: none;
    overflow: hidden;
    transition: 200ms;

    &:hover {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
    }
  }

  .tags {
    font-weight: bold;
  }

  .selected {
    align-items: flex-end;
    background-position: center center;
    background-size: cover;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 60vmax;
    justify-content: center;
    margin-bottom: 5vmin;
    padding-bottom: 5vmin;
    padding-top: 5vmin;
    position: relative;

    @media screen and (min-width: $breakpointSmall) {
      height: 60vmin;
      font-size: 1.2em;
    }

    &::after {
      background-image: linear-gradient(
        to top,
        hsla(0, 0%, 0%, 0.5) 0%,
        hsla(0, 0%, 0%, 0.494) 7.7%,
        hsla(0, 0%, 0%, 0.478) 14.8%,
        hsla(0, 0%, 0%, 0.455) 21%,
        hsla(0, 0%, 0%, 0.427) 26.5%,
        hsla(0, 0%, 0%, 0.397) 31.4%,
        hsla(0, 0%, 0%, 0.366) 35.9%,
        hsla(0, 0%, 0%, 0.333) 40.1%,
        hsla(0, 0%, 0%, 0.3) 44.2%,
        hsla(0, 0%, 0%, 0.266) 48.1%,
        hsla(0, 0%, 0%, 0.233) 52%,
        hsla(0, 0%, 0%, 0.199) 56%,
        hsla(0, 0%, 0%, 0.165) 60.1%,
        hsla(0, 0%, 0%, 0.133) 64.3%,
        hsla(0, 0%, 0%, 0.101) 68.8%,
        hsla(0, 0%, 0%, 0.072) 73.7%,
        hsla(0, 0%, 0%, 0.044) 79.2%,
        hsla(0, 0%, 0%, 0.021) 85.4%,
        hsla(0, 0%, 0%, 0.005) 92.5%,
        hsla(0, 0%, 0%, 0) 100%
      );
      bottom: 0;
      content: '';
      height: 90%;
      left: 0;
      position: absolute;
      width: 100%;
    }

    .selected-inner {
      max-width: 100%;
      position: relative;
      width: 90%;
      z-index: 1;

      :not(.s-btn) {
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
      }
    }

    .tags {
      margin-bottom: 0.6em;
    }

    h3 {
      font-size: 2.2em;
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

  .grid {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr;

    @media screen and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .more {
    background-color: white;
    border: 1px solid rgb(233, 233, 233);
    display: flex;
    font-size: 0.9em;

    .more-content {
      flex-grow: 1;
      padding: 15px 15px 0;
      overflow: hidden;
    }

    .more-image {
      flex-shrink: 0;
      width: 130px;
      height: 130px;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .tags {
      color: $colorSubtle;
      font-size: 0.9em;
    }
  }
}
</style>
