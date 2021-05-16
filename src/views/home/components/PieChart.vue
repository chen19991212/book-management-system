<template>
  <div class="pie" ref="pie">

  </div>
</template>

<script>
  export default {
    name:'PieChart',
    props:{
      data:{
        type: Array,
        default: {}
      }
    },
    data() {
      return {

      };
    },
    created(){

    },
    methods: {
      renderPieChart(){
        const myChart = this.$echarts.init(this.$refs.pie)
        let option = {
          title: {
            text: '访问量占比',
            left: 'center',
            top: 20
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {d}%'
          },
          legend: {
            orient: 'vertical',
            type: 'scroll',
            right: 0,
            show: false
          },
          series: [
            {
              name: '访问量占比',
              type: 'pie',
              radius: '50%',
              data: [],
              left: 0,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        option.series[0].data = this.data
        myChart.setOption(option)
      }
    },
    watch:{
      data(){
        this.renderPieChart()
      }
    }
};
</script>

<style lang="less" scoped>
  .pie{
    flex: 1;
    height: 480px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
</style>
