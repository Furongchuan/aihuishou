<template>
  <div class="app">
    <header class="app_header"><Header></Header></header>
    <div class="app_main">
      <router-view></router-view>
    </div>
    <footer class="app_footer"><Footer></Footer></footer>
  </div>  
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Home from 'home/Home'
export default {
  components: {
    Header,
    Footer,
    Home
  }
}
</script>

<style lang="stylus" scoped>
.app
  width 100%
  height 100%
  display flex
  flex-direction column
  header,footer
    width 100%
    background #fff
  .app_header
    // height .44rem
    flex 44
  .app_footer
    flex 49
    // height .49rem
  .app_main
    flex 574
    overflow-x scroll
    // background #fff
</style>

