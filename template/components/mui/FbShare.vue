<template>
  <div class="fb-share-button"
    :data-href="href"
    :data-layout="layout"
    :data-mobile-iframe="mobileFrame"
    :data-size="size">
    <a v-show="showDefault" class="fb-xfbml-parse-ignore" target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${href}&amp;src=sdkpreparse`">分享</a>
  </div>
</template>

<script>
// https://developers.facebook.com/docs/plugins/share-button
export default {
  name: 'fb-share',
  props: {
    href: {
      type: String,
      default: null,
      require: true
    },
    layout: {
      type: String,
      default: 'button'
      // icon_link
      // button
      // button_count
      // box_count
    },
    mobileFrame: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
      // large
    },
    showDefault: {
      type: Boolean,
      default: false
    }
  }
}
</script>
