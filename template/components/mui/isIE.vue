<template>
<div class="old-browser-warning" v-if="isTooOldVersion">
  <div class="old-browser-warning__inner">
    <h2>FOR A FASTER, BETTER, AND SAFER WEB EXPERIENCE, KEEP YOUR BROWSER UP TO DATE.</h2>
    <p>親愛的用戶你好：</p>
    <p>如果您看到了本訊息，表示您使用了過於舊版的瀏覽器進入本站。</p>
    <p>為了使用本站的完整功能，讓您感受更佳的瀏覽體驗，<br />建議升級至瀏覽器的最新版本，以維持最佳瀏覽品質！</p>
    <div class="old-browser-warning__btnBox">
      <a class="btn-o btn-large" href="http://www.whatbrowser.org/intl/zh-TW/" target="_blank">升級瀏覽器&nbsp;&#10132;</a>
    </div>
  </div>
</div><!-- Old Browser Warning -->
</template>

<script>
export default {
  props: {
    blockedVersion: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      isTooOldVersion: false
    }
  },
  mounted () {
    // 獲取IE或Edge瀏覽器版本
    let currVersion = this.detectIE()

    // 非IE或Edge
    if (currVersion === false) return

    // 檢查版本號是否受限制
    if (+currVersion <= +this.blockedVersion) {
      this.isTooOldVersion = true
    }
  },
  methods: {
    // 返回IE的版本，如果瀏覽器不是IE: 返回 false --------------------
    // https://codepen.io/gapcode/pen/vEJNZN
    detectIE () {
      var ua = window.navigator.userAgent

      // IE 10 or older => return version number
      var msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
      }

      // IE 11 => return version number
      var trident = ua.indexOf('Trident/')
      if (trident > 0) {
        var rv = ua.indexOf('rv:')
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
      }

      // Edge (IE 12+) => return version number
      var edge = ua.indexOf('Edge/')
      if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
      }

      // other browser
      return false
    }
  }
}
</script>
