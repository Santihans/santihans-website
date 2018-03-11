<template>
  <aside id="navigation">
    <div class="navigation">
      <nav class="home">
        <nuxt-link class="emblem" :to="localePath('/')" :title="$t(`${main[0].label}`)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 353">
            <rect x="199.62" y="213.56" width="121.69" height="121.69" />
            <polygon points="127.28 335.25 174.9 335.25 174.9 91.83 127.28 141.22 127.28 335.25" />
            <polygon points="127.28 17.75 127.28 116.53 174.9 67.14 174.9 17.75 127.28 17.75" />
            <path d="M65.56,188.48,28.7,213.74V335.25H53.37V300a12.19,12.19,0,0,1,12.19-12.19h0A12.19,12.19,0,0,1,77.75,300v35.28h24.67V213.74Z" />
          </svg>
        </nuxt-link>
      </nav>
      <nav class="main">
        <ul>
          <li v-for="(item, i) in main.slice(1)" :key="'main-' + i">
            <nuxt-link v-ripple :to="localePath(`${item.path}`)">
              {{ $t(`${item.label}`) }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="social">
        <ul>
          <li v-for="(item, i) in social" :key="'social-' + i">
            <nuxt-link v-ripple :to="localePath(`${item.path}`)" :href="item.url" target="_blank" rel="noopener">
              {{ $t(`${item.label}`) }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <nav class="about">
      <ul>
        <li v-for="(item, i) in about" :key="'about-' + i">
          <nuxt-link v-ripple :to="localePath(`${item.path}`)">
            {{ $t(`${item.label}`) }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <language/>
    <v-btn class="btn-close" fab flat color="secondary" @click="toggleVisibility(false)">
      <v-icon>close</v-icon>
    </v-btn>
  </aside>
</template>

<script>
import { main, about, social } from '~/assets/menus.js'
import Language from '~/components/language.vue'

export default {
  components: {
    Language
  },
  data: () => ({
    main: main,
    about: about,
    social: social
  }),
  methods: {
    toggleVisibility: function (state) {
      this.$emit('navigation', state)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

$colorViolett: $colorPink;
#navigation {
  background-color: $colorViolett;
  background-color: $colorTurquoise;
  background-color: $colorNight;
  color: white;
  display: flex;
  left: 0;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 8vw 12vw;
  position: fixed;
  top: 0;
  text-align: right;
  transform: translateX(100%);
  transition: 300ms ease-in;
  width: 100%;
  z-index: 6;
  -webkit-overflow-scrolling: touch;

  body.navigation--visible & {
    transform: translateX(0);

    .emblem,
    .main li,
    .social li,
    .about li,
    .language {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .emblem,
  .main li,
  .social li,
  .about li,
  .about li,
  .language {
    opacity: 0.7;
    display: block;
    position: relative;
    transform: translateX(500px);
    transition: 300ms;
  }

  .home {
    display: flex;
    justify-content: flex-end;

    .emblem {
      height: 90px;
      transition: 200ms ease-out;

      svg {
        fill: white;
        transition-delay: 200ms;

        width: 60px;
      }

      &.nuxt-link-exact-active {
        svg {
          fill: $colorViolett;
        }
      }

      @media (any-hover: hover) {
        &:hover svg {
          fill: $colorViolett;
        }
      }
    }
  }

  ul {
    list-style-type: none;

    a {
      color: white;
      text-decoration: none;
    }
  }

  .main {
    font-size: 3em;
    font-weight: bold;

    li {
      &:nth-child(1) {
        transition-delay: 220ms;
      }
      &:nth-child(2) {
        transition-delay: 240ms;
      }
      &:nth-child(3) {
        transition-delay: 260ms;
      }
    }
  }

  .social {
    font-size: 1.5em;
    margin-top: 1em;

    li {
      &:nth-child(1) {
        transition-delay: 280ms;
      }
      &:nth-child(2) {
        transition-delay: 300ms;
      }
      &:nth-child(3) {
        transition-delay: 320ms;
      }
      &:nth-child(4) {
        transition-delay: 340ms;
      }
    }
  }

  .main,
  .social,
  .about {
    a {
      display: inline-block;
      position: relative;

      &::after {
        background-color: fade-out($colorViolett, 0.1);
        content: '';
        height: 12px;
        left: 0;
        width: 100%;
        position: absolute;
        transform: translateY(-10px) scale(0);
        transform-origin: left bottom;
        transition: 200ms ease-out;
        top: 70%;
        z-index: -1;
      }

      &.nuxt-link-active {
        &::after {
          transform: translateY(0) scale(1);
        }
      }

      @media (any-hover: hover) {
        &:hover {
          &::after {
            transform: translateY(0) scale(1);
          }
        }
      }
    }
  }

  .social a::after {
    height: 7px;
  }

  .about a::after {
    height: 4px;
  }

  .about {
    font-size: 1.2em;
    margin-top: 2em;

    li {
      transition-delay: 360ms;
    }
  }

  .language {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: flex-end;
    transition-delay: 380ms;

    a {
      color: white;
    }

    > * {
      padding: 0 5px;
    }
  }

  .btn-close {
    flex-shrink: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
