// pages/list/list.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listtype: "我爱吃肉",
    id: "", 
    newsResult2:[]
  },
  onLoad() {
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
        console.log(res);
        console.log(id, "get type information");
        newsResult2 = res.data.result;
        this.setData({
          // origindata1: origindata1,
          newsResult2: newsResult2
        })
        console.log(newsResult2);
      }
    })



  }





})