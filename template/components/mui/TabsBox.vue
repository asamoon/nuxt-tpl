<template>
  <div class="mui-tab-box">
    <h1>tabs-box</h1>
    <ul class="nav mui-tab__nav" >
      <li v-for="t in tabs">
        <a href="#" :class="{ 'curr': t.isCurr }" @click.prevent="selectTab(t)" v-html="t.name"></a>
      </li>
    </ul>
    <slot></slot>
  </div><!-- ======================== mui-tabs-box end ======================== -->
</template>

<script>
export default {
  name: 'mui-tabs-box',
  data () {
    return {
      tabs: [],
      currItems: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (t) {
      this.tabs.forEach(tab => {
        tab.isCurr = (tab === t)
      })
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/config";
.mui-tab {
  &__nav {
    position: relative;
    border-bottom: 1px solid $color-border;
    // height: 2rem;
    li {
      position: relative;
      bottom: -2px;;
    }
    a {
      display: block;
      // overflow: hidden;
      padding: 0 1.6rem;
      border-bottom: 2px solid transparent;
      color: $color-font;
      transition: all 150ms; transition-delay: 100ms;

      &:hover {
        border-bottom: 2px solid $color-blod_border;
      }
      &.curr {
        border-bottom: 2px solid $color-brand;
        color: $color-brand;
      }
    }
  }
}
</style>
