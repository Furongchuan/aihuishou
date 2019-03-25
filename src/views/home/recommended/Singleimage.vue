<template>
  <div class="single-image">
    <a>
      <img :src='imageUrl' alt="">
    </a>
  </div>
</template>

<script>
export default {
  props:['imageUrl']
}
</script>

<style lang="stylus" scoped>
.single-image
  margin-bottom .1rem
  img 
    display block
    width 100%
</style>


