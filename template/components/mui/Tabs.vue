<template>
  <div class="tabs">
    <div class="tabs__nav" role="tablist">
      <!-- {{ ...navData }} -->
    </div>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div><!-- ======================== card end ======================== -->
</template>

<script>
// import ProfileAvater from '~/components/mui/ProfileAvater'

export default {
  name: 'mui-tabs',
  // components: {
  //   ProfileAvater
  // },
  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean
  },
  // provide () {
  //   return {
  //     rootTabs: this
  //   }
  // },
  data () {
    return {
      currentName: this.value || this.activeName,
      panes: []
    }
  },
  watch: {
    activeName (val) {
      this.setCurrName(val)
    },
    value (val) {
      this.setCurrName(val)
    }
  },
  methods: {
    setCurrentName (val) {
      this.currentName = val
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";
</style>
