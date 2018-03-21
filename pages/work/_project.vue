<template>
  <div id="showcase">
    <div class="fixed-header">
      <div class="showcase-header" :style="'background-image:url('+ (project.headerImage ? project.headerImage.url : '') +');'">
        <div class="inner">
          <div>
            <div class="label">Showcase</div>
            <h1>{{ project.title }}</h1>
          </div>
          <div class="abstract">
            <template v-if="$i18n.locale === 'en'">
              {{ project.abstractEn }}
            </template>
            <template v-if="$i18n.locale === 'de'">
              {{ project.abstractDe }}
            </template>
          </div>
        </div>
        <scroll-indicator class="more" />
      </div>
    </div>
    <div class="page-content">
      <section class="showcase-details boundaries">
        <div class="actions boundaries">
          <a v-if="project.website" class="s-btn s-btn-pink" :href="project.website" rel="noopener" target="_blank">{{ $t('buttons.visitWebsite') }}</a>
        </div>
        <h2>{{ project.title }}</h2>
        <div class="meta">
          <span :aria-label="$t('year')" :title="$t('year')">{{ getYear(project.date) }}</span>&nbsp;|&nbsp;
          <span :aria-label="$t('client')" :title="$t('client')">{{ project.client }}</span>&nbsp;|&nbsp;
          <tags aria-label="Tags" title="Tags" :tags="project.tags" />
        </div>
        <p class="intro">
          <template v-if="$i18n.locale === 'en'">
            {{ project.introEn }}
          </template>
          <template v-if="$i18n.locale === 'de'">
            {{ project.introDe }}
          </template>
        </p>
        <figure class="intro-image">
          <img v-if="project.introImage" :src="project.introImage.url" alt="Intro">
        </figure>
        <Markdown class="markdown" :markdown="project.bodyEn" v-if="$i18n.locale === 'en'" />
        <Markdown class="markdown" :markdown="project.bodyDe" v-if="$i18n.locale === 'de'" />

      </section>
      <div class="boundaries boundaries--xl">
        <no-ssr>
          <carousel :perPage=1 autoplay :autoplayTimeout=5000>
            <slide v-for="image in imageList()" :key="image.id">
              <div class="slide">
                <img :src="image.url" :alt="image.name">
              </div>
            </slide>
          </carousel>
        </no-ssr>
      </div>

    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import projectsQuery from '@/apollo/query/projects.graphql'
import Markdown from '~/components/Markdown.vue'
import ScrollIndicator from '~/components/scrollIndicator.vue'
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Carousel,
    Slide,
    Markdown,
    ScrollIndicator,
    Tags
  },
  computed: {
    project() {
      const slug = this.$route.params.project
      return this.projects.find(a => a.urlSlug === slug) || {}
    }
  },
  data() {
    return {
      projects: []
    }

  },
  head() {
    return {
      title: this.project.title
    }
  },
  apollo: {
    projects: {
      query: projectsQuery,
      prefetch: true
    }
  },
  methods: {
    getYear: function (timestamp) {
      let date = new Date(timestamp)
      return date.getFullYear()
    },
    tagList: function (data) {
      var string = String(data).replace(/,\s+/g, ',')
      return string.split(',')
    },
    imageList: function () {
      let images = [this.project.slideshow_1, this.project.slideshow_2, this.project.slideshow_3]
      let imagesList = []
      images.forEach(function (element) {
        if (element) {
          imagesList.push(element)
        }
      })
      return imagesList
    }
  },
  i18n: {
    messages: {
      en: {
        client: 'Client',
        year: 'Year'
      },
      de: {
        client: 'Kunde',
        year: 'Jahr'
      }
    }
  }
}
</script>

<style lang="scss">
@import '_project.scss';
</style>
