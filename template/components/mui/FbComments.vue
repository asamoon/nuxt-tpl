<template>
  <div class="fb-comments"
    :data-colorscheme="colorScheme"
    :data-href="href"
    :data-mobile="mobile"
    :data-numposts="numPosts"
    :data-order-by="orderBy"
    :data-width="width">
  </div>
</template>

<script>
// https://developers.facebook.com/docs/plugins/comments
export default {
  name: 'fb-comments',
  props: {
    colorScheme: {
      type: String,
      default: 'light'
      // dark
    },
    href: {
      type: String,
      default: null,
      require: true
    },
    mobile: {
      type: Boolean,
      default: false
    },
    numPosts: {
      type: Number,
      default: 5
    },
    orderBy: {
      type: String,
      default: 'social'
    },
    width: {
      type: String,
      default: '550'
    }
  }
}
</script>
