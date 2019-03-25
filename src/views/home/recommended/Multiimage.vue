<template>
  <div class="multi-image">
    <a v-for="item of imageUrl" :key='item.id'>
      <img :src="item.imageUrl" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: ['imageUrl'],
  data() {
    return {

    }
  },
}
</script>

<style lang="stylus" scoped>
.multi-image
  display flex
  margin 0 .14rem .1rem
  a
    flex 1 1
    margin-right .1rem
    img 
      width 100%
      display block
  a:last-child
    margin-right 0
</style>

