<template>
  <div id="header">
    <div class="header-background"></div>
    <div class="header-navigation boundaries">
      <nuxt-link v-ripple class="logo" alt="Home Page" :to="localePath('/')">
        <img src="/images/logo-white.svg" alt="SANTiHANS Logo">
        <div class="beta">
          beta
        </div>
      </nuxt-link>
      <ul class="header-navigation-menu">
        <nuxt-link v-for="(item, index) in main" :key="index" v-if="index !== 0 && index !==2" v-ripple tag="li" :to="localePath(`${item.path}`)">
          <a>{{ $t(`${item.label}`) }}</a>
        </nuxt-link>
      </ul>
      <a href="javascript:;" class="link-menu" @click.stop="openNavigation()" role="navigation">
        Menu
      </a>
    </div>
  </div>
</template>

<script>
import { main } from '~/assets/menus.js'
export default {
  data() {
    return {
      main: main,
      openNavigation: function () {
        this.$emit('navigation', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

#header {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  left: 0;
  height: $headerHeight;
  position: fixed;
  top: 0;
  transition: box-shadow 200ms 800ms;
  width: 100%;
  z-index: 2;

  .header-background {
    background-color: $navigationColorBg;
    height: 100%;
    position: absolute;
    transform: translateY(0);
    transition: 400ms 400ms;
    width: 100%;
  }

  #layout.scrollTopExtendend & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    transition: none;

    .header-background {
      transform: translateY(-100%);
      transition: none;
      background-color: transparent;
    }
  }

  .header-navigation {
    height: $headerHeight;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 0;
    position: relative;
    @media (min-width: $breakpointSmall) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    @media (min-width: $breakpointMedium) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  .logo {
    display: block;
    margin-right: auto;
    position: relative;
    width: 160px;

    .beta {
      background-color: $colorFg;
      color: $colorBg;
      bottom: 5px;
      font-size: 0.7em;
      font-weight: bold;
      left: 100%;
      padding: 0 4px;
      position: absolute;
    }
  }
}

.header-navigation-menu {
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (min-width: 700px) {
    display: flex;
    font-size: 1.2em;
  }

  li {
    border-top: 2px solid transparent;

    &.nuxt-link-active {
      border-top-color: rgba(255, 255, 255, 0.5);
    }

    a {
      color: white;
      display: block;
      padding: 12px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}

.link-menu {
  color: white;
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 2px;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
