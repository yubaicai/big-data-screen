<template>
  <div id="left-bar" :style="{ width: '100%', height: '280px' }"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "left-3",
  mounted() {
    setTimeout(() => {
      this.initBar();
    }, 1000);
  },
  methods: {
    initBar() {
      const myChart = echarts.init(document.getElementById('left-bar'));
      const dataList = [81.1, 12.75, 48.32, 196.4];
      myChart.setOption({
        title: {
          text: "长治市企业营收统计",
          textStyle: {
            color: "#f2f4f5",
            fontFamily: "PingFang SC",
            fontWeight: "700"
          }
        },
        color: ['#02c3f1'],
        // 悬浮提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          backgroundColor: "#242c34",
          borderWidth: 0,
          formatter: function (prams) {
            return prams[0].name + ':' + prams[0].data + "亿元"
          },
          textStyle: {
            color: "#ffffff",
          }
        },
        grid: {
          top: '10%',
          left: '12%',
        },
        xAxis: [
          {
            type: 'category',
            data: ['2017', '2016', '2015', '2014'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: '#4d71b9',
              interval: 0,
              margin: 20,
              align: 'center'
            },
            splitLine: {
              color: "#4d71b9"
            }
          }
        ],
        yAxis: {
          axisLabel: {//修改坐标系字体颜色
            formatter: "{value} 亿",
            textStyle: {
              color: "#4d71b9"
            },
          },
          axisTick: {
            show: false
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
        series: [
          {
            name: '亿',
            type: 'pictorialBar',
            symbolSize: [12, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            label: {
              normal: {
                show: false,
                position: 'top',
                fontWeight: 'bold'
                // "formatter": "{c}%"
              }
            },
            data: dataList
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: '#4CD5F5'}, //柱图渐变色
                  {offset: 0.5, color: '#79DFF8'}, //柱图渐变色
                  {offset: 1, color: '#E9FAFE'} //柱图渐变色
                ])
              }
            },
            barWidth: '12',
            data: dataList
          }
        ]
      });
      window.onresize = function () {
        //自适应大小, 不用的话不会自适应大小。
        myChart.resize();
      };
    }
  }
}
</script>

<style scoped>

</style>