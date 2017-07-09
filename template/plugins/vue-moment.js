/*
* @Author: asamoon
* @Date:   2017-05-18 11:46:48
* @Last Modified by:   asamoon
* @Last Modified time: 2017-05-23 11:26:18
*/

'use strict'

import Vue from 'vue'
import VMoment from 'vue-moment'

// 在地化設定
const moment = require('moment')
require('moment/locale/zh-tw')

Vue.use(VMoment, {moment})
