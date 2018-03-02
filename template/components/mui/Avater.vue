<template>
  <div class="avater" :style="style" @click="handleClick">
    <figure>
      <img v-if="src" itemprop="image" role="img" v-lazy="src" :alt="name">
      <img v-else itemprop="image" role="img" v-lazy="`https://api.adorable.io/avatars/${size}/${name}`" :alt="name">
    </figure>
  </div><!-- ======================== Avater end ======================== -->
</template>

<script>
import Icon from '~/components/mui/Icon'

export default {
  name: 'mui-avater',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: 'guest',
      required: true
    },
    src: {
      type: String
    },
    size: {
      type: Number,
      default: 48
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      const style = {
        width: this.size + 'px',
        height: this.size + 'px',
        borderRadius: (this.rounded) ? '50%' : '.3rem'
      }
      return style
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

.avater {
  display: inline-block;
  background-color: $color-dark;
  position: relative;
  overflow: hidden;
  // background-size: cover;
  // background-position: center center;
  // background-repeat: no-repeat;
  text-align: center;
  vertical-align: middle;
  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  img {
    display: block;
    max-height: 100%;
    width: auto;
  }
}
</style>
