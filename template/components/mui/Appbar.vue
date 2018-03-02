<template>
<div class="appbar" :class="['paper-' + zDepth ]">
  <div class="align--left">
    <slot name="left"></slot>
  </div>
  <div class="appbar__title" :class="titleClass">
    <slot>
      <span>{{title}}</span>
    </slot>
  </div>
  <div class="align--right">
    <slot name="right"></slot>
  </div>
</div><!-- ======================== appbar end ======================== -->
</template>

<script>
export default {
  name: 'mui-appbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Array, Object]
    },
    zDepth: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

.appbar {
  // background-color: $color-init;
  display: flex;
  flex: 0;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  padding: 0 .8rem;
  height: 55px;
  width: 100%;
  color: $color-font;
  z-index: 2;

  &__title {
    flex: 1;
    padding: 0 .5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 300;
    line-height: 55px;
  }
  i {
    font-size: 1.8rem;
  }
  // svg {
  //   width: 1.8rem;
  //   height: 1.8rem;
  // }

  .align {
    &--left, &--right {
      flex: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
    }
  }

  // if inset card
  .card & {
    padding: 0 1.5rem;
  }
}
</style>
