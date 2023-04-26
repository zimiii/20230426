var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "浮光書店1",
          cover:
            "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
          address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
          tel: "02 2550 7288",
          opentime: "今日正常營業，14:00-2130",
          title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        {
            title: "浮光書店2",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
            tel: "02 2550 7288",
            opentime: "今日正常營業，14:00-2130",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "浮光書店3",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
            tel: "02 2550 7288",
            opentime: "今日正常營業，14:00-2130",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "浮光書店4",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
            tel: "02 2550 7288",
            opentime: "今日正常營業，14:00-2130",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          }
		],
    
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            loop: true,
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                
            },
        })     

        }
  });
