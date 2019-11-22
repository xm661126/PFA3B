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

