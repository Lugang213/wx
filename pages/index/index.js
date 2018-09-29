//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: []
  },
  onLoad: function () {
    var that = this;
    // 取所有栏目列表的数据
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({ items: res.data.data });
      }
    })
  },

})
