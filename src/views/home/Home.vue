<template>
  <div class="home">
    <div class="visits-container">
      <el-tabs v-model="current" type="border-card" @tab-click="handleTabClick">
        <el-tab-pane label="上周访问量" name="week">
          <VisitsChart :data="week" :types="'week'" :total="weekTotal" />
        </el-tab-pane>
        <el-tab-pane label="月度访问量" name="month" ref="month">
          <VisitsChart v-if="current === 'month'" :data="month" :types="'month'" :total="monthTotal" />
        </el-tab-pane>
        <el-tab-pane label="年度访问量" name="year">
          <VisitsChart v-if="current==='year'" :data="year" :types="'year'" :total="yearTotal" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="pro-container">
      <PieChart :data="categoryData" />
      <RecordList :data="recordData" />
    </div>
  </div>
</template>

<script>
import {getVisitsData,getCategoryData,getRecordData} from '@/api/data';
import VisitsChart from './components/VisitsChart';
import PieChart from './components/PieChart';
import RecordList from './components/RecordList';
  export default {
    name:'Home',
    components:{
      VisitsChart,
      PieChart,
      RecordList
    },
    data() {
      return {
        week: [],
        weekTotal: 0,
        month: [],
        monthTotal: 0,
        year: [],
        yearTotal: 0,
        current: 'week',
        categoryData: [],
        recordData: []
      };
    },
    created(){
      getVisitsData().then(res =>{
        const data = res.data
        if(data){
          this.week = data.week
          this.weekTotal = data.weekTotal
          this.month = data.month
          this.monthTotal = data.monthTotal
          this.year = data.year
          this.yearTotal = data.yearTotal
          console.log(this.monthTotal,this.yearTotal);
        }
      })
      getCategoryData().then(res => {
        let {data} = res
        let total = 0
        let categoryData = []
        for(let item in res.data){
          total += res.data[item]
        }
        for(let item in res.data){
          categoryData.push({
            value: (res.data[item] / total).toFixed(4),
            name: item
          })
        }
        this.categoryData = categoryData
      })
      getRecordData().then(res => {
        let {data} = res
        if(data && data.length > 0){
          for(let i=0;i<data.length;i++){
            data[i].date = this.parseTime(data[i].date)
          }
        }
       
        this.recordData = data
      })
    },
    methods: {
      handleTabClick(tab,event){
        this.current = tab.name
      },
      parseTime(time){
        let date = new Date(time)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth() + 1) + '-'
        let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
        let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':' 
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        return Y+M+D+h+m+s
      }
    }
};
</script>
<style>
  .el-tabs__header{
    background: #fff;
  }
</style>
<style lang="less" scoped>
  .home{
    margin-top: 50px;
    background: #f0f2f5;
    width: 100%;
    .visits-container{
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
    }
    .pro-container{
      padding:  0px 16px 16px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
    }
  }
</style>
