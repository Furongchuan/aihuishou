<template>
  <div class='header_content'>
    <a class="city">北京市<span class="iconfont icon-iconfontxiangxia"></span></a>
    <a class='search'><span class="iconfont icon-Search"></span></a>
    <a class="cart"><span class="iconfont icon-cart3f"></span></a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '~assets/iconfont/iconfont.css'
.header_content 
  width 100%
  line-height .44rem
  display flex
  a
    font-size .14rem
    color #000
  a.city
    flex 295
    padding 0 .15rem
    span 
      font-size .12rem
      padding-left .05rem
  a.search,a.cart
    flex 40
    text-align center
    span 
      font-size .18rem
    
</style>
