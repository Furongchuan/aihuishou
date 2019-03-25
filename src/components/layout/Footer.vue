<template>
  <div class="footer_content">
    <router-link  v-for="(imgMsg,index) of imgList" :key=index :to="{name:index+1}" tag="div" >
      <img :src="clickNum === index ? imgMsg.highLightImageUrl : imgMsg.defaultImageUrl" alt="" @click=handleClick(index) >
    </router-link>
  </div>
</template>

<script>
import request from 'utils/request.js'
export default {
  data() {
    return {
      imgList: [],
      clickNum: 0
    }
  },
  
  async created() {
    let imgData = await request({
      url:'portal-api/home-tab',
      params: {
        cityid: 13,
        latitude: '',
        longitude: ''
      }
    })
    this.imgList = imgData.data

  },
  methods: {
    handleClick(index) {
      this.clickNum = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer_content
  height .48rem
  display flex
  justify-content center
  div
    width 100%
    z-index 99  
    img 
      height .48rem
      z-index 1
</style>