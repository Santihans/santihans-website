<template>
  <div id="blog">
    <page-header :title="$t('pages.blog')" backgroundImage="header-blog.svg"></page-header>
    <div class="page-content boundaries">
      <section class="news section--shadow">
        <h2>{{ $t('news.heading') }}</h2>
        <p class="abstract">{{ $t('news.abstract') }}</p>
      </section>
      <section class="loading" v-if="loading">
        <spinner />
      </section>
      <div v-else v-for="(item) in sortedblogEntries(blogEntries)" :key="item._meta.id">
        <nuxt-link class="link-box" :to="{ path: localePath('/blog/' + `${item.urlSlug}`)}" :alt="$t('buttons.more')">
          <div class="blog">
            <div class="blog-image">
              <img :src="item.headerImage.url + '?w=200'" :alt="item.titleEn">
            </div>
            <div class="blog-content">
              <blog-meta :blog=item />
              <h3 v-text="item.titleEn" v-if="$i18n.locale === 'en'" />
              <h3 v-text="item.titleDe" v-if="$i18n.locale === 'de'" />
              <p>
                <template v-if="$i18n.locale === 'en'">{{ item.abstractEn }}</template>
                <template v-if="$i18n.locale === 'de'">{{ item.abstractDe }}</template>
                <span class="more">{{ $t('buttons.more') }}</span>
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Spinner from '@/components/Spinner.vue'
import blogQuery from '@/apollo/query/blog.graphql'
import BlogMeta from '~/components/BlogMeta.vue'

export default {
  components: {
    PageHeader,
    BlogMeta,
    Spinner
  },
  head() {
    return {
      title: this.$t('pages.work')
    }
  },
  data() {
    return {
      blogEntries: [],
      loading: true
    }
  },
  apollo: {
    blogEntries: {
      query: blogQuery,
      prefetch: true,
      fetchPolicy: 'cache-and-network',
      watchLoading(isLoading, countModifier) {
        this.loading = isLoading
      }
    }
  },
  methods: {
    sortedblogEntries: function (items) {
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
        news: {
          heading: 'Latest News',
          abstract:
            'Insights from our staff. Mainly about agency life, design, technology and company culture.'
        }
      },
      de: {
        news: {
          heading: 'Neuigkeiten',
          abstract:
            'Einblicke in unsere Agentur. Themen sind Design, Technologie und Agenturleben.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

#blog {
  .page-header {
    background-color: $colorNightBlue;

    .clouds svg g {
      fill: lighten($colorNightBlue, 8);
    }
  }

  .page-content {
    padding-bottom: 5em;
  }

  .loading {
    position: relative;
  }

  .link-box {
    color: inherit;
    display: block;
    text-decoration: none;

    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
  }

  .blog {
    display: flex;

    .blog-image {
      flex: 0 0 80px;

      @media screen and (min-width: $breakpointSmall) {
        flex-basis: 120px;
      }
    }

    .blog-content {
      flex-grow: 1;
      padding: 5px 20px;
    }

    .more {
      text-decoration: underline;
    }
  }
}
</style>
