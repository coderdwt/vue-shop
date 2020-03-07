<template>
  <div class="goods">
    <goodsitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></goodsitem>
  </div>
</template>
<script>
import goodsitem from './goodslistitem'
export default {
  name:'goodslist',
  props:{
    goods:{
      type:Array
    }
  },
  components:{
    goodsitem
  }
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}


</style>