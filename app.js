//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    //做的功能不在这里，这里是入口实际没做什么功能
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  }
})