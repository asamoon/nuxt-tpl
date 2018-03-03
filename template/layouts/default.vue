<template>
  <div class="wrap">
    <SiteHeader />
    <nuxt keep-alive />
    <isIE blockedVersion="11" />
  </div>
</template>

<script>
import isIE from '~/components/mui/isIE'

export default {
  name: 'wrap',
  components: {
    isIE
  },
  mounted () {
    var style
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      style = '50px'
    } else {
      style = '20px; margin-left: -7px;'
    }
    console.log('%c 歡迎光臨 %c 天空部落 ', `background: #2d5869; padding: 6px 3px; border-radius: 3px 0 0 3px; color: #fff; font-size: 12px; line-height: ${style}`, `background: #58B2DC; padding: 6px 3px; border-radius: 0 3px 3px 0; color: #fff; font-size: 12px; line-height: ${style}`)
  }
}
</script>
