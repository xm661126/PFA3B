//index.js
//获取应用实例
const app = getApp()
const cityMap = {
  'gn': '国内',
  'gj': '国际',
  'cj': '财经',
  'yl': '娱乐',
  'js': '军事',
  'ty': '体育',
  'qt': '其他',
}
Page({
  data: {
    citylist: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    num1: 0,
    newsResult:[],
    originxiabiaot1:[],
    originwenben1: [],
    originimage1: [],
    originsource1: [],
    origindata1: [],
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '最热新闻news',
    })
    wx.setNavigationBarColor({

      frontColor: '#ffffff',
      backgroundColor: '#1BC3B8',
    })
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: "gn"
      },
      success: res => {
        console.log(res);
        let newsResult = res.data.result;
        console.log(newsResult[0].title);
       for(let i=0;i<8;i+=1){
        this.setData({
          originxiabiaot1: newsResult[i].title,
          // originimage1(i): newsResul([i]).firstImage,
          // originsource1(i): newsResult[i].source,
          // origindata1(i): newsResult[i].date,
        })
       }
      }
    })
  },

  getInformation(e) {
    console.log("getinformation:",e)
    wx.showToast({
      title: '正在链接',
    })
    // wx.request({
    //   url: 'https://test-miniprogram.com/api/news/list',
    //   data:{
    //     type:"gn"
    //   },
    //   success: res => {
    //     console.log(res.data)
    //     let result = res.data.result
    //     let temp = result.now.temp
    //     let weather = result.now.weather
    //   }
  }
})