<template>
  <div>
    <Home :tabberData='tabberData'></Home>
  </div>
  
</template>

<script>
import Home from './Home'
import Loading from '@/components/layout/Loading'
import request from 'utils/request.js'
import { watch } from 'fs'
export default {
  data() {
    return {
      tabberData: {},
      hasRecommendedData: []
    }
  },
  components: {
    Home,
    Loading
  },
  async created() {
    this.tabberData = await request({
      url: 'portal-api/home-nav'
    })
  },
}
</script>
