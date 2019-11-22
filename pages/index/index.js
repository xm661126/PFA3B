//index.js
//获取应用实例
const app = getApp()

Page({
  data:{

  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '最热新闻news',
    })
    wx.setNavigationBarColor({
      
      frontColor: '#ffffff',
      backgroundColor: '#1BC3B8',
    })
  },
  

})

