<template>
  <div id="home">
    <NavBar class="homenav"><div slot="center">购物街</div></NavBar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll"
    :pullUpLoad="true" @pulling="contentmore"
    >
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" @load="imageload">
      </a>
      </SwiperItem>
    </Swiper> 
    <recommend :recommends="recomends"></recommend>
    <feature></feature>
    <tabControl :titles="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick"
    ref="tabcontrol"></tabControl >
    <goodslist :goods="goods[currentType].list"></goodslist>
    </scroll>
    <backtop @click.native="backtop" v-show="isshow"></backtop>
  </div>
</template>
<script>
  import NavBar from '../../components/common/nacbar/navbar'
  import {getHomedata} from '../../network/home'
  import {Swiper,SwiperItem} from '../../components/common/swiper/index.js'
  import recommend from './Homerecommend'
  import feature from './Featureview'
  import tabControl from '../../components/content/tabControl/tabControl'
  import {getHomegoods} from '../../network/home'
  import goodslist from '../../components/content/goods/goodslist'
  import scroll from '../../components/common/scroll/scroll'
  import backtop from '../../components/content/backTop/backTop.vue'
export default {
  name:'home',
  components:{
    NavBar,
    Swiper,
    SwiperItem,
    recommend,
    feature,
    tabControl,
    goodslist,
    scroll,
    backtop
  },
  data(){
    return{
      banners:[],
      recomends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isshow:false,
      tabOffset:0,
      isTabfixed:false
    }
  },
  created(){
    this.getHomedata(),
    this.getHomegoods('pop'),
    this.getHomegoods('new'),
    this.getHomegoods('sell')
    
  },
  mounted(){
      
  },
  methods:{
    getHomedata(){
    getHomedata().then(res=>{
      this.banners=res.data.banner.list
      this.recomends=res.data.recommend.list
    })},
    getHomegoods(type){
      const page=this.goods[type].page+1
      getHomegoods(type,page).then((res)=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      })
    },
    tabclick(index){
      switch (index){
        case 0:
        this.currentType='pop'
        break
        case 1:
        this.currentType='pop'
        break
        case 2:
        this.currentType='new'
        break
        case 3:
        this.currentType='sell'
        break
      }  
    },
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentscroll(position){
      this.isshow=-position.y>1000
      this.isTabfixed=(-position.y)>this.offsetTop
    },
    contentmore(){
      this.getHomegoods(this.currentType)
    },
    imageload(){
      this.tabOffset=(this.$refs.tabcontrol.$el.offsetTop)
    }
  }
}
</script>
<style scoped>
#home{
  height: 100vh;
  padding-top:44px; 
}
  .homenav{
    background:pink;
    color:#ffffff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
  }
  .tabcontrol{
    top:50px;
  }
  .content{
    height:300px;
  }
</style>