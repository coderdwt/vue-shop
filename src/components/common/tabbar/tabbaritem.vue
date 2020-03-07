<template>
  <div class="tab-item" @click="itemClick">
  <div v-if="!isActive"><slot name="icon"></slot></div>
  <div v-else><slot name="active"></slot></div>
  <div  :style="activestyle"><slot name="thename"></slot></div>
  </div>
</template>
<script>
export default {
  name:"tabbaritem",
  data(){
    return{}
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activestyle(){
      return this.isActive?{color:this.activeClor}:{}
    }
  },
  props:{
    path: String,
    activeClor:String
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
}
</script>
<style scoped>
.tab-item{
  flex:1;
  text-align: center;
  height:49px;
  font-size:14px
}
.tab-item img{
width: 24px;
height: 24px;
margin-top:3px;
vertical-align: middle
}
</style>