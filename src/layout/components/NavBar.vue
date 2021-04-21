<template>
  <div class="navbar">
  <Breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <el-button round size="small" @click="logout" class="logout-button">登出</el-button>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
  export default {
    name:'NavBar',
    components:{
      Breadcrumb
    },
    data() {
      return {

      };
    },
    methods: {
      async logout(){
        console.log('click');
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }
    }
};
</script>

<style lang="less" scoped>
  .navbar{
    height: 50px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .logout-button{
      float: right;
      margin-top: 9px;
      margin-right: 16px;
    }
  }
</style>
