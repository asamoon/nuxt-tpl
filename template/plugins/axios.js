/*
* @Author: asamoon
* @Date:   2017-05-10 15:48:15
* @Last Modified by:   asamoon
* @Last Modified time: 2017-07-10 02:43:40
*/

import axios from 'axios'

export default axios.create({
  // baseURL: 'https://voteage-demo-01.firebaseio.com'
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})