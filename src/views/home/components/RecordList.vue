<template>
  <div class="recordList">
    <h3>操作记录</h3>
    <ul>
      <li v-for="(item) in data" :key="item.id">
        管理员
        <span class="user">{{item.user}}</span>
        {{item.operation}}了书籍
        <span class="book">{{item.book}}</span>
        <span class="date">{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'RecordList',
    props:{
      data:{
        type: Array,
        default:[]
      }
    },
    data() {
      return {

      };
    },
    methods: {

    },

};
</script>

<style lang="less" scoped>
  .recordList{
    flex: 1;
    margin-left: 12px;
    height: 480px;
    background-color: #fff;
    padding: 12px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    ul{
      margin-top: 12px;
      li{
        list-style: none;
      }
    }
    .user{
      color: #DC143C;
    }
    .book{
      color: #9370db;
      display: inline-block;
      width: 400px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }
    .date{
      color: #D9D9F3;
      float: right;
    }
  }
</style>
