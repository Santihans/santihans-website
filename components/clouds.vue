<template>
  <div class="clouds boundaries">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
      <title>clouds</title>
      <g data-name="Clouds">
        <path class="fast" d="M267.69,79.9a7.79,7.79,0,1,0-15.31-.15H250a7.46,7.46,0,1,0,0,14.92h16.22a7.46,7.46,0,0,0,1.48-14.77Z" />
        <path class="fast" d="M132.46,13.92h-1.77a5.78,5.78,0,1,0-11.38.11,5.54,5.54,0,0,0,1.1,11h12a5.54,5.54,0,1,0,0-11.09Z" />
        <path class="slow" d="M69.54,74a8.41,8.41,0,0,0-14.32-7.42A12.63,12.63,0,1,0,48.63,90c.31,0,.6,0,.9,0a8.16,8.16,0,0,0,.85,0H67.93a8.07,8.07,0,0,0,1.6-16Z" />
        <path class="slow" d="M338.37,34.7a12.55,12.55,0,0,0-6.58,1.87A8.41,8.41,0,0,0,317.46,44a8.07,8.07,0,0,0,1.6,16h17.54a8.16,8.16,0,0,0,.85,0c.3,0,.6,0,.9,0a12.63,12.63,0,0,0,0-25.26Z" />
      </g>
    </svg>
  </div>
</template>

<style lang="scss">
@keyframes clouds-slow {
  50% {
    transform: translateX(-80%);
  }
}
@keyframes clouds-fast {
  50% {
    transform: translateX(-200%);
  }
}

.clouds {
  padding-top: 12px;

  path {
    transform-box: fill-box;
  }

  .fast {
    animation: clouds-fast 100s ease-out infinite;
  }

  .slow {
    animation: clouds-slow 100s ease-in infinite;
  }
}
</style>
