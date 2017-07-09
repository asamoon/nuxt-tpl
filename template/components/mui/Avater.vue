<template>
    <span class="avater img-box" :style="style">
      <img :src="`https://api.adorable.io/avatars/${size}/${userName}`" role="img" :alt="userName" :style="imgRadius" />
      <!-- v-if="!this.src" -->
    </span>
  <!-- ======================== Avater end ======================== -->
</template>

<script>
export default {
  name: 'mui-avater',
  props: {
    // userID: {
    //   type: String,
    //   required: true
    // },
    userName: {
      type: String,
      required: true
    },
    src: {
      type: Number
    },
    size: {
      type: Number,
      default: 50
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      const style = {
        minWidth: this.size + 'px',
        minHeight: this.size + 'px',
        borderRadius: (this.rounded) ? '50%' : '.3rem',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
      return style
    },
    imgRadius () {
      const style = {
        borderRadius: (this.rounded) ? '50%' : '.3rem'
      }
      return style
    }
  }
}
</script>

<style lang="scss">
.avater{
  position: relative;
  overflow: hidden;
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
