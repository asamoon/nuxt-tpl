/*
* @Author: asamoon
* @Date:   2017-05-18 11:46:48
* @Last Modified by:   asamoon
* @Last Modified time: 2017-12-25 15:28:12
*/

import Vue from 'vue'
import VeeValidate from 'vee-validate'
import tw from 'vee-validate/dist/locale/zh_TW'

// the locale config option is not working [https://github.com/baianat/vee-validate/issues/1060]
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'tw'
})

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    tw
  }
})
