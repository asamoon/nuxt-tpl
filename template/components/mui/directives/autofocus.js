/*
* @Author: asamoon
* @Date:   2017-05-18 18:22:20
* @Last Modified by:   asamoon
* @Last Modified time: 2017-05-18 18:23:00
*/

'use strict'

export default {
  inserted (el, { value }) {
    if (value) {
      el.focus()
    }
  }
}
