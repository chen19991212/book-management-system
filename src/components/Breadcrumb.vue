<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
   <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
    <span v-if="index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
    <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
   </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp';
  export default {
    name:'Breadcrumb',

    data() {
      return {
        levelList: null
      };
    },
    watch:{
      $route(route){
        if(route.path.startsWith('/redirect/')){
          return 
        }
        this.getBreadcrumb()
      }
    },
    created(){
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb(){
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
        const first = matched[0]

        if(!this.isHomePage(first)){
          matched = [{ path: '/home', meta: {title: 'home'}}].concat(matched)
        }
        this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)

      },
      isHomePage(route){
      const name = route && route.name
      if(!name){
        return false
      }
      return name.trim().toLowerCase() === 'Home'.toLowerCase()
    },
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item){
      const {redirect,path} = item
      if(redirect){
        this.$router.push(redirect)
        return 
      }
      this.$router.push(this.pathCompile(path))
    }
    },
};
</script>

<style lang="less" scoped>
  .breadcrumb{
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 16px;
  }
</style>
