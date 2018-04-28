<template>
  <section class="contactUs text-center">
    <div class="boundaries">
      <div class="mood">
        <v-icon>child_friendly</v-icon>
      </div>
      <div class="call">{{ $t('teaser') }}</div>
      <div>
        <nuxt-link v-ripple class="s-btn" :to="localePath('/contact')">{{ $t('buttons.contact') }}</nuxt-link>
      </div>
      <div class="welcome">
        {{ $t('welcomeProject') }}
        <a v-if="$i18n.locale === 'en'" href="/files/SANTiHANS-Welcome.pdf" rel="noopener" target="_blank">{{ $t('buttons.more') }}</a>
        <a v-if="$i18n.locale === 'de'" href="/files/SANTiHANS-Willkommen.pdf" rel="noopener" target="_blank">{{ $t('buttons.more') }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        teaser: 'Let\'s build great things together!',
        welcomeProject: 'Not convinced yet? How about a Welcome Project.'
      },
      de: {
        teaser: 'Lass uns gemeinsam etwas Grosses schaffen!',
        welcomeProject: 'Noch nicht überzeugt? Wie wär\'s mit einem Willkommens-Projekt.'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.contactUs {
  align-items: center;
  background-image: url('/images/skyline-santihans.svg');
  background-position: bottom;
  background-color: $colorPink;
  background-clip: padding-box;
  border-top: 3px dashed $colorPink;
  color: white;
  display: flex;
  margin-top: 3em;
  min-height: 350px;
  padding-bottom: 1em;

  a {
    color: inherit;
  }

  @media screen and (min-width: $breakpointMedium) {
    background-size: cover;
    background-position-y: 40%;
  }

  @media screen and (min-width: $breakpointLarge) {
    background-size: contain;
    background-size: auto;
  }

  .mood {
    margin-bottom: 1em;

    .icon {
      font-size: 3.5em;
      color: white;
    }
  }

  .call {
    font-size: 1.5em;
    font-weight: bold;
    font-family: $fontFamilyHeading;
    line-height: 1.2;
    margin: 0 auto 0.5em;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.18);
    width: 70%;

    @media screen and (min-width: $breakpointSmall) {
      font-size: 2em;
    }
  }

  .welcome {
    margin: 5em auto 0.5em;
    width: 70%;
  }

  .s-btn {
    @media screen and (min-width: $breakpointSmall) {
      height: 60px;
      padding: 4px 40px;
      font-size: 1.2em;
    }
  }
}
</style>

