<template>
  <div class="layout">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <NavBar />
      </div>
        <router-view></router-view>
    </div>
    
    
  </div>
</template>

<script>
import { Sidebar, NavBar } from './components';
  export default {
    name:'layout',
    components:{
      Sidebar,
      NavBar
    },
    data() {
      return {
        fixedHeader: true
      };
    },
    methods: {
      
    }
};
</script>

<style lang="less" scoped>
  .layout{
    height: 100%;
    .main-container{
      width: calc(100% - 210px);
      margin-left: 210px;
      position: relative;
      .fixed-header{
        width: calc(100% - 210px);
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
      }
    }
  }
</style>
