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
    num1: 0
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
        // let result = res.data.result
        // let nowTitle = result[0]  
        // let nowDate = result.source
        // let nowFirstImage=result.firstImage
        // onsole.log(''，nowFirstImage)
      }
    })
  },

  getInformation() {
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