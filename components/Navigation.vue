<template>
  <aside id="navigation">
    <div class="navigation-right">
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
      <nav class="about">
        <ul>
          <li v-for="(item, i) in about" :key="'about-' + i">
            <nuxt-link v-if="item.path" v-ripple :to="localePath(`${item.path}`)">
              {{ $t(`${item.label}`) }}
            </nuxt-link>
            <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.label">{{ $t(`${item.label}`) }}</a>
          </li>
        </ul>
      </nav>
      <language />
    </div>
    <div class="navigation-left">
      <watch />
      <menu-social showIcon :showLabel=false />
    </div>
    <a href="javascript:;" v-ripple aria-label="Close" class="s-btn-icon btn-close" @click="toggleVisibility(false)">
      <v-icon dark large>close</v-icon>
    </a>
  </aside>
</template>

<script>
import { main, about } from '~/assets/menus.js'
import Language from '~/components/language.vue'
import Watch from '~/components/watch.vue'
import MenuSocial from '~/components/MenuSocial.vue'

export default {
  components: {
    Language,
    Watch,
    MenuSocial
  },
  data: () => ({
    main: main,
    about: about
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

#navigation {
  background-color: $navigationColorBg;
  color: $navigationColorFg;
  display: flex;
  left: 0;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  padding: 8vh 12vw;
  position: fixed;
  top: 0;
  text-align: right;
  transform: translateX(100%);
  transition: 300ms ease-in;
  width: 100%;
  z-index: 6;
  -webkit-overflow-scrolling: touch;

  @media (min-width: $breakpointMedium) {
    padding: 80px 120px;
  }

  body.navigation--visible & {
    transform: translateX(0);

    .emblem,
    .main li,
    .about li,
    .language {
      opacity: 1;
      transform: translateX(0);
    }

    .menu-social li,
    .watch {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  .emblem,
  .main li,
  .about li,
  .language {
    opacity: 0.7;
    display: block;
    position: relative;
    transform: translateX(500px);
    transition: 350ms cubic-bezier(0.175, 0.885, 0.32, 1.075);
  }

  .home {
    display: flex;
    justify-content: flex-end;

    .emblem {
      margin-bottom: 1em;
      transition: 200ms ease-out;

      svg {
        fill: $navigationColorFg;
        transition-delay: 200ms;
        width: 60px;
      }

      &.nuxt-link-exact-active {
        svg {
          fill: $navigationColorLink;
        }
      }

      &:hover svg {
        fill: $navigationColorLink;
      }
    }
  }

  ul {
    list-style-type: none;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .main {
    font-size: 2.2em;
    font-weight: bold;
    line-height: 1.4;

    @media screen and (min-height: 700px) {
      font-size: 3em;
      line-height: 1.4;
    }

    li {
      &:nth-child(1) {
        transition-delay: 240ms;
      }
      &:nth-child(2) {
        transition-delay: 280ms;
      }
      &:nth-child(3) {
        transition-delay: 320ms;
      }
    }
  }

  .main,
  .about {
    a {
      display: inline-block;
      position: relative;

      &::after {
        background-color: $navigationColorLink;
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

      &:hover {
        &::after {
          transform: translateY(0) scale(1);
        }
      }
    }
  }

  .about {
    font-size: 1.5em;
    margin-top: 0.4em;

    @media screen and (min-height: 700px) {
      font-size: 1.8em;
      margin-top: 2em;
    }

    a::after {
      height: 7px;
    }

    li {
      &:nth-child(1) {
        transition-delay: 360ms;
      }
      &:nth-child(2) {
        transition-delay: 380ms;
      }
      &:nth-child(3) {
        transition-delay: 400ms;
      }
    }
  }

  .language {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-size: 1.4em;
    justify-content: flex-end;
    margin-top: 0.7em;
    transition-delay: 420ms;

    a {
      color: inherit;
    }

    > * {
      padding: 0 5px;
    }
  }

  .navigation-left {
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 8vw;
    position: absolute;
    top: 8vh;
    width: 80px;

    .watch {
      opacity: 0;
      transform: scale(0.8);
      transition: 300ms 25000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      width: 80%;
    }

    .menu-social {
      margin-top: 12px;

      li {
        opacity: 0;
        transform: translateX(-25px) scale(0);
        transform-origin: left center;
        transition: 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:nth-child(1) {
          transition-delay: 600ms;
        }
        &:nth-child(2) {
          transition-delay: 640ms;
        }
        &:nth-child(3) {
          transition-delay: 680ms;
        }
        &:nth-child(4) {
          transition-delay: 720ms;
        }
        &:nth-child(5) {
          transition-delay: 740ms;
        }
      }
    }
  }

  .btn-close {
    color: $navigationColorFg;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin: 0;
    transform: translateX(-50%);

    @media (min-width: $breakpointMedium) {
      left: auto;
      top: 6px;
      transform: none;
      right: 6px;
    }
  }
}
</style>
