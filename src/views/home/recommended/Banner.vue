<template>
  <div class='home_header_img'>
    <Imgcard :imgcardurl='imgcardurl'></Imgcard>
    <div class="coupon-container">
      <dl>
        <dt>
          <div class="coupon-image">
            <p>
              <i>￥</i>
              <span>100</span>
            </p>
          </div>
          <div class="device-info">
            <a>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA0CAYAAADBjcvWAAAFYUlEQVRoQ+2aTWzcRBiGX9v7mw3bXUgilJKQBghtIkUEBGoFOZRbq6IeglqoOBCQeqLlUiQQBLUKcAJxAQkVpHLgBKKHSqhEQBqpPQBCiIJCRZOqSYtIsiUh2/zsetf2oM9eZyfO7I83ITZV5+a1157H7zff986MJcYYwy3YpNtg/zNVbysmEiy1ZODUz8u4PKtB34CRKgGoC0poTyro64qiLaHUHCfrUmxwZBHjc1rJh7dsUXA9rZvnO5sCCAeo61b7Z9nAxLx1ztkCMtDZGMCRnTGElOJ/3FDWDKZqDIfPpMs+64m2EC5M5Mxr9m0PI8qBTS0YuDBpnRO1exMKnuuOoqMh4IZn5dqawdIZA0fP3jRvRG84EZEhuXy5PChF8lKOYS5jmPcktfc/GMGj9wQ3F2wqrePV7xbQmlDQ/0idOTbcNIowPszyBoNmAFM3dXz04zIaYzL23BfG420hN7ddv2I22PMPR7GjyeVbZUA4AMgFickjZLnhduZSFtfmdW/BXtoVM8PGTaPQDcpFhXM6W5VVh6+o+D2leQN2amQJI3N51AIWUQCpoJZBaml0XHw1566oGPUKrHdgBu09YddgQZmSTZEiqzE4S+D5qyouTnuk2N53bqBxe9AVGOHQ2JJggWkGQ95KgiuNwEmxX7wCs5OHm1AMyYBSUIt0ohDkmwmuAN+OW2CZlI73nk24Gb4blxWrBaNOR8xaa6mV1xk0Rwza4N+MZU2wmUkNH7+Q3FywT0eWcM5F8uDVooShklpcwrDArR88BXOTPGRzbBUpVJ3BcKqlAEohNXoKtuftG2jaUV3yoHFjF2OdMeQc3tcJPjSWxa/TGpZmDLx/aMvmhuJf8zpeG16omBV560QOQ9WxJr3z4HTN2cse1rGqsqLDOtl+kJfA6RmpBAyNeeg8qkkevHVy+kETjlmZ0nYhdgnw1FJVkzx46+T0g8RVyuF7ClYpefDWyUzvgskyD07yZQoF21OwcsnDdhBWiFk1y+GcQNk/yE37eXvlKVi55MGrJfKDFIbm2Fqp0EW16JwvwXjrVCq9O+djms6Q5wq2L8FCnIMQ+cHVYWqlRjLDvBHxHRgZ93Bh3Ij8IGE452O6wZBzDEDfgfEOgpbnnAnDsk5Fhy9Sy3djjK9JIhWow7zDp+NS1/lKMbsmCR0GyAQXw9S2VKJlAV8pti2prKw6ifwgdZYP03Jq+QbsyK4Y7r9LMWuSG7VEczJbSV+E4iu9tK5ora+L/CDlcX5x1FRLMCfjHb8vwN58sh4NdQpE64Mio0u/lVPLN6E4QGBRWTiBNK0TtzhKx6UMse8UG9hdj2RUXrM+SB11Gt1q1PKNYm/srscdYSq9a1stavkG7FhvDI2xtZsSTutkqiVwI6IX4ovk8Ux3FD3Nq7eRnIuj1Y4tG/Lz3zJILRre7LbY87FERMLB7iia41TLrEYhaC9l250ltZwrv061dAMYTeVxejSLrXHFWzDh4FrzI0NH6A+E5SwuZbugofJGIe25ebqjWQ3Y4eSH2Fn/vXnpNbUVb6WOV4TzPVirPI7jW0+s4v8sdRDD6r6y78T3YA/hPI62nFwF8WXqKXylHvAn2NyigZe/TkPmdidFPQ2zRbybeBGxuLX7b2QzGJw+gUmlqywYzRj2bgvjsc3+aiCTYzjwySzuvLvyBybt+Z/wdOAkInIWQ2offgjtLwtVF5KQkCT090TR4Sgl1YxpuqbmD1joz/0fzOJ6xkAs7v7jFVEHZRmI18mQVIa/Z3ScPtaAILf9VC3UusH+nNUx+EUaFyfyoCW0jWgU2Q80B/F6XxydLZXLQqlnrkuxjQD5r+5xy4L9C/PK+ZKRkZrqAAAAAElFTkSuQmCC" alt="">
              <p>选择机型查看优惠</p>
            </a>
            <div class="product-price-info">
              <span>最高加价:</span>
              <p class="price">
                <i>￥</i>
                <span>100</span>
              </p>
            </div>
          </div>
        </dt>
        <dd>
          <div class="time-container">
            <p>
              <span>{{time.dd}}</span><i>天</i>
              <span>{{time.hh}}</span><i>时</i>
              <span>{{time.mm}}</span><i>分</i>
              <span>{{time.ss}}</span><i>秒</i>
            </p>
          </div>
          <div class="recycle-button">立即回收</div>
        </dd>
      </dl>
      <a class="ofn-container">
        <div class="lest_content">以旧换新 | 官方正品新机</div>
        <div class="right-contetn">换新优惠6折起</div>
      </a>
    </div>
  </div>
</template>

<script>
import Imgcard from '@/components/layout/Imgcard'
export default {
  props:['bannerData'],
  data() {
    return {
      info: {},
      imgcardurl:'',
      nowDate: '',
      time: {}
    }
  },
  components: {
    Imgcard
  },
 created() {
  let bannerInfo = this.bannerData.item.coupon
  let {endDate, headImgUrl, moneyImgUrl, price} = bannerInfo
  this.imgcardurl = headImgUrl
  this.info = {endDate, moneyImgUrl, price}
  
  setInterval(() => {
      this.nowDate = new Date().getTime()
  },1000)
 },
 watch: {
   nowDate() {
    let leftTime = this.info.endDate - this.nowDate
    if(leftTime > 0) {
    let dd = Math.floor(leftTime / 1000 / 60 / 60 / 24)
    let hh = Math.floor(leftTime / 1000 / 60 / 60 % 24)
    let mm = Math.floor(leftTime / 1000 / 60 % 60)
    let ss = Math.floor(leftTime / 1000 % 60)
    dd = dd < 10 ? '0'+dd : dd;
    hh = hh < 10 ? '0'+hh : hh;
    mm = mm < 10 ? '0'+mm : mm;
    ss = ss < 10 ? '0'+ss : ss;
    this.time = {dd, hh, mm, ss}
    }else {
      this.time = {
        dd: '00', hh: '00', mm: '00', ss: '00'
      }
    }
   }
 }
}
</script>

<style lang="stylus" scoped>
@import '~assets/border'
.coupon-container
  padding 0 .1rem
  height 2rem
  background #8136EA
  dl
    width 100%
    height 1.47rem
    background-color #fff
    border-radius .04rem
    position relative
    dt
      height 1.07rem
      display flex
      .coupon-image
        width 1.42rem
        height 100%
        background-image url('data:image/png;base64,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')
        background-size .93rem .74rem
        background-position center .23rem
        background-repeat no-repeat
        position relative
        p
          position absolute
          height .4rem
          display flex
          align-items center
          color #ff5647
          font-size .28rem
          font-weight 600
          left 50%
          top .28rem
          transform translateX(-50%)
          i
            position absolute
            font-size .12rem
            color #ff5644
            font-weight 400
            top .03rem
            left -.09rem
      .device-info
        padding-top .3rem
        width 2.14rem
        padding .3rem .1rem 0 0
        a
          height .28rem
          width 1.5rem
          background #f8f8f8
          padding .01rem 0 .01rem .32rem
          display flex
          align-items center
          position relative
          margin-bottom .06rem
          img
            width .27rem
            height .26rem
            position absolute
            top .01rem
            left .01rem
          p
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #0e0e0f
            font-size .13rem
            display block
        .product-price-info
          display flex
          align-content center
          margin-bottom .03rem
          padding .07rem 0 .07rem .01rem
          span 
            font-size .14rem
            line-height .2rem
            color #333
          .price
            font-size .14rem
            line-height .2rem
            color #fc6232
            font-weight 700
            i 
              font-size .12rem
            span 
              font-size .14rem
              line-height .2rem
              color #fc6232
              font-weight 700
    dd
      border(1px 0 0 0 )
      width 100%
      height .4rem
      position relative
      display flex
      align-items center
      justify-content space-between
      padding-right .1rem
      .time-container
          display flex
          align-items center
          height 100%
          padding-left .1rem
        p
          height .13rem
          display flex
          align-items center
          span 
            width .17rem
            height .17rem
            border-radius 1px
            display flex
            align-content center
            justify-content center
            color #fff
            background #000
            font-size .11rem
          i
            font-size .1rem
            color #333
            margin 0 .06rem
      .recycle-button
            background-image linear-gradient(-90deg,#ffd629,#fff03b)
            border-radius .03rem
            color #333
            font-size .14rem
            font-weight 700
            height .28rem
            line-height .28rem
            width .86rem
            text-align center
    dt::after
      content ""
      background-image url('data:image/png;base64,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')
      background-repeat no-repeat
      background-size 100%
      width .67rem
      height .57rem
      position absolute
      left -.03rem
      top -.03rem
  
  .ofn-container
    font-size .12rem
    line-height .17rem
    display flex
    justify-content space-between
    background #fff
    border-radius .04rem
    margin-top .1rem
    padding .08rem .1rem
    position relative
    color #000
    .right-contetn
      color rgb(255,98,50)
      padding-right .15rem
  .ofn-container::after
    content ''
    position absolute
    right .1rem
    width .06rem
    height .1rem
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAA1ElEQVQ4T63TO05CQRTG8d81xAZKNsAGKFyBOyBQSFwAmrgCK1dgozvwQWVDBy1SEnpjT2y1svKRY+YmhPC4k3iSySRz5j/nMd8pMMMJ3lSwAj9Yoov5PiaABY7wiTM87oICqOMevRTtGpf43gQGEBb7VVoHGOMUH+tQCZTnEeUODbygg9dVaB0IXxsjtPCeIk1KaBMQviaecIyvVFPU9pf7NqvhBhfpwkN0cRdQPnSOWxxi+q9AVkpZRWe1tfLHZUkjW3yr8h5guE/e2QP0jH7VEf0FqaQ3pe0rT/8AAAAASUVORK5CYII=') no-repeat
    background-size 100%
    top 50%
    transform translateY(-50%)
</style>


