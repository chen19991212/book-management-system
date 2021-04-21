<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="false"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        mode="vertical"
      >
        <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem'
  export default {
    data() {
      return {

      };
    },
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routes'
      ]),
      activeMenu(){
        const route = this.$route
        const { meta, path } = route
        return path
      }
    },
    methods: {

    }
};
</script>

<style lang="less" scoped>
  .sidebar{
    width:210px;
    height: 100%;
    background-color: #304156;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    font-size: 0px;
    z-index: 999;
    overflow: hidden;
    .scrollbar-wrapper {
      overflow-x: hidden !important;
    }
  }
</style>
