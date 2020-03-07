<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabcontrolitem" 
    :class="{active:index===currentindex}" @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'tabcontrol',
  props:{
    titles:Array
  },
  data(){
    return{
      currentindex:0
    }
  },
  methods:{
    tabclick(index){
      this.currentindex=index
      this.$emit('tabclick',index)
    }
  }
}
</script>
<style scoped>
.tabcontrol{
  height: 44px;
  display: flex;
  text-align: center;
  flex: 1;
  line-height:14px;
  background-color: #fff;
}
.tabcontrolitem{
  flex:1
}
.active{
  color: pink;
}
.active span{
  border-bottom: 3px pink solid
}
.tabcontrolitem span{
  padding: 5px
}
</style>