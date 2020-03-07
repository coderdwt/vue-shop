<template>
  <div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "./components/content/mainbar/mainTabbar";
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import "assets/csss/base.css";
</style>
