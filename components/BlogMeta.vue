<template>
  <div class="blog-meta">
    <span :aria-label="$t('author')" :title="$t('author')">{{ blog.author }}</span>&nbsp;|&nbsp;
    <span :aria-label="$t('date')" :title="$t('date')">{{ getMonth(blog.date) }}/{{ getYear(blog.date) }}</span>&nbsp;|&nbsp;
    <tags aria-label="Tags" title="Tags" :tags="blog.tags" />
  </div>
</template>

<script>
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Tags
  },
  props: {
    blog: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getMonth: function (timestamp) {
      let date = new Date(timestamp)
      return ('0' + (date.getMonth() + 1)).slice(-2)
    },
    getYear: function (timestamp) {
      let date = new Date(timestamp)
      return date.getFullYear()
    },
    tagList: function (data) {
      var string = String(data).replace(/,\s+/g, ',')
      return string.split(',')
    }
  },
  i18n: {
    messages: {
      en: {
        date: 'Release Date: Month/Year',
        author: 'Author'
      },
      de: {
        date: 'Erscheinungsdatum: Monat/Jahr',
        author: 'Autor'
      }
    }
  }
}
</script>

<style scoped>
.blog-meta {
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8em;
  display: flex;
}
</style>
