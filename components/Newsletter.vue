<template>
  <section class="subscribe text-center">
    <div class="boundaries">
      <div class="mood">
        <v-icon>favorite</v-icon>
      </div>
      <div class="call">{{ $t('teaser') }}</div>
      <div>
        <a href="http://eepurl.com/c9nOob" v-ripple class="s-btn" rel="noopener" target="_blank">{{ $t('buttons.newsletter') }}</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  i18n: {
    messages: {
      en: {
        teaser: 'Get the latest updates!'
      },
      de: {
        teaser: 'Bleibe auf dem Laufenden!'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.subscribe {
  align-items: center;
  background-image: url('/images/skyline-santihans.svg');
  background-position: bottom;
  background-color: $colorTurquoise;
  background-clip: padding-box;
  border-top: 3px dashed $colorTurquoise;
  color: white;
  display: flex;
  margin-top: 3em;
  min-height: 350px;
  padding-bottom: 1em;
  padding-top: 2em;

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
}
</style>

