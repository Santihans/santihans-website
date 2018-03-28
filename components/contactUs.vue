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
    </div>
  </section>
</template>

<script>
export default {
  i18n: {
    messages: {
      en: {
        teaser: 'Let\'s build great things together!'
      },
      de: {
        teaser: 'Lass uns gemeinsam etwas Grosses kreieren!'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.contactUs {
  align-items: center;
  background-image: url('~/assets/images/skyline-santihans.svg');
  background-position: bottom;
  background-color: $colorPink;
  background-clip: padding-box;
  border-top: 3px dashed $colorPink;
  color: white;
  display: flex;
  margin-top: 3em;
  min-height: 350px;
  padding-bottom: 6em;

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

  .s-btn {
    @media screen and (min-width: $breakpointSmall) {
      height: 60px;
      padding: 4px 40px;
      font-size: 1.2em;
    }
  }
}
</style>

