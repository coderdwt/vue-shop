<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import bscroll from 'better-scroll'
export default {
  name:'scroll',
  props:{
    probeType:{
      type:Number
    },
    pullUpLoad:{
      type:Boolean
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll=new bscroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    }),
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    }),
    this.scroll.on('pullingUp',()=>{
      this.$emit('pulling')
    })
    this.scroll.refresh()
  }
}
</script>
<style scoped>

</style>