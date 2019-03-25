<template>
  <div class="recommendedInfo">
    <Singleimage :imageUrl='finallyData[0][0].imageUrl'></Singleimage>
    <div class="navgator">
      <div class="navgator-five" v-for='item of finallyData[1]' :key='item.id'>
        <img :src="item.imageUrl" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <Singleimage :imageUrl='finallyData[2][0].imageUrl'></Singleimage>
    <Singleimage :imageUrl='finallyData[3][0].imageUrl'></Singleimage>
    <div class="new-container">
      <main>
        <div class="old-new-tag"></div>
        <div class="old-new-container">
           <div class="left old-new-item">
             <div class="tag-old tag-item">旧机估价</div>
             <img :src="finallyData[4].inquiryHomeRecord.productImg" alt="">
             <h5 class="product-name">{{finallyData[4].inquiryHomeRecord.productName}}</h5>
             <p class="product-price">最高回收价 <span>¥{{finallyData[4].inquiryHomeRecord.maxPrice}}</span></p>
           </div>
           <div class="right old-new-item">
             <div class="tag-new tag-item">换新机价</div>
             <img :src="finallyData[4].topOfNewProduct.productImg" alt="">
             <h5 class="product-name">{{finallyData[4].topOfNewProduct.productName}}</h5>
             <p class="product-price">新机原价  <span>¥{{finallyData[4].topOfNewProduct.price}}</span></p>
           </div>
        </div>
        <div class="ready-replace">
          <div class="ready-replace-left">
            <div class="tag-money"></div>
            预计到店获得<span>¥1282</span>
          </div>
          <div class="button">去看看</div>
        </div>
      </main>
      <div class="replace-list">
        <div class="replace-item" v-for='item of finallyData[4].recommendProductList' :key='item.id'>
          <img :src="item.productImg" alt="">
          <h5>{{item.productName}}</h5>
          <p><span>¥{{item.price}}</span>起</p>
          <div class="replace-tag">最高省<span>{{item.subsidies}}</span></div>
        </div>
      </div>
      <div class="coral-text">
        <div class="text swiper-no-swiping">
          <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide v-for="(user, index) in luckuserData" :key="index" class="item"> {{ user }}</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <Singleimage :imageUrl='finallyData[5][0].imageUrl'></Singleimage>
    <Singleimage :imageUrl='finallyData[6][0].imageUrl'></Singleimage>
    <Multiimage :imageUrl='finallyData[7]'></Multiimage>
    <Multiimage :imageUrl='finallyData[8]'></Multiimage>
    <Multiimage :imageUrl='finallyData[9]'></Multiimage>
    <Multiimage :imageUrl='finallyData[10]'></Multiimage>
    <Singleimage :imageUrl='finallyData[11][0].imageUrl'></Singleimage>
    <Multiimage :imageUrl='finallyData[12]'></Multiimage>
    <Singleimage :imageUrl='finallyData[13][0].imageUrl'></Singleimage>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Singleimage from './Singleimage'
import Multiimage from './Multiimage'
export default {
  props:['infoData','luckuserData'],
  data() {
    return {
      finallyData: [],
      swiperOption: {
        direction: 'vertical',
        pagination: {
           el: '.swiper-pagination'
        },
        touchRatio: 0,
        loop : true,
        height: 40,
        speed:1000,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }
      },
    }
  },
  components: {
    swiper,
    swiperSlide,
    Singleimage,
    Multiimage
  },
  mounted() {

  },
  created() {
    this.infoData.forEach((element) => {
      this.finallyData=[...this.finallyData,(element.item ? element.item : element.items)]
    })
  }
}
</script>

<style lang="stylus" scoped>
.recommendedInfo
  background #fff
  .navgator
    margin .1rem .14rem
    .navgator-five
      width 20%
      display inline-block
      text-align center
      vertical-align top
      img 
        width 100%
        display block
        margin 0 auto
      span 
        color #666
        font-size .14rem
        font-weight 400
        line-height .18rem
        display inline-block
  .new-container
    padding  0 .14rem
    main
      box-shadow 0 0.02rem 0.12rem 0 hsla(195,9%,83%,.44)
      border-radius .04rem
      margin-top .12rem
      padding .1rem
      position relative
      .old-new-tag
        width .44rem
        height .44rem
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEVHcEz/4Cb/4Cb92ETiURj/4Cb6xkTjY2DlUi7hSBv+3T3/3yb/4Cb/4Cf/4CX/3yX/4Sn/4Sb+7Jv95pv95Yf+6o3/86z/4Cf/8qz+64P+6YH/4jD96oL+75f/4CX/863964P/4jH/3iUAcKuDAAAAHnRSTlMAp4E0D7sdAgUJSFzRke333naWZIGt6GvI8s715O3x2p2xAAAFMUlEQVRYw6WXjXqjLBCFURAB0ZifNtttn2yb+7/IT/5nEA32m2yzwejrceYwEEJg9C4u/1y838QS8u3bxdfVDJn+cTEr4aIPQVbhj7v/RC//ePK/BSUF//LkDyWlFHTy5ImKFRrfoffvfSDz90CmFvURNHMzVB78o3lGjqTAtczEFT0N4HeDksqDv/8yMzwHcifX5MR35Jjg3p54DeQ/FnUL5Dczkk0gj0Jm2TCoSHY3AopFKuA/i2KhgN83udwpFvBnEAXNiBsVhxNjAR3qbyBfzZCHAn7SoLkAxordaVKwWMDrwpWxgB+ULUP1GazBtyUXFS9eCOR3yhhLBfziy5DdozUY1ryWTJDgxVbXZA1DvgFrLK8xkBtcv3WScYqtF5I1TMQCvtlhF8jnbcm5Ymm5Ur4F8sWiYgFvZsTnQEZz+4ViB2ZpbltUmNvfygzpZ7LGMcWLF9LcNigVrWELOATJM1uRt4rnuExecTJuKBmsyZLRi5LfUipCiiXbzAXFueAvFcMUGyPEib1bvUE6Y5RnyNoU7Ir9dtnw2yjlEcXLZEMzhF3jDLHDNjVPBH6pmKV279wFugWyhG3ZRxTXmlgeVHzZLVzqyIlb5+OscDdcuOjg1pZZyFeKo2RaWTgmjyneL5zChatXLOR+4SZUOCx4v9FfQIuQoBO7FgEKx1aCdxUfKpzcXkFyxXi7wsB2xcQ5K5ysWkAs+XpxceO2d97i0Cx9fPRxZ0jv5iqdL3qgK8d/rkfbT0xmercFk7QRSouTb3PSYVj8FCPbCZHtVKSNBQIEiUwidL53K5UO7t0cOUPLXG2SC/eEm7lIWS6hERYUTrzmwvrJdUpwBvb0rpLcizwgPB0Sm3rzJEc0UV2n/WuwsgcdoxGZ4H5TcK6475tnjM5e3KUDExP72DU4bWUBp7GXT+nA81SKYY+bfi4ATmu4/LkXj+WvCAaKHVmCq+yvjOH5Ih60gEWKLZmCS5RxSbur1rzLEhgpNmQFruRZzkvwx0OTAhZqdq87qJQpO6zd1JZCFQXnYDIaFY4zGyPB1LS+vnSAUcauyM3DpM2+dQYy4JzbmF0OfNANMNLL1WxPNqofo4GMsUrPk3QXyAeMkyjrxegOXnI2X4Ijnf8dzhG42+RC8AwvGewz0Bg8nK5gcLLFBWiBtFDzVdu8CEb2wpOlPgGwUYgfuxSUVETfn0FV7FO/BAtSRR7TFdocuL/izqQukAmWaPzlZpui/ReTGXTwrIoAthjNWAeDLDH4L1ozUPCsilScsI3DWFmDPMBdQo7udWCObEwIBQYJaXGDUAxVB1aZj/zTTwSk5dTDYvA68ADALD29NQiZCoOpsnZt4k5AVwPThAa6EtxkNp4LPriDwbM5bmNzCXsU3GbLdYYdsCImbGMF6ti3JYcMdVzYwu/ArAywkEPqWlCyrX/i0Dksq9dgDgs/cZ7idzaGrDAJR6igtgXdcTsMLGQwWMhnbQsasY05LL1C6wrsRxUtqMFNcyh1HQltWdWCaNMBt01d14TSLx+7zs+Vkxk0p/jNcGg6H4jm0HQ+EOOh6XwgKrKsWqh5DJvJ0v103Gqeq/oxWPvjlOJTAXyqbO8FG4cpJfRvM7u39uN7oTgmeV65aPgfLtte+0lfTPChfllc+7MET9m2uD7ypokT3MkzIqt68JAVZ8DcbL+v68GgWSybEpxgzXJPP4ffuE1nCdZsbRLd/yITHU6w5uuGXb1Co+cc0bqqefGkygWvmVLMlLBzCjDN1DTPuluafTOOW4r/AzgUdo8fGjGhAAAAAElFTkSuQmCC')
        background-size 100% 100%
        position absolute
        top .1rem
        left 50%
        transform translate(-50%)
        z-index 9
      .old-new-container
        display flex
        .left
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAAFSBAMAAAB1Vcs0AAAAD1BMVEVHcEz39/f4+Pj29vb///9A7MA4AAAAA3RSTlMAtlAjgpwUAAABxklEQVR42u3ZQU7CABBAUY7AETiCUC6g9P5nMlgVCm03Jvpj3my7efmZdjHdDY3ZrU9E+JIXHvPCjYhDPmJFeN7XhcNrXrga8fpw/Ou5bEXsCId9WDgRj2XhuBGxJDyWhRubGBFubGJKuBixIlzfxIxwNWJGOBFPeeH5EBZOm/hWFq5EDAmniKeycDliSbgcMSWcvomHsHAxYku4FLElXIoYEy5EjAkXItaEzxFrwueIOeFTxJxwfDzW9YSPEXvCx4hB4WV+ew8KHyIWhfOIReE8YlI4ixgW7sPC2dm4KRzvbu9h4WfEqPAuYlV428S08ON1rgpvZ+O28BoxK/w+G3eFX3+B6sJjWTgRCX/+OqeFIyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhvxSmh5CQkPB35h0eK3LzVqqCfwAAAABJRU5ErkJggg==')
          background-size 100% 100%
          margin-right .05rem
        .right
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAAFSBAMAAAB1Vcs0AAAAD1BMVEVHcEz39/f4+Pj29vb///9A7MA4AAAAA3RSTlMAtlAjgpwUAAABxklEQVR42u3ZQU7CABBAUY7AETiCUC6g9P5nMlgVCm03Jvpj3my7efmZdjHdDY3ZrU9E+JIXHvPCjYhDPmJFeN7XhcNrXrga8fpw/Ou5bEXsCId9WDgRj2XhuBGxJDyWhRubGBFubGJKuBixIlzfxIxwNWJGOBFPeeH5EBZOm/hWFq5EDAmniKeycDliSbgcMSWcvomHsHAxYku4FLElXIoYEy5EjAkXItaEzxFrwueIOeFTxJxwfDzW9YSPEXvCx4hB4WV+ew8KHyIWhfOIReE8YlI4ixgW7sPC2dm4KRzvbu9h4WfEqPAuYlV428S08ON1rgpvZ+O28BoxK/w+G3eFX3+B6sJjWTgRCX/+OqeFIyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhvxSmh5CQkPB35h0eK3LzVqqCfwAAAABJRU5ErkJggg==')
          background-size 100% 100%
          position relative
        .old-new-item
          width 1.61rem
          height 1.69rem
          display flex
          flex-direction column
          align-items center
          .tag-new
            background linear-gradient(90deg,#fc7957,#f54561)
          .tag-old 
            background linear-gradient(90deg,#75bae5,#5357df)
          .tag-item
            width .61rem
            height .18rem
            color #fff
            text-align center
            line-height .18rem
          img 
            width .8rem
            height .8rem
            margin-top .1rem
          h5
            width 1.29rem
            color #111
            line-height .22rem
            font-weight 600
            font-size .12rem
            margin-top .08rem
            text-align center
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          p
            font-size .12rem
            font-weight 400
            color #999
            line-height .14rem
            padding-top .05rem
            display flex
            align-items center
            span 
              color #111
              font-size .14rem
              font-weight 400
              line-height .14rem
              margin-left .02rem
      .ready-replace        
        margin-top .08rem
        display flex
        justify-content space-between
        align-items center
        .ready-replace-left
          color #111
          font-size .14rem
          font-weight 500
          line-height .2rem
          display flex
          align-items center
          .tag-money
            width .29rem
            height .2rem
            margin-right .04rem
            display inline-flex
            background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAoCAMAAACYexmKAAAA8FBMVEVHcEz98q77sTb68KL/55r76IT88a7+8rH987P+7an8xD778av78Kf98rP98q788aj88az78Kb676H78KT675/92Uv57p357pr90z757pj8sDj/7WL/51v+zUf56IL+2FP9wj//6mX/7WL/7WL/7WP62mf+4lv9zzz/7WL90D79uD376IL+4FX74nD9vD7533H8sz3/7GL9z0D8zD/7yDb9zjv/xC/8vz790z/7uDz8uz76sTT9yED7sjz/5Fn/3U/8wzn8wj791k/7tTz/6V79xT/7uDT7xDP9vif+1UT/yTX/4VT+2kv8vTj7uCD+3VheMqzVAAAAMXRSTlMAaPW1BxJeMk4g7oeQP3OZfKLBrM5P3Otg+ubyffP9Pc62xuSY2Oyc2qh20t3nrtS0uQky6AAAA4hJREFUSMeVlml7mkAUhRM1G02a1sQsLjH70n0GBgfZFFBEUf7/v+m5gAla2pr5gs+jZ86d99w7uLW1XN32zXOLte5u7y92tt6zGs8siIWmh5qcMXb/DnGbsXgxwdIni0UYsLvNtS3GJro+FVEspvpCMNbeVFl7ZEzous5dN8Ijfo/USHDUqT7F0jkOGz9tKt2xbctlLHBmMwePmMuXjaWm7RvGiHtYkVC5FE+1xv3tXRZWo/ZPV9M0+v1ebziyLJVzTXxrsSAS4SQUUcBa7b+J99o3TsCCwEm80XAwCDVNomyxSLNCWAB+Uyrs3oIK18KsGRKVXCPG3DSsOKKwQLxborygXy3yZpg4LOCqpmlgNUVKketyPFBDo0T6zBi+1PNmgCYOVT7q4QBRFtY0os8XJdJvjNHGwnVjsoFU5WJs+xxWyIrCcmIhy6SVBBXT/rrQBTWDACbL9H1jbkUUFhccYZUVbNqjYjNIiVj5wDZ9CmuIsFRUoZW7UjMMs2bAr6TUgGlu2745Hs97WVZCyjLXlWZQ0QwaYaLuItdB6sqFKHNt+rT/eD4cDkJqBrhyPsaG5mvBZFtaME5lwLU3TF1hu8REBQ+o4L9hqqQV5wVraKnNMTVt2j81CEOaGbExpso6JhFyd4ZxYDQO1hLTzafd/b2D2rrrKiaaGlem44DAHZ5hejj5fHz44dN2Ub/ElLtyydjsbRxmLFBTTA/VVPpxe3f/Vb2KSdPgGVJPS5cLTCt8U0wP1ZPPS+nRXiYmTEYBE1qaLsUpxgFjhymfpZh+QnqcSndTKWnXMRk0DiIfBzqsJEz8azU/LGyPjiDdqa1jcnu25eXjENC8Samiv+RS+rEgXcUUsQR91B95nut6npWNAzA91qsFTrnUXMWE26lfJB4jHB59P63XqyfHRU7kuoLJsgjpfE7SkeW5gRN7ydX52elp/ZVTLl0fOsvuAVMwi+PYRUxJjFvy8vz87KwgTRHXslEvYjJsv295SeKAk4dD4k67unx1XXLKeqJZWR06wy++BiJYk/SsIN1ftmLTrlTeMCnKSOlYvXTaLNVD8Sy+oopPc8TbR28v7QYwKZXxXFEGA6XDZceudB4DBwuxsiCJZC6tVw9391Zf9t3rYje9HPxCsIrS8dKLFKdNLiGt/yHL1sGXH9cK1vVT+t/lS7NwQXjfq4fFIv+3urRXR7l+af/r1fobbdExANOCY+UAAAAASUVORK5CYII=')
            background-size 100% 100%
          span
            font-size .18rem
            color #fc6232
            font-weight 700
            line-height .13rem
            margin-left .04rem
        .button
          width 1.2rem
          height .36rem
          background linear-gradient(90deg,#fff03b,#ffd629)
          border-radius .04rem
          border 0
          font-size .14rem
          font-weight 500
          line-height .36rem
          text-align center
   .replace-list
    display flex
    margin-top .1rem
    .replace-item
      width 1.09rem
      height 1.37rem
      display flex
      flex-direction column
      align-items center
      position relative
      background #fff
      border-radius .04rem
      margin-right .1rem
      box-shadow 0 0.01rem 0.05rem 0 hsla(195,9%,83%,.4)
      padding .15rem 0
      box-sizing border-box
      img 
        width .54rem
        height .54rem
        display inline-flex
      h5
        width 1rem
        padding-top .14rem
        font-size .12rem
        color #333
        font-weight 400
        line-height .16rem
        text-align center
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      p
        margin-top .1rem
        font-size .1rem
        color #666
        line-height .14rem
        font-weight 400
        span 
          font-size .12rem
          font-weight 600
          line-height .13rem
          color #fc6232
          margin-right .02rem
      .replace-tag
        position absolute
        top .04rem
        right .1rem
        width .28rem
        height .28rem
        color #fff
        background linear-gradient(180deg,#ffab6a,#ff1767)
        border-radius .48rem .48rem .48rem 0
        font-size .08rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        flex-wrap nowrap
        white-space nowrap
        padding-top .04rem
   .coral-text
      color #333
      font-size .12rem
      overflow hidden
      position relative
      height 40px
      line-height 40px
      background: #f8f8f8
      padding-left .1rem
      margin-top .17rem
      .text
        padding-left .3rem
        .item
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
    .coral-text::before
      content ''
      position absolute
      top 50%
      transform translateY(-50%)
      width .12rem
      height .16rem
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAADYUlEQVRIS62WS2xMYRTH/+c+OiUMEc+wIB4bSe2EVqMrjwURj9h5xcYrEY3RsJmtIHYiJA0bERWdqURJBOlMIiwsEAuVsEDiURrTTltu71/ud9/tTGd0zGZe5zu/75z/eVxBlS8eb5kJsfJ2b/KP9o3r5Vn3r2qOSjVGjg1bmzfS5n377QywaGwyH2cfVHO2esCJ5h0kb9tvk8CQud14lO2sGcBUyyJY1lEItoFYQUI8gE3ytUZ0aInEJXnQ8aMcrGQE3AUdi9edBJEmmQAFoOti1ImgaHjf1e8FoXbc6OlsLwUZB2B6ZR2KMztoY6s64Dv3AK4GuusrAhbist6TPRxexTUZD0g13SSx27+xeo9A7N6kI3I0Ag/m2OGcmcumopHEAEw17gfQTjpkAW3PNAYoHYFzEaE42mw089mHPiQAMN1Sj6HfH0jMEwpcCMBxKSoXgbJ2on1l5DKr/FSFgLamgyCvKhsKRL2PiQBAqEEk2yqNXsbVZ3uzme+6H9OAp9Z2EbIlcOzcXAkZF9Mp01AD77+onRJWLhu5zkNxQFtjP4gZvsPw9nEnAWBMFcUiAN6YuczKAMBU03QI1WxRjiPlNzaCEn0QRuqo5qarYOYzyRDQtmYxqL33Ab7I/9IHcQ1gG/mM4eBUonmycSk0vHPgrgZjBQxuhon7IKgZy8xlzDACD+CLOtk+8O7rpMgy82UAynltfeDcs1IENfZBOUCoQYn6DoZd5T4onSId77wSU9rX2AflU/Sf+qA6kSfdB+M0ON28AOQNJGfPxbRZC2FOUSMj0ET1h9sL9qepwIgeT6HbP8TgcJ/d9/Oz9P36YvTc2aD6gKOFIyD3gNIAsD66LGr4XIDIC+jaeaFVuA1yRw3OJjgqaeGLrnsYGtgcrEjf3J/v/ij2V0N/HWg5IyGyDP29ETsLaH+si8LTzcOwRxOxnPsTdZL7wC93gRSFt9JPMVJcEyyXcOS6QX3sBX58DUZybB/MmwNZvsT7L7Kg1C8CDAx1CMnpQCFRNpFndp7lcPFAqecimTK1Xb935VR5EQaKFR8d2dq0l5RrPiD6XCTU9xlPOq9PVCCVAceWJVA3/zltNKg+8J6LNMhLrf73aunuHqkJoHRubZkNWhdA2aoAg0aXTrtVntz9Xqm8/wIsiWfGqfFvOwAAAABJRU5ErkJggg==') no-repeat
      background-size 100%
</style>



