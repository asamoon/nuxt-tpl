/*
* @Author: asamoon
* @Date:   2017-06-20 11:25:01
* @Last Modified by:   asamoon
* @Last Modified time: 2017-07-10 04:12:42
*/

module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': '專案名稱'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': '專案介紹',
      'default': 'My Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': '作者'
    },
  },
  completeMessage: '{{#inPlace}}初次啟動專案:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
