<template>
  <Tabbar>
    <tabbaritem path="/home" activeClor="blue">
      <img slot='icon' src="../../../assets/img/tabbar/首页.svg" alt="">
      <img slot='active' src="../../../assets/img/tabbar/首页 (1).svg" alt="">
      <div slot="thename">首页</div>
    </tabbaritem>
    <tabbaritem path="/kind" activeClor="blue">
      <img slot='icon' src="../../../assets/img/tabbar/分类.svg" alt="">
      <img slot='active' src="../../../assets/img/tabbar/分类 (1).svg" alt="">
      <div slot="thename">分类</div>
    </tabbaritem>
    <tabbaritem path="/shop" activeClor="blue">
      <img slot='icon' src="../../../assets/img/tabbar/购物.svg" alt="">
      <img slot='active' src="../../../assets/img/tabbar/购物 (1).svg" alt="">
      <div slot="thename">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activeClor="blue">
      <img slot='icon' src="../../../assets/img/tabbar/我的.svg" alt="">
      <img slot='active' src="../../../assets/img/tabbar/我的(1).svg" alt="">
      <div slot="thename">我的</div>
    </tabbaritem>
  </Tabbar>
</template>
<script>
import Tabbar from '../../common/tabbar/tabbar'
import tabbaritem from '../../common/tabbar/tabbaritem'
export default {
  name:'mainbar',
  components:{
    Tabbar,
    tabbaritem
  }
}
</script>