<template>
  <div>
    <div id="left-pie" :style="{width:'100%',height:'300px'}"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "left-2",
  methods: {
    initPie() {
      const myChart = echarts.init(document.getElementById('left-pie'));
      myChart.setOption({
        title: {
          text: "长治市企业性质占比",
          textStyle: {
            color: "#f2f4f5",
            fontFamily: "PingFang SC",
            fontWeight: "700"
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: '60%',  //图例距离左的距离
          y: '70%',  //图例上下居中
          icon: "circle",
          top: '20%',
          textStyle: {
            color: 'white'
          },
          data: ['有限责任公司', '个人独资企业', '集体所有制', '国有企业', '股份有限公司']
        },
        color: ['#ccff32', '#23e6e4', '#3292ff', '#3251d5', '#7658f9'],
        series: [
          // 外环
          {
            type: 'pie',
            radius: ['40%', '50%'],//大小
            center: ['35%', '40%'], //图的位置，距离左跟上的位置
            label: {
              show: false,
              position: 'center',
              normal: {
                position: 'center',
                textStyle: {
                  fontSize: 20,
                  padding: [-100, 0, 0, 0],
                },
                formatter: '{d}%'
              },
            },
            // 鼠标悬浮
            emphasis: {
              label: {
                show: false,
                fontSize: '20',
                fontWeight: 'bold',
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '有限责任公司'},
              {value: 735, name: '个人独资企业'},
              {value: 580, name: '集体所有制'},
              {value: 484, name: '国有企业'},
              {value: 300, name: '股份有限公司'},
            ]
          },
          // 内环
          {
            type: 'pie',
            hoverAnimation: false, //鼠标移入变大
            radius: ['37%', '37%'], //图的大小
            center: ['35%', '40%'], //图的位置，距离左跟上的位置
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 0,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: '#2985e0'
                  }
                }
              }
            ]
          }
          //
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
      this.initPie();
    }, 1000)
  }
}
</script>

<style scoped>
</style>