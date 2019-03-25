<template>
  <div class='img_content'>
      <a>
        <img :src="imgcardurl" alt="">
      </a>
    </div>
</template>

<script>

export default {
  props:['imgcardurl']
}
</script>

<style lang="stylus" scoped>
.img_content
  width 100%
  img 
    width 100%
</style>
