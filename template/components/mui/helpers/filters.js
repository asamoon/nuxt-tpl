/*
* @Author: asamoon
* @Date:   2017-05-24 18:16:39
* @Last Modified by:   asamoon
* @Last Modified time: 2017-05-25 17:22:09
*/

'use strict'

function truncate (value, length) {
  length = length || 15
  if (!value || typeof value !== 'string') return ''
  if (value.length <= length) return value
  return value.substring(0, length) + '...'
}

export {
  truncate
}
