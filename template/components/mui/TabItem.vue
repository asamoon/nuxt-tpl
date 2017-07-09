<template>
  <div role="tabpanel" class="mui-tab-item" :class="{ hide: !isCurr }" v-show="isCurr">
    <div class="mui-tab-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="mui-tab-item-label">
      <slot></slot>
    </div>
  </div><!-- ======================== mui-tab-item end ======================== -->
</template>

<script>
export default {
  name: 'mui-tab-item',
  props: {
    'id': {
      type: Number
    },
    'name': {
      type: String,
      required: true
    },
    'curr': {
      default: false
    }
  },
  data () {
    return {
      isCurr: false
    }
  },
  mounted () {
    this.isCurr = this.curr
  }
}
</script>
