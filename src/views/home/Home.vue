<template>
  <div class="home_info_content">
    <div class="home_info_tabber_content">
      <div class='home_info_tabber'>
        <router-link v-for="(tabberItem,index) of tabberList" 
        :key=index 
        :to="{name:tabberItem.channelId === 7 ? 'home':'sale',query:{id:tabberItem.channelId}}" 
        tag="div">
          <img :src="pageNum === index ? tabberItem.highLightIconUrl : tabberItem.defaultIconUrl" alt=""  @click=handleClick(index)>
        </router-link>
      </div>
    </div>
    <div class="nullContent"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Recommended from './recommended/Recommended'
export default {
  props:['tabberData'],
  data(){
    return {
      tabberList: [],
      pageNum: 0
    }
  },
  components: {
    Recommended
  },
  methods: {
    handleClick(index) {
      this.pageNum = index
    }
  },
  watch: {
    tabberData() {
      this.tabberList = this.tabberData.data
    }
  }
 
}
</script>

<style lang="stylus" scoped>
.home_info_content
  width 100%
  height 100%
  .home_info_tabber_content
    width 100%
    height .44rem
    background #fff
    position fixed
    z-index 99
    width 100%
    .home_info_tabber
      display flex
      width 100%
      justify-content space-around
      img 
        height .44rem
    .line
      width .3rem
      height .04rem
      background-image linear-gradient(90deg,#fffa8f,#ffd33f)
      position absolute
      bottom .05rem
      left .23rem
      transition all .3s ease-out
  .nullContent
    width 100%
    height .44rem
  
</style>


