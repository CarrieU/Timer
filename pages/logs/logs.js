

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    console.log("process onLoad.");
  },
  onReady:function(){
    console.log("process onReady.");
  },
  onShow: function () {
    console.log("process onShow.");
  }
})
