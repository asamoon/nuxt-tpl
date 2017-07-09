<template>
  <button
    class="mui-btn"
    ref="button"
    :class="classes"
    :disabled="disabled || loading"
    :type="buttonType"
    @click="onClick">
    <!-- @focus.once="onFocus"> -->
    <div class="ui-button__content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'mui-btn',
  props: {
    type: {
      type: String,
      default: 'primary' // 'primary' or 'secondary'
    },
    buttonType: {
      type: String,
      default: 'submit' // HTML default
    },
    size: {
      type: String,
      default: 'md' // 'sm', 'md', 'lg', 'xl'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `mui-btn__type-${this.type}`,
        `mui-btn__size-${this.size}`,
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled || this.loading }
      ]
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
    // onFocus () {
    //   const bounds = {
    //     width: this.$el.clientWidth,
    //     height: this.$el.clientHeight
    //   }
    //   this.focusRing.size = bounds.width - 16 // 8px of padding on left and right
    //   this.focusRing.top = -1 * (this.focusRing.size - bounds.height) / 2
    //   this.focusRing.left = (bounds.width - this.focusRing.size) / 2
    // }
  }
}
</script>
