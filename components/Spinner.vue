<template>
  <div class="spinner">
    <div class="spinner-wheel"></div>
  </div>
</template>

<style lang="scss">
.spinner {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;

  .spinner-wheel {
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
}
</style>
