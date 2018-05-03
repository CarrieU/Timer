Page({

  /**
   * 页面的初始数据
   */
  data: {
    timerlist: [{
      "timerId": "1",
      "timerName": "test timer",
      "loop": "5",
      "description": "测试定时器",
      "open":true,
      "timerTask": [{
        "taskId": "11",
        "taskName": "step01",
        "duration": "30000",
        "order": "1"
      }, {
        "taskId": "12",
        "taskName": "step02",
        "duration": "5000",
        "order": "2"
      }, {
        "taskId": "13",
        "taskName": "step03",
        "duration": "10000",
        "order": "3"
      }]
    }, {
      "timerId": "2",
      "timerName": "test timer 02",
      "loop": "5",
      "description": "测试定时器02",
      "open": true,
      "timerTask": [
        {
          "taskId": "21",
          "taskName": "step01-02",
          "duration": "30000",
          "order": "1"
        },
        {
          "taskId": "22",
          "taskName": "step02-02",
          "duration": "5000",
          "order": "2"
        },
        {
          "taskId": "23",
          "taskName": "step03-02",
          "duration": "10000",
          "order": "3"
        }
      ]
    }],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  kindToggle:function(e){

  }
})