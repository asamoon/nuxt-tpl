/*
* @Author: asamoon
* @Date:   2017-05-18 11:46:48
* @Last Modified by:   asamoon
* @Last Modified time: 2018-02-26 17:17:23
*/

// http://www.php-master.com/post/323269.html
import Vue from 'vue'
import Mock from 'mockjs'
Vue.prototype.$mock = Vue.$mock = Mock.mock
