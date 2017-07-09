<template>
  <button class="mui-btn mui-btn__type-facebook"
    @click="statusChangeCallback()"
    :data-auto-logout-link="autoLogout"
    type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1536 1792" style="width: 18px; height: 18px; overflow: hidden;">
        <path fill="#fff" d="M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z" />
      </svg>
      &nbsp;登入
    </button>
</template>

<script>
// https://developers.facebook.com/docs/facebook-login/web/login-button
import Icon from '~components/mui/Icon'

export default {
  name: 'fb-login-button',
  components: {
    Icon
  },
  props: {
    autoLogout: {
      type: Boolean,
      default: false
    }
  },
  // mounted () {
    // document.write(unescape(`%3Cscript src="https://member.yam.com/BOX/yamBox_Kids.js?Date="${parseInt(new Date().getTime() / 900000, 10)}" type="text/javascript"%3E%3C/script%3E`))
  // },
  methods: {
    // login () {
    //   yamBox_Create('LOGIN_FACEBOOK', 'location.reload()')
    // },
    statusChangeCallback (response) {
      window.FB.login((response) => {
        this.$emit(response.authResponse ? 'success' : 'error', response)
      }, this.params)
    }
  }
}
</script>

