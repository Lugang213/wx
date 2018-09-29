//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    articles:[]
  },
  onLoad: function (options) {
    console.log(options.id);
    var that = this;
    //根据ID请求数据
    wx.request({
      url: 'https://cnodejs.org/api/v1/topic/' + options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // if(options.id=res.data.id){
          console.log(res.data.id)
        // }
        
        
      }
    })
  }
})
