<template>
  <div v-if='hasSalephoneData.length != 0'>
      <!-- <Saleinfo :saleInfo='getSalephone.data'></Saleinfo> -->
      sale
  </div>
  <div v-else>   
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from '@/components/layout/Loading'

import request from 'utils/request.js'
import { watch } from 'fs';
export default {
  data() {
    return {
      hasSalephoneData: []
    }
  },
  components: {
    Loading
  },
  async created() {
    this.getSalephone = await request({
      url: 'portal-api/common/channel-info/20'
    })
    this.hasSalephoneData = [Object.keys(this.getSalephone)]
    console.log(this.$route.query.id)  
  
  },
  watch: {
    $route(){
      console.log(this.$route.query.id)
    }
  }
}
</script>

