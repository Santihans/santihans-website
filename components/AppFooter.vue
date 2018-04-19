<template>
  <footer id="footer">
    <div class="footer-inner boundaries">
      <component-address />
      <div>
        <component-language />
        <nav class="menu-about">
          <ul>
            <li v-for="(item, i) in about" :key="'about-' + i">
              <nuxt-link v-if="item.path" v-ripple :to="localePath(`${item.path}`)">
                {{ $t(`${item.label}`) }}
              </nuxt-link>
              <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.label">{{ $t(`${item.label}`) }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu-social">
        <ul>
          <li v-for="(item, i) in social" :key="i">
            <a :href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import language from '~/components/language.vue'
import address from '~/components/contactAddress.vue'
import { about, social } from '~/assets/menus.js'

export default {
  components: {
    'component-language': language,
    'component-address': address
  },
  data() {
    return {
      about: about,
      social: social
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

    i {
      display: none;
    }
  }

  .menu-about {
    ul {
      list-style-type: none;
    }
  }

  .menu-social {
    margin-left: auto;

    ul {
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      line-height: 1.4;
      list-style-type: none;

      li {
        @media (min-width: $breakpointMedium) {
          display: inline;
          margin-right: 10px;
        }
      }
    }
  }
}

</style>
