<template>
<div class="watch">
  <img src="~assets/images/watch.svg" alt="Watch">
  <img class="watch-hours" src="~assets/images/watch-hours.svg" alt="Hours">
  <img class="watch-minutes" src="~assets/images/watch-minutes.svg" alt="Miuntes">
  <img class="watch-seconds" src="~assets/images/watch-seconds.svg" alt="Seconds">
</div>
</template>

<script>
import { TimelineLite, Linear } from 'gsap'

export default {
  mounted() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    h = h % 12 + m / 60

    var hours = document.querySelector('.watch-hours')
    var minutes = document.querySelector('.watch-minutes')
    var seconds = document.querySelector('.watch-seconds')
    var tlHours = new TimelineLite()
    var tlMinutes = new TimelineLite()
    var tlSeconds = new TimelineLite()

    tlHours.set(hours, { rotation: 30 * h })
    tlMinutes.set(minutes, { rotation: 6 * m })
    tlSeconds.set(seconds, { rotation: 6 * s })
    tlSeconds.to(seconds, 59 - s, { rotation: 360, ease: Linear.easeNone })
      .set(seconds, { rotation: 0, delay: 1, onComplete: moveMinutes })
      .to(seconds, 59, { rotation: 360, repeat: -1, repeatDelay: 1, ease: Linear.easeNone })

    function moveMinutes() {
      m += 1
      tlMinutes.to(minutes, 1, { rotation: 6 * m, ease: Linear.easeNone })
    }
  }
}
</script>

<style lang="scss">
@import 'watch.scss';
</style>
