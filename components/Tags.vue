<template>
  <ul v-if="tags" class="tags">
    <li v-for="(tag, i) in tagList(tags)" :key="i">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: String,
      default: ''
    }
  },
  methods: {
    tagList: function (data) {
      var string = String(data).replace(/\s+/g, '')
      return string.split(',')
    }
  }
}
</script>

<style lang="scss">
.tags {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  li {
    display: inline;
    margin-right: 5px;

    &::before {
      content: '#';
      opacity: 0.4;
      font-size: 0.8em;
      font-weight: lighter;
      margin-right: 2px;
    }
  }
}
</style>
