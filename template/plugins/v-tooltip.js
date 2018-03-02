/*
* @Author: asamoon
* @Date:   2017-05-18 11:46:48
* @Last Modified by:   asamoon
* @Last Modified time: 2018-02-27 11:58:00
*/

import Vue from 'vue'
import { VTooltip, VPopover } from 'v-tooltip'
import VueResize from 'vue-resize'

// Vue.use(VTooltip, VPopover)

Vue.directive('tooltip', VTooltip)
Vue.component('v-popover', VPopover)
Vue.use(VueResize)
