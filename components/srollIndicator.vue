<template>
  <div class="hint">
    <div class="hint-scroll" :class="angle">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    angle: {
      type: String,
      default: 'horizontal'
    },
    kind: {
      type: String,
      default: 'scroll'
    }
  }
}
</script>

<style lang="scss">
$size: 52px;

.hint {
  display: flex;
  justify-content: center;
  padding: 5px;

  .hint-scroll {
    align-items: center;
    display: flex;
    height: $size;
    justify-content: space-around;
    overflow: hidden;
    width: $size/2;

    > div {
      animation: scroll-down 0.8s infinite;
      background-color: currentColor;
      height: 100%;
      width: 1px;

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.15s;
      }
    }
  }
}

@keyframes scroll-down {
  0% {
    transform: translateY(-100.5%);
  }

  100% {
    transform: translateY(100.5%);
  }
}
</style>
