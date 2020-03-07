<template>
  <div class="goods" @click="goodclick">
   <img :src="goodsitem.show.img" alt="" @load="imageLoad">
   <div class="goods-info">
   <p>{{goodsitem.title}}</p>
   <span class="price">{{goodsitem.price}}</span>
   <span class="collect">{{goodsitem.cfav}}</span>
   </div>
  </div>
</template>
<script>
export default {
  name:'gooditem',
  props:{
    goodsitem:{
      type:Object
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('imageLoad')
    },
    goodclick(){
      this.$router.push('/detail/'+this.goodsitem.iid)
    }
  }
}
</script>
<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%
  }
  .goods img {
    width: 100%;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }

</style>