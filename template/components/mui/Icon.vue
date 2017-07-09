<template>
  <i class="mui-icon" :class="[iconSet, icon]" :aria-label="ariaLabel">
    <svg class="mui-icon__svg" v-if="useSvg">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + icon"></use>
    </svg>

    <slot v-else>{{ removeText ? null : icon }}</slot>
  </i>
</template>

<script>
// https://material.io/icons/
export default {
  name: 'mui-icon',
  props: {
    icon: String,
    iconSet: {
      type: String,
      default: 'material-icons'
    },
    ariaLabel: String,
    removeText: {
      type: Boolean,
      default: false
    },
    useSvg: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
// @import "~assets/style/import";

$mui-icon-font-size  : rem-calc(24px) !default;
$mui-icon-size       : 1em !default;

.mui-icon {
  cursor: inherit;
  display: inline-block;
  font-size: $mui-icon-font-size;
  height: $mui-icon-size;
  user-select: none;
  vertical-align: middle;
  width: $mui-icon-size;
  svg {
    fill: currentColor;
    height: $mui-icon-size;
    margin: 0;
    padding: 0;
    width: $mui-icon-size;
  }
}
</style>
