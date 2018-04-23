<template>
  <div class="watch">
    <img src="/images/watch.svg" alt="Watch" />
    <img class="watch-hours" :style="hour" src="/images/watch-hours.svg" alt="Hours" />
    <img class="watch-minutes" :style="minute" src="/images/watch-minutes.svg" alt="Miuntes" />
    <img class="watch-seconds" :style="second" src="/images/watch-seconds.svg" alt="Seconds" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      hourRotation: 0,
      minuteRotation: 0,
      secondRotation: 0
    }
  },
  computed: {
    hour() {
      let hourRotation = (this.date.getHours() % 12 + this.date.getMinutes() / 60) * 30
      return { transform: 'rotate(' + hourRotation + 'deg)' }
    },
    minute() {
      let minuteRotation = 6 * this.date.getMinutes()
      return { transform: 'rotate(' + minuteRotation + 'deg)' }
    },
    second() {
      let secondRotation = 6 * this.date.getSeconds()
      return { transform: 'rotate(' + secondRotation + 'deg)' }
    }
  },
  created() {
    let self = this
    this.date = new Date()

    setInterval(function () {
      self.date = new Date()
    }, 1000)
  }
}
</script>

<style lang="scss">
@import 'watch.scss';
</style>
