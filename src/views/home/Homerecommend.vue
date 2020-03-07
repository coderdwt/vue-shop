<template>
  <div class="recommends">
  <div v-for="item in recommends" :key="item.acm" class="recommenditem">
    <a :href="item.link">
      <img :src="item.image">
    </a>
  <div>{{item.title}}</div>
  </div>
  </div>
</template>
<script>
export default {
  name:'homerecommend',
  props:{
    recommends:Array
}
}
</script>
<style scoped>
.recommends{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  border-bottom: 10px solid #eee
}
.recommenditem{
  flex:1
}
.recommenditem img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>