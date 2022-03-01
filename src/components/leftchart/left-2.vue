<template>
  <div>
    <div id="left-2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "left-2",
  methods: {
    init() {
      var chartDom = document.getElementById('left-2');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ]
          }
        ]
      };
      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
#left-2 {
  width: 100%;
  height: 300px;
}
</style>