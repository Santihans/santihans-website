<template>
  <svg class="icon" :style="{width: size, height: size}">
    <use :xlink:href="`/icons/orion-svg-sprite.svg#${name}-1`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'heart'
    },
    size: {
      type: String,
      default: '20px'
    }
  }
}
</script>

<style scoped>

</style>
