<template>
  <div class="bookList">
    <div class="filter-container">
      <el-input 
        v-model="listQuery.title" 
        placeholder="书名" 
        style="width: 200px" 
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
        />
      <el-input 
        v-model="listQuery.author" 
        placeholder="作者" 
        style="width: 200px" 
        class="filter-item"
        clearable
        @keyup.enter.native="handleFilter"
        @clear="handleFilter"
        @blur="handleFilter"
        />
      <el-select
        v-model="listQuery.category"
        placeholder="分类"
        clearable
        class="filter-item"
        @change="handleFilter"
        @clear="handleFilter">
        <el-option v-for="item in categoryList"
          :key="item.value"
          :label="item.label + '(' + item.num + ')'"
          :value="item.value"></el-option>
      </el-select>
      <el-button 
        class="filter-item" 
        type="primary" 
        icon="el-icon-search"
        style="margin-left: 10px;"
        @click="handleFilter">
        查询
      </el-button>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-edit"
        style="margin-left: 10px;"
        @click="handleCreate"
      >
        新增
      </el-button>
      <el-checkbox
        v-model="showCover"
        class="filter-item"
        style="margin-left: 5px;"
        @click="changeShowCover"
        >
        显示封面
      </el-checkbox>
    </div>
    <el-table 
      :key="tableKey"
      :data="list"
      border
      fit 
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <!-- ID -->
      <el-table-column 
        label="ID"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
      />
      <!-- 书名 -->
      <el-table-column 
        label="书名"
        align="center"
        width="150"
      >
        <template slot-scope="{ row: { titleWrapper }}">
          <span v-html="titleWrapper" />
        </template>
      </el-table-column>
      <!-- 作者 -->
      <el-table-column 
        label="作者"
        align="center"
        width="150"
      >
        <template slot-scope="{ row: { authorWrapper }}">
          <span v-html="authorWrapper" />
        </template>
      </el-table-column>
      <!-- 出版社 -->
      <el-table-column label="出版社" prop="publisher" align="center" width="150"/>
      <el-table-column  label="分类" prop="categoryText" align="center" width="100"/>
      <el-table-column  label="语言" prop="language" align="center"/>
      <!-- 封面 -->
      <el-table-column 
        v-if="showCover"
        label="封面"
        width="150"
        align="center"
      >
        <template slot-scope="{ row: { cover,coverPath }}">
          <a v-if="coverPath" :href="cover" target="_blank">
            <img :src="cover" style="width: 120px;height: 180px;">
          </a>
          <a v-else :href="image" target="_blank">
            <img :src="image" style="width: 120px;height: 180px;">
          </a>
        </template>
      </el-table-column>
      <el-table-column  label="文件名" prop="fileName" width="100" align="center" />
      <el-table-column  label="文件路径" prop="filePath" width="100" align="center">
        <template slot-scope="{ row:{ filePath }}">
          <span>{{ filePath | valueFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column  label="封面路径" prop="cover" width="100" align="center">
        <template slot-scope="{ row:{ cover }}">
          <span>{{ cover | valueFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column  label="解压路径" prop="unzipPath" width="100" align="center">
        <template slot-scope="{ row:{ unzipPath }}">
          <span>{{ unzipPath | valueFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column  label="上传人" prop="createUser" width="100" align="center">
        <template slot-scope="{ row:{ createUser }}">
          <span>{{ createUser | valueFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column  label="上传时间" prop="createDt" width="100" align="center">
        <template slot-scope="{ row:{ createDt }}">
          <span>{{ createDt | timeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column 
        label="操作"
        width="120"
        align="center"
        fixed="right"
        v-if="isAdmin"
      >
        <template slot-scope="{ row }">
          <el-button type="text" icon="el-icon-edit" @click="handleUpdate(row)" />
          <el-button type="text" icon="el-icon-delete" @click="handleDelete(row)" style="color: #f56c6c" />
        </template>
      </el-table-column>
    </el-table>
    <pagination 
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
    /> 
  </div>
</template>

<script>
import Pagination from '@/components/Pagination';
import {getCategory,listBook,deleteBook} from '@/api/book';


let _this;
  export default {
    name:'List',
    components:{
      Pagination
    },
    filters: {
      valueFilter(value){
        return value || '无'
      },
      timeFilter(time){
        return time ? _this.parseTime(time) : '无'
      }
    },
    data() {
      return {
        listQuery:{},
        showCover: false,
        categoryList: [],
        tableKey: 0,
        list: [],
        total: 0,
        isAdmin: false,
        image: require("@/assets/image/image.jpg")
      };
    },
    beforeCreate(){
      _this = this
    },
    created(){
      this.parseQuery()
      this.isAdmin = this.$store.getters.roles[0] === 'admin' ? true : false
    },
    mounted(){
      this.getCategoryList()
      this.getList()
    },
    methods: {
      parseQuery(){
        const listQuery = {
          page: 1,
          pageSize: 20,
          sort: '+id'
        }
        this.listQuery = { ...listQuery, ...this.listQuery}
      },
      getCategoryList(){
        getCategory().then(res => {
          this.categoryList = res.data
        }) 
      },
      //关键字高亮
      wrapperKeyword(key,value){
        function hignLignt(value){
          
          return `<span style="color: #DC143C">${value}</span>`
        }
        if(!this.listQuery[key]){
          return value
        }else{
          value = value.replace(new RegExp(this.listQuery[key],'ig'),value => hignLignt(value))
          return value
        }
      },
      //发送请求
      getList(){
        listBook(this.listQuery).then(res => {
          console.log(res.data);
          const { list, count, page, pageSize} = res.data
          this.list = list
          this.total = count
          this.list.forEach( book => {
            book.titleWrapper = this.wrapperKeyword('title',book.title)
            book.authorWrapper = this.wrapperKeyword('author',book.author)
          })
        })
      },
      //查询条件监听
      handleFilter(){
        this.getList()
      },
      //跳转
      handleCreate(){
        this.$router.push('/book/create')
      },
      //控制是否显示封面
      changeShowCover(value){
        this.showCover = value
      },
      //表格排序事件
      sortChange(data){
        const { prop, order } = data 
        this.sortBy(prop,order)
      },
      sortBy(prop,order){
        if(order === 'ascending'){
          this.listQuery.sort = `+${prop}`
        }else{
          this.listQuery.sort = `-${prop}`
        }
        this.handleFilter()
      },
      //编辑书籍
      handleUpdate(row){
        this.$router.push(`/book/edit/${row.fileName}`)
      },
      handleDelete(row){
        this.$confirm('此操作将永久删除该电子书，是否继续？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() =>{
          deleteBook(row.fileName,row.title).then(res => {
            this.$notify({
              title: '成功',
              message: res.msg || '删除成功',
              type: 'success',
              duration: 2000
            })
            this.handleFilter()
          })
        })
      },
      parseTime(time){
        let date = new Date(time)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth() + 1) + '-'
        let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
        let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':' 
        let s = date.getSeconds()
        return Y+M+D+h+m+s
      }
    }
};
</script>

<style lang="less" scoped>
  .bookList{
    margin-top: 50px;
    padding: 20px;
    .filter-container {
      padding-bottom: 10px;

      .filter-item {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 10px;
        margin-right: 4px;
      }
    }
  }
</style>
