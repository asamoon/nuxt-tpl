<template>
  <div class="mui-demo">
    <h2>1223</h2>


  </div>

</template>

<script>
export default {
  name: 'mui-',
  props: {
    trigger: {
      type: String,
      required: true
    }
  },
  computed: {

  },
  mounted () {
    console.log('vnode===', this.$vnode.context.$refs[this.trigger])
    // if (this.triggerEl) {
    //   this.initializeDropdown()
    // }
    // console.log('trigger===', this.trigger)
    // console.log('parent===', this.$parent)
    // console.log('triggerEl===', this.$parent.$refs[this.trigger])
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";


</style>
