<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "left-1",
  methods: {
    init() {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "长治市企业数量统计",
          textStyle: {
            color: "#f2f4f5",
            fontFamily: "PingFang SC",
            fontWeight: "700"
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {//修改坐标系字体颜色
            show: true,
            textStyle: {
              color: "#4d71b9"
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {//修改坐标系字体颜色
            show: true,
            textStyle: {
              color: "#4d71b9"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        // An highlighted block
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#113d5e'
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#2aaaa0'},
                      {offset: 0.5, color: '#1c777a'},
                      {offset: 1, color: '#07263e'}
                    ]
                )
              }
            },
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
#main {
  width: 100%;
  height: 300px;
}
</style>