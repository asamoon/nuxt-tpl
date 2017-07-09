/*
* @Author: asamoon
* @Date:   2017-05-25 17:40:57
* @Last Modified by:   asamoon
* @Last Modified time: 2017-06-01 18:04:35
*/

// utils to delay promise
function wait (ms) {
  return (x) => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

export { wait }
