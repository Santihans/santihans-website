<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <clouds />
    <div class="illustration">
      <img :src="'/images/header/' + backgroundImage" alt="Illustration" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Clouds from '@/components/Clouds.vue'
export default {
  components: {
    Clouds
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.page-header {
  background-color: black;
  background-image: url('/images/skyline-santihans.svg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-bottom: 4px solid $colorPink;
  height: 220px;
  position: relative;
  @media (min-width: $breakpointMini) {
    height: 260px;
  }
  @media (min-width: 500px) {
    height: 280px;
  }
  @media (min-width: $breakpointSmall) {
    height: 360px;
  }
  @media (min-width: $breakpointMedium) {
    height: 400px;
  }

  h1 {
    color: rgba(0, 0, 0, 0.12);
    left: 50%;
    font-size: 4em;
    opacity: 0;
    position: absolute;
    top: 40%;
    transform: translate(-50%, -100%) scale(0.5);
    transition: 200ms;

    @media (min-width: $breakpointSmall) {
      font-size: 6em;
    }

    #layout.scrollTop & {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .clouds {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .illustration {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 720px;
    max-width: 100%;
  }
}
</style>
