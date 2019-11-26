// pages/list/list.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listtype: "我爱吃肉",
    id: "", 
    newsResult2:[],
    temp:'',
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '最热新闻news',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1BC3B8',
    })
    let id=""
    let listtype = app.globalData.globaltype
    console.log(listtype,'get new value')
    // this.setData({
    //   // origindata1: origindata1,
    //   listtype: listtype
    // })
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: listtype
      },
      success: res => {
        let newsResult2=[];
        let temp="p";
        console.log(res);
        console.log(id, "get type information");
        newsResult2 = res.data.result;
        this.setData({
          // origindata1: origindata1,
          newsResult2: newsResult2,
          temp:temp
        })
        console.log(newsResult2);
      }
    })



  }





})