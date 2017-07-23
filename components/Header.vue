<template>
  <div class="header">
    <div class="header-navigation boundaries">
      <nuxt-link v-ripple class="logo" alt="Santihans Logo" :to="path('/')">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1560 350">
          <title>logo</title>
          <g>
            <path d="M228.05,275l21.89-54.54h84.11L354.67,275h32.45L308.53,75h-31L196.11,275Zm64.77-162.76L322,188.6H262.29Z" />
            <path d="M1004.76,275l21.69-54.54h83.35L1130.24,275h32.15L1084.52,75h-30.67L973.11,275ZM1069,112.24l28.88,76.36h-59.14Z" />
            <polygon points="436.57 275 436.57 126.24 539.45 275 569.11 275 569.11 75 538.47 75 538.47 222.81 436.65 75 405.93 75 405.93 275 436.57 275" />
            <polygon points="1211.29 275 1211.29 126.24 1312.62 275 1341.83 275 1341.83 75 1311.65 75 1311.65 222.81 1211.36 75 1181.11 75 1181.11 275 1211.29 275" />
            <polygon points="639.41 103.37 639.41 275 669.67 275 669.67 103.37 718.89 103.37 718.89 75 592.89 75 592.89 103.37 639.41 103.37" />
            <polygon points="839.29 275 839.29 181.61 928.11 181.61 928.11 275 958.29 275 958.29 75 928.11 75 928.11 153.24 839.29 153.24 839.29 75 809.11 75 809.11 275 839.29 275" />
            <path d="M1489.64,104.08l-24.78,14.68q-6.95-12.06-13.24-15.73-6.56-4.19-16.91-4.2-12.72,0-21.1,7.21a22.35,22.35,0,0,0-8.39,17.83q0,14.82,22,23.86l20.19,8.26q24.64,10,36,24.32t11.4,35.2q0,27.92-18.61,46.14T1429.74,280q-26.35,0-43.52-15.6-16.91-15.6-21.1-43.91l30.94-6.82q2.1,17.83,7.34,24.64,9.44,13.11,27.53,13.11,14.29,0,23.73-9.57t9.44-24.25a34.05,34.05,0,0,0-1.64-10.81,27.48,27.48,0,0,0-5.11-9,40.91,40.91,0,0,0-9-7.73,86.66,86.66,0,0,0-13.11-6.88L1415.71,175q-41.56-17.56-41.55-51.39,0-22.81,17.43-38.15T1435,70Q1470,70,1489.64,104.08Z" />
            <polygon points="747.11 275 776.96 275 776.96 125 747.11 151 747.11 275" />
            <polygon points="747.11 75 747.11 129 776.96 103 776.96 75 747.11 75" />
            <path d="M189.64,104.08l-24.78,14.68Q157.92,106.7,151.63,103q-6.56-4.19-16.91-4.2-12.72,0-21.1,7.21a22.35,22.35,0,0,0-8.39,17.83q0,14.82,22,23.86L147.43,156q24.64,10,36,24.32t11.4,35.2q0,27.92-18.61,46.14T129.74,280q-26.35,0-43.52-15.6-16.91-15.6-21.1-43.91L96,213.67q2.1,17.83,7.34,24.64,9.44,13.11,27.53,13.11,14.29,0,23.73-9.57t9.44-24.25a34.05,34.05,0,0,0-1.64-10.81,27.48,27.48,0,0,0-5.11-9,40.91,40.91,0,0,0-9-7.73,86.66,86.66,0,0,0-13.11-6.88L115.71,175q-41.56-17.56-41.55-51.39,0-22.81,17.43-38.15T135,70Q170,70,189.64,104.08Z" />
          </g>
        </svg>
      </nuxt-link>
      <nav v-bind:class="{ active: isActive }" id="navigation" class="navigation">
        <div v-on:click="toggleNavigation(false)" class="navigation-overlay"></div>
        <button v-on:click="toggleNavigation(true)" v-bind:class="{ 'is-active': isActive }" class="hamburger hamburger--arrow-r paperRipple" type="button" aria-label="Menu" aria-controls="navigation">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
        </button>
        <div class="menu">
          <ul class="menuList">
            <nuxt-link v-ripple tag="li" :to="path('/services')" exact>
              <a>{{ $t("pages.services") }}</a>
            </nuxt-link>
            <nuxt-link v-ripple tag="li" :to="path('/portfolio')" exact>
              <a>{{ $t("pages.portfolio") }}</a>
            </nuxt-link>
            <nuxt-link v-ripple tag="li" :to="path('/contact')" exact>
              <a>{{ $t("pages.contact") }}</a>
            </nuxt-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        isActive: false,

        toggleNavigation: function (state) {
          if (state && this.isActive) {
            this.isActive = false
          } else {
            this.isActive = state
          }
        }
      }
    },
    methods: {
      path (url) {
        return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "Header.scss";
</style>
