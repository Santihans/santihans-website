<template>
  <div class="entry">
    <div v-if="blog">
      <div class="blog-header" :style="'background-image:url('+ (blog.headerImage ? blog.headerImage.url : '') +');'">
        <div class="boundaries">
          <div class="head">
            <div>
              <span class="label">Blog</span>
            </div>
            <div class="head-content">
              <h1 v-if="$i18n.locale === 'en'">{{ blog.titleEn }}</h1>
              <h1 v-if="$i18n.locale === 'de'">{{ blog.titleDe }}</h1>
              <blog-meta :blog=blog />
            </div>
          </div>
        </div>
      </div>
      <div class="blog-content boundaries">
        <nuxt-link class="link-back" :to="{ path: localePath('/blog')}" :alt="$t('buttons.back')" v-text="'< ' + $t('buttons.backToOverview')"></nuxt-link>
        <article>
          <Markdown class="markdown" :markdown="blog.bodyEn" v-if="$i18n.locale === 'en'" />
          <Markdown class="markdown" :markdown="blog.bodyDe" v-if="$i18n.locale === 'de'" />
        </article>
        <no-ssr>
          <disqus shortname="santihans" :identifier="blog._meta.id" :url="'https://santihans.com/blog/' + blog.urlSlug"></disqus>
        </no-ssr>
      </div>
    </div>
    <section class="loading" v-else>
      <spinner />
    </section>

    <newsletter />
  </div>
</template>

<script>
import blogQuery from '@/apollo/query/blog.graphql'
import Markdown from '~/components/Markdown.vue'
import Spinner from '~/components/Spinner.vue'
import Newsletter from '~/components/Newsletter.vue'
import BlogMeta from '~/components/BlogMeta.vue'
import Disqus from 'vue-disqus/dist/vue-disqus.vue'

export default {
  components: {
    Markdown,
    Spinner,
    Newsletter,
    BlogMeta,
    Disqus
  },
  computed: {
    blog() {
      const slug = this.$route.params.entry
      return this.blogEntries.find(a => a.urlSlug === slug) || false
    }
  },
  head() {
    return {
      title: this.$i18n.locale === 'de' ? this.blog.titleDe : this.blog.titleEn,
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.locale === 'de' ? this.blog.abstractDe : this.blog.abstractEn }
      ]
    }
  },
  data() {
    return {
      blogEntries: []
    }
  },
  apollo: {
    blogEntries: {
      query: blogQuery,
      prefetch: true
    }
  },
  watch: {
    '$route.params.entry'(curr, old) {
      // disqus does not properly reload just based off the
      // disqusId computed property - we need to manually change it
      // when we know it should update
      this.$refs.disqus.init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.entry {
  &::after {
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0.22) 0%,
      hsla(0, 0%, 0%, 0.217) 7.7%,
      hsla(0, 0%, 0%, 0.21) 14.8%,
      hsla(0, 0%, 0%, 0.2) 21%,
      hsla(0, 0%, 0%, 0.188) 26.5%,
      hsla(0, 0%, 0%, 0.175) 31.4%,
      hsla(0, 0%, 0%, 0.161) 35.9%,
      hsla(0, 0%, 0%, 0.147) 40.1%,
      hsla(0, 0%, 0%, 0.132) 44.2%,
      hsla(0, 0%, 0%, 0.117) 48.1%,
      hsla(0, 0%, 0%, 0.102) 52%,
      hsla(0, 0%, 0%, 0.087) 56%,
      hsla(0, 0%, 0%, 0.073) 60.1%,
      hsla(0, 0%, 0%, 0.058) 64.3%,
      hsla(0, 0%, 0%, 0.045) 68.8%,
      hsla(0, 0%, 0%, 0.032) 73.7%,
      hsla(0, 0%, 0%, 0.019) 79.2%,
      hsla(0, 0%, 0%, 0.009) 85.4%,
      hsla(0, 0%, 0%, 0.002) 92.5%,
      hsla(0, 0%, 0%, 0) 100%
    );
    top: 0;
    content: '';
    height: $headerHeight + 70px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .blog-header {
    background-size: cover;
    background-position: center;
    color: white;
    height: 45vh;
    min-height: 200px;
    padding-bottom: 1em;
    position: relative;

    &::after {
      background-image: linear-gradient(
        to top,
        hsla(0, 0%, 0%, 0.22) 0%,
        hsla(0, 0%, 0%, 0.217) 7.7%,
        hsla(0, 0%, 0%, 0.21) 14.8%,
        hsla(0, 0%, 0%, 0.2) 21%,
        hsla(0, 0%, 0%, 0.188) 26.5%,
        hsla(0, 0%, 0%, 0.175) 31.4%,
        hsla(0, 0%, 0%, 0.161) 35.9%,
        hsla(0, 0%, 0%, 0.147) 40.1%,
        hsla(0, 0%, 0%, 0.132) 44.2%,
        hsla(0, 0%, 0%, 0.117) 48.1%,
        hsla(0, 0%, 0%, 0.102) 52%,
        hsla(0, 0%, 0%, 0.087) 56%,
        hsla(0, 0%, 0%, 0.073) 60.1%,
        hsla(0, 0%, 0%, 0.058) 64.3%,
        hsla(0, 0%, 0%, 0.045) 68.8%,
        hsla(0, 0%, 0%, 0.032) 73.7%,
        hsla(0, 0%, 0%, 0.019) 79.2%,
        hsla(0, 0%, 0%, 0.009) 85.4%,
        hsla(0, 0%, 0%, 0.002) 92.5%,
        hsla(0, 0%, 0%, 0) 100%
      );
      bottom: 0;
      content: '';
      height: $headerHeight + 120px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    > div {
      display: flex;
      height: 100%;
      justify-content: flex-end;
      flex-direction: column;
      padding-bottom: 5px;
      position: relative;
      z-index: 1;
    }

    .head {
      @media (min-width: $breakpointSmall) {
        display: flex;
      }

      .label {
        background-color: $colorPink;
        color: white;
        display: inline-block;
        flex-grow: 0;
        font-size: 0.8em;
        font-weight: bold;
        margin-bottom: 4px;
        padding: 2px 6px;
        text-transform: uppercase;

        @media (min-width: $breakpointSmall) {
          font-size: 0.9em;
          margin: 0.7em 12px 0 0;
          padding: 4px 8px;
        }
      }

      .head-content {
        flex-grow: 1;

        h1 {
          text-shadow: 1px 1px 4px hsla(0, 0%, 0%, 0.19);
          font-size: 2.6em;
          line-height: 1.05;

          @media screen and (min-width: $breakpointMini) {
            font-size: 3.2em;
          }

          @media screen and (min-width: $breakpointSmall) {
            font-size: 4.2em;
          }
        }
        .blog-meta {
          font-weight: bold;
        }
      }
    }
  }

  .blog-content {
    padding-top: 2em;

    .link-back {
      color: inherit;
    }
  }

  .loading {
    min-height: 80vh;
  }
}
</style>
