<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children,item)&&(!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <router-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)" >
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <Item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <Item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
        />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './Item'
  export default {
    name:'SidebarItem',
    components:{
      Item
    },
    props:{
      item:{
        type: Object,
        retuired: true
      },
      isNest:{
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data() {
      this.onlyOneChild = null
      return {

      };
    },
    methods: {
      hasOneShowingChild(children=[],parent){
        const showingChildren = children.filter(item => {
          if(item.hidden){
            return false
          }else{
            this.onlyOneChild = item
            return true
          }
        })
        
        if(showingChildren.length === 1){
          return true
        }else if(showingChildren.length === 0){
          this.onlyOneChild = { 
            ... parent,
            path:'',
            noShowingChildren: true
          }
          return true
        }
        return false
      },
      resolvePath(routePath){
        return path.resolve(this.basePath, routePath)
      },
    }
};
</script>

<style lang="less" scoped>
 .menu-wrapper{
   a{
     text-decoration: none;
   }
 }
</style>
