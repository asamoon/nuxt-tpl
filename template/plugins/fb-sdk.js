/*
* @Author: asamoon
* @Date:   2017-05-25 17:22:47
* @Last Modified by:   asamoon
* @Last Modified time: 2017-07-14 16:49:36
*/
/*
** 只在生成模式的客户端中使用
*/
(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/zh_TW/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

window.fbAsyncInit = () => {
  window.FB.init({
    appId: '',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  })

  window.FB.AppEvents.logPageView()
  window.FB.getLoginStatus((response) => {
    // console.log(response)
    if (response.status === 'connected') {
      // testAPI()
    } else {
      // window.FB.login()
    }
  })
}

// function testAPI () {
//   window.FB.api(
//     '/me',
//     'GET', {
//       'fields': 'posts.limit(1000){place,picture}'
//     },
//     function (response) {
//       console.log(11)
//       console.log(response)
//       // setPlaces(response)
//       // initMap()
//     }
//   )
// }
