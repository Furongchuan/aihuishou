<template>
  <div>
    <div v-if='hasRecommendedData.length != 0'>
      <Banner :bannerData='bannerData'></Banner>
      <Info :infoData='infoData' :luckuserData='luckuserData'></Info>
    </div>
    <div v-else>   
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/layout/Loading'
import request from 'utils/request.js'
import Banner from './Banner'
import Info from './Info'
export default {
  data() {
    return {
      hasRecommendedData: []
    }
  },
  components: {
    Banner,
    Info,
    Loading
  },
 async created() {
  this.getRecommended = await request({
    url: 'portal-api/common/channel-info/7'
  })
  this.luckuser = await request({
    url: 'portal-api/home/coral-orders'
  })
  this.luckuserData = this.luckuser.data
  this.bannerData = this.getRecommended.data.find((item) => {
    return item.type === 'selfPhone'
  })
  this.infoData = this.getRecommended.data.filter((item) => {
    return item != this.bannerData
  })
  this.hasRecommendedData = [Object.keys(this.getRecommended),Object.keys(this.luckuser)]  
  }
}
</script>


