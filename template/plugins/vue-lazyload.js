/*
* @Author: asamoon
* @Date:   2017-05-18 11:46:48
* @Last Modified by:   asamoon
* @Last Modified time: 2018-02-09 03:33:18
*/

import Vue from 'vue'
import lazy from 'vue-lazyload'

Vue.use(lazy, {
  preLoad: 1.3,
  lazyComponent: true,
  error: '../imgs/page-cannot-be-found.png',
  loading: '../imgs/fluid_drop_loading.gif',
  attempt: 3
})
