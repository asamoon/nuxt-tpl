<template>
  <div class="tab-pane" v-show="active" role="tabpanel" :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
    >
    <slot></slot>
  </div><!-- ======================== tab-pane end ======================== -->
</template>

<script>
export default {
  name: 'mui-tab-pane',
  props: {
    label: {
      type: String,
      required: true
    },
    name: String,
    closable: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      index: null
    }
  },
  computed: {
    active () {
      return this.$parent.currentName === (this.name || this.index)
    },
    paneName () {
      return this.name || this.index
    }
  },
  mounted () {
    // this.$parent.updateNav()
  },
  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    // this.$parent.removePanes(this)
  },
  methods: {
    updateNav () {
      // this.$parent.updateNav()
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";
</style>
