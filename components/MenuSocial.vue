<template>
  <nav class="menu-social">
    <ul>
      <li v-for="(item, i) in social" :key="i">
        <a :href="item.url" target="_blank" rel="noopener" :class="{'hasIcon': showIcon}" :title="item.label">
          <span v-if="showIcon" class="icon" :style="'background-image:url(/images/social/'+ item.icon +'); width: ' + iconSize + '; height: ' + iconSize + ';'"></span>
          <span v-if="showLabel" class="label">{{ item.label }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { social } from '~/assets/menus.js'

export default {
  data() {
    return {
      social: social
    }
  },
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    iconSize: {
      type: String,
      default: '36px'
    }
  }
}
</script>

<style scoped lang="scss">
.menu-social {
  ul {
    text-transform: uppercase;
    line-height: 1.4;
    list-style: none;
  }

  a {
    display: block;

    &.hasIcon {
      padding: 10px;
    }
  }

  .icon {
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
  }
}
</style>
