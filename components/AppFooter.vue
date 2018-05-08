<template>
  <footer id="footer">
    <div class="footer-inner boundaries">
      <component-address />
      <div>
        <menu-component :menuItems="main" class="menu-main" />
      </div>
      <div>
        <component-language />
        <menu-component :menuItems="about" class="menu-about" />
      </div>
      <menu-social />
    </div>
  </footer>
</template>

<script>
import language from '~/components/language.vue'
import address from '~/components/contactAddress.vue'
import MenuSocial from '~/components/MenuSocial.vue'
import MenuComponent from '~/components/Menu.vue'
import { main, about } from '~/assets/menus.js'

export default {
  components: {
    'component-language': language,
    'component-address': address,
    MenuSocial,
    MenuComponent
  },
  data() {
    return {
      about: about,
      main: main,
      MenuSocial
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

#footer {
  background-color: $colorNight;
  color: white;
  padding-bottom: 7vw;
  padding-top: 7vw;
  position: relative;
  @media (min-width: $breakpointMedium) {
    padding-bottom: 40px;
    padding-top: 40px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:not(.s-btn):hover {
      text-decoration: underline;
    }
  }

  .footer-inner {
    flex-wrap: wrap;

    > div {
      margin-bottom: 30px;
    }

    @media (min-width: $breakpointSmall) {
      display: flex;

      > div {
        margin-bottom: 0;
      }
    }
  }

  .contact {
    margin-right: 50px;
    line-height: 1.4;

    .icon {
      display: none;
    }
  }

  .menu-main {
    text-transform: uppercase;
    margin-right: 50px;
  }

  .menu-social {
    margin-left: auto;

    ul {
      li {
        @media (min-width: $breakpointMedium) {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
