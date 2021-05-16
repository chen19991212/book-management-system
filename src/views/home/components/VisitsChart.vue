<template>
  <div class="visitsChart" ref="visitsChart">

  </div>
</template>

<script>
import {weekOption,monthOption,yearOption} from './chartOptions';
  export default {
    name:'VisitsChart',
    props:{
      total:{
        type: Number,
        default: 0
      },
      types:{
        type: String,
        default: ''
      },
      data:{
        type: Array,
        default: []
      }
    },
    data() {
      return {
        option: {}
      };
    },
    mounted(){
      this.renderChart()
    },
    methods: {
      renderChart(){
        const myChart = this.$echarts.init(this.$refs.visitsChart)
        switch(this.types){
          case 'week':
            this.option = weekOption
            break;
          case 'month':
            this.option = monthOption
            break;
          case 'year':
            this.option = yearOption
            break;
        }
        this.option.title.text = `总访问量 :  ${this.total}`
        this.option.series[0].data = this.data
        myChart.setOption(this.option,true)
      }
    },
    watch:{
      data(value){
        this.renderChart()
        console.log(value);
      }
    }
};
</script>

<style scoped>
  .visitsChart{
    padding: 12px;
    height: 380px;
    background-color: #fff;
  }
</style>
