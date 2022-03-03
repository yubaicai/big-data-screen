<template>
  <div>
    <div id="right-line" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "right-3",
  methods: {
    initLine() {
      const myChart = echarts.init(document.getElementById('right-line'));
      myChart.setOption({
        // 图表标题
        title: {
          text: "长治市企业创新统计",
          textStyle: {
            color: "#f2f4f5",
            fontFamily: "PingFang SC",
            fontWeight: "700"
          }
        },
        // X轴数据
        xAxis: {
          type: 'category',
          data: ['2019', '2020', '2021', '2022'],
          axisLabel: {//修改坐标系字体颜色
            show: true,
            textStyle: {
              color: "#4d71b9"
            }
          },
        },
        // Y轴央视
        yAxis: {
          type: 'value',
          axisLabel: {//修改坐标系字体颜色
            show: true,
            textStyle: {
              color: "#4d71b9"
            }
          },
          // y轴设置显示虚线
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: "#094b7e"
            }
          }
        },
        // 悬浮显示数据
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        //
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#113d5e'
          }
        },
        // 数据，样式
        series: [
          {
            data: [0, 0, 0, 0],
            type: 'line',
            smooth: true,
            areaStyle: {
              normal: {
                // 图表线性渐变
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
      });
      window.onresize = function () {
        //自适应大小, 不用的话不会自适应大小。
        myChart.resize();
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.initLine();
    }, 1000);
  }
}
</script>

<style scoped>

</style>