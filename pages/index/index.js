//index.js
//获取应用实例
const app = getApp()
const cityMap = {
  '国内': 'gn',
  '国际': 'gj',
  '财经': 'cj',
  '娱乐': 'yl',
  '军事': 'js',
  '体育': 'ty',
  '其他': 'qt',
}
Page({
  data: {
    citylist: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    num1: 0,
    newsResult: [],
    origindata1: [],
  },
  onLoad() {
    // var origindata2=this;
    wx.setNavigationBarTitle({
      title: '最热新闻news',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1BC3B8',
    })
    // let origindata1 = []
    let newsResult = this.data.newsResult
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: "gn"
      },
      success: res => {
        console.log(res);
        newsResult = res.data.result;
        console.log(newsResult[0].title);
        //  for(let i=0;i<8;i+=1){
        //    origindata1.push({
        //     title: newsResult[i].title,
        //     firstImage: newsResult[i].firstImage,
        //     source: newsResult[i].source,
        //     date: newsResult[i].date,
        //    })
        // }
        this.setData({
          // origindata1: origindata1,
          newsResult: newsResult
        })

      }
    })
  },

  getInformation(e) {
    let newsResult=[]
    console.log("getinformation:", e)
    console.log(e.currentTarget.id)
    console.log(cityMap[e.currentTarget.id])
    wx.showToast({
      title: '正在链接',
    })
  //我是辅助线
    wx.request({
        url: 'https://test-miniprogram.com/api/news/list',
        data: {
          type: cityMap[e.currentTarget.id]
        },
        success: res => {
          console.log(res);
          newsResult = res.data.result;
          console.log(newsResult[0].title);
          this.setData({
            // origindata1: origindata1,
            newsResult: newsResult
          })
        }
    })

    //我是辅助线
  }
})