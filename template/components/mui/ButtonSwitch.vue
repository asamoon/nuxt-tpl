<template>
  <div class="btnGroup btnSwitch" role="radiogroup">
    <button type="button" role="radio"
      v-for="(key, val) in settigns"
      @click="switchSelected(key)"
      :class="['btn', { 'curr': selected === key }]"
      >{{ val }}</button>
  </div><!-- ======================== btnSwitch end ======================== -->
</template>

<script>
export default {
  name: 'mui-button-switch',
  props: {
    name: {
      type: String,
      default: null
    },
    settigns: {
      type: Object,
      default: () => {
        return {
          '開啟': 'true',
          '關閉': 'false'
        }
      }
    },
    def: {
      type: String,
      default: 'false'
    }
  },
  data () {
    return {
      selected: null
    }
  },
  created () {
    this.selected = this.def
  },
  methods: {
    switchSelected (val) {
      // 選擇無變化時，不觸發
      if (this.selected === val) {
        return false
      }
      this.selected = val
      this.$emit('switch', [this.name, val])
    }
  }
}
</script>
