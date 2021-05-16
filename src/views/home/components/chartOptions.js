let weekOption = {
  title: {
    text: '上周访问数据'
  },
  legend: {
    data: ['访问量']
  },
  tooltip:{
    show: true,
    trigger: 'axis',
  },
  xAxis: {
    data: ['周一','周二','周三','周四','周五','周六','周日'],
    boundaryGap: true,
    axisTick:{
      alignWithLabel: true
    }
  },
  yAxis: {},
  series: [{
    name: '访问量',
    type: 'line',
    data: []
  }]
}

let monthOption = {
  title: {
    text: '月度访问数据'
  },
  legend: {
    data: ['访问量']
  },
  tooltip:{
    show: true,
    trigger: 'axis',
  },
  xAxis: {
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    boundaryGap: true,
    axisTick:{
      alignWithLabel: true
    }
  },
  yAxis: {},
  series: [{
    name: '访问量',
    type: 'line',
    data: []
  }]
}


let yearOption = {
  title: {
    text: '年度访问数据'
  },
  legend: {
    data: ['访问量']
  },
  tooltip:{
    show: true,
    trigger: 'axis',
  },
  xAxis: {
    data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    boundaryGap: true,
    axisTick:{
      alignWithLabel: true
    }
  },
  yAxis: {},
  series: [{
    name: '访问量',
    type: 'line',
    data: []
  }]
}

export {weekOption,monthOption,yearOption}