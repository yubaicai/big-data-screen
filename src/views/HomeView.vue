<template>
  <div class="Fu">
    <header class="head">
      <!--时间-->
      <div class="head_zi1">
        <span class="sfm">{{ minute }}</span>&nbsp;
        <span class="nyr">{{ this.week }}&nbsp;|&nbsp;{{ year }}</span>
      </div>
      <!--头部字体-->
      <div class="head_zi2">长治市企业全景洞察</div>
      <!--年份选择-->
      <div class="n">
        <div class="n_n">2019年</div>
        <div class="n_n">2020年</div>
        <div class="n_n">2021年</div>
        <div class="n_n">2022年</div>
      </div>
      <!--头部选择框-->
      <div class="head_xzk">
        <div>
          <label for="cy">选择产业：</label>
          <select id="cy">
            <option>请选择</option>
          </select>
          <label for="qy">区域选择：</label>
          <select id="qy">
            <option>请选择</option>
          </select>
        </div>
      </div>
    </header>
    <div class="left">
      <div class="content_3_one">
        <div class="content_3_1">
          <left1/>
        </div>
        <div class="content_3_1">
          <left2/>
        </div>
        <div class="content_3_1">
          <left3/>
        </div>
      </div>
    </div>
    <div class="content_2">

    </div>
    <div class="right">
      <div class="content_3_two">
        <div class="content_3_1">
          <right1/>
        </div>
        <div class="content_3_1">
          <right2/>
        </div>
        <div class="content_3_1">
          <right3/>
        </div>
      </div>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
import {heatmapData} from '@/assets/js/heatmapData';
import Right1 from "@/components/rightchart/right-1";
import Right3 from "@/components/rightchart/right-3";
import Left3 from "@/components/leftchart/left-3";

export default {
  components: {Left3, Right3, Right1},
  data() {
    return {
      options: [],
      minute: '',
      week: '',
      year: '',
      map: null,
      heatmap: null
    }
  },
  methods: {
    // 加载实时时间
    getTime() {
      let timeStamp = new Date();
      let year = new Date(timeStamp).getFullYear();
      let month =
          new Date(timeStamp).getMonth() + 1 < 10
              ? "0" + (new Date(timeStamp).getMonth() + 1)
              : new Date(timeStamp).getMonth() + 1;
      let date =
          new Date(timeStamp).getDate() < 10
              ? "0" + new Date(timeStamp).getDate()
              : new Date(timeStamp).getDate();
      let hh =
          new Date(timeStamp).getHours() < 10
              ? "0" + new Date(timeStamp).getHours()
              : new Date(timeStamp).getHours();
      let mm =
          new Date(timeStamp).getMinutes() < 10
              ? "0" + new Date(timeStamp).getMinutes()
              : new Date(timeStamp).getMinutes();
      let ss =
          new Date(timeStamp).getSeconds() < 10
              ? "0" + new Date(timeStamp).getSeconds()
              : new Date(timeStamp).getSeconds();
      let week = new Date(timeStamp).getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      let getWeek = "星期" + weeks[week];
      this.year = year + "年" + month + "月" + date + "日";
      this.minute = hh + ":" + mm + ":" + ss;
      this.week = getWeek;
    },
    // 初始化地图
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.418261, 39.921984],
        zoom: 11,
        mapStyle: 'amap://styles/darkblue', // 马卡龙(其他样式可在高德api中查找进行修改)
        //自定义地图样式：https://lbs.amap.com/dev/mapstyle/index
      });
    },
    createHeatMap() {
      let __this = this;
      this.map.plugin(["AMap.Heatmap"], function () {
        //初始化heatmap对象
        __this.heatmap = new AMap.Heatmap(__this.map, {
          radius: 25, //给定半径
          opacity: [0, 0.8],
          // 设置数据
        }).setDataSet({
          data: heatmapData,
          max: 100
        });
        //设置数据集
        /*__this.heatmap.setDataSet({
          data: heatmapData,
          max: 100
        });*/
      });
    },
  },
  mounted() {
    // 加载时间
    this.getTime();
    // 每秒加载时间
    setInterval(() => {
      this.getTime()
    }, 1000);
    // 延迟加载，防止出现AMap not defined
    setTimeout(() => {
      this.initMap();
      this.createHeatMap();
    }, 1000);
  },
  beforeDestroy() {
    this.map && this.map.destroy();
  },
}
</script>
<style lang="scss">
@import url("../assets/css/dongcha.css");

* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  background-color: #091733;
}

.left {
  position: absolute;
  z-index: 2;
}

.right {
  z-index: 2;
}

.head {
  z-index: 2;
}

#container {
  position: absolute;
  z-index: 1;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

}

.amap-logo {
  opacity: 0;
}
</style>