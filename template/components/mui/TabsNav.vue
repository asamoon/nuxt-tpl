<template>
  <div class="tabs__nav" role="tablist">
    <!-- {{ ...navData }} -->
  </div><!-- ======================== tabs__nav end ======================== -->
</template>

<script>
import TabBar from '~/components/mui/TabBar'

export default {
  name: 'mui-tabs-nav',
  components: {
    TabBar
  },
  // inject: ['rootTabs'],
  props: {
    panes: Array,
    currentName: String,
    editable: Boolean
  },
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
