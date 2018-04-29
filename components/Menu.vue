<template>
  <nav class="s-menu" :class="menuClass">
    <ul>
      <li v-for="(item, i) in menuItems" :key="i">
        <nuxt-link v-if="item.path" v-ripple :to="localePath(`${item.path}`)">
          {{ $t(`${item.label}`) }}
        </nuxt-link>
        <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.label">{{ $t(`${item.label}`) }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Object,
      default: null
    },
    menuClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.s-menu ul {
  list-style-type: none;
}
</style>
