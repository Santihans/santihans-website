<template>
  <div>
    <div class="spinner">
      <div class="spinner-inner">
        <div class="wheel"></div>
        <div class="status">

          <transition name="info">
            <p class="slow" v-show="show == 1">{{ $t('status.slow') }} 😅</p>
          </transition>
          <transition name="info">
            <p class="slower" v-show="show == 2">{{ $t('status.slower') }} 😳</p>
          </transition>
          <transition name="info">
            <p class="reload" v-show="show == 3">{{ $t('status.reload') }} 😡</p>
          </transition>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 0
    }
  },
  mounted() {
    var self = this
    window.setTimeout(function () {
      self.show = 1
    }, 3000)
    window.setTimeout(function () {
      self.show = 2
    }, 8000)
    window.setTimeout(function () {
      self.show = 3
    }, 15000)
  },
  i18n: {
    messages: {
      en: {
        status: {
          slow: 'Still working on it.',
          slower: 'Something seems off…',
          reload: 'Try reloading the page.'
        }

      },
      de: {
        status: {
          slow: 'Ladevorgang läuft.',
          slower: 'Ladevorgang dauert ungewöhnlich lange.',
          reload: 'Versuche die Seite neu zu laden!'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.spinner {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;

  .spinner-inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .status {
    margin-top: 1em;

    .reload {
      color: $colorError;
    }
  }

  .wheel {
    width: 30px;
    height: 30px;
    animation: rotate 1000ms infinite;
    border: 3px solid currentColor;
    border-bottom-color: transparent;
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .info-enter-active {
    animation: info-in 0.5s;
  }
  .info-leave-active {
    display: none;
  }
  @keyframes info-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
