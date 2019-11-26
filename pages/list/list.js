// pages/list/list.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listtype: "我爱吃肉"
  },
  onLoad() {
    
    let listtype = app.globalData.globaltype
    console.log(listtype,'get new value')
  //  listtype=app.globalData.globaltype
  //  console.log("now value is",listtype)
    this.setData({
      // origindata1: origindata1,
      listtype: listtype
    })

  }





})