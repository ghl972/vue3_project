<template>
  <div class="box5">
    <div class="title">
      <p>未来七天游客数量趋势图</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="line"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
//获取图形图标的DOM节点
let line = ref()
onMounted(() => {
  let mycharts = echarts.init(line.value)
  //设置配置项
  mycharts.setOption({
    //标题组件
    title: {
      text: '访问量',
    },
    //x|y轴组件
    xAxis: {
      type: 'category',
      //两侧不留白,
      boundaryGap: false,
      //分割线不要
      splitLine: {
        show: false,
      },
      data: ['第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天'],
      //轴线的设置
      axisLine: {
        show: true,
      },
      //刻度
      axisTick: {
        show: true,
      },
    },
    yAxis: {
      //两侧不留白,
      boundaryGap: false,
      //分割线不要
      splitLine: {
        show: false,
      },
      //轴线的设置
      axisLine: {
        show: true,
      },
      //刻度
      axisTick: {
        show: true,
      },
    },
    //布局组件
    grid: {
      top: 40,
      left: 0,
      right: 0,
      bottom: 20,
    },
    //系列
    series: [
      {
        type: 'line',
        data: [2402, 66, 999, 3211, 123, 890, 1200],
        smooth: true,
        lineStyle: {
          color: '#00eeff',
          width: 2,
        },
        itemStyle: {
          color: '#00eeff',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0, 238, 255, 0.45)' },
              { offset: 1, color: 'rgba(0, 238, 255, 0.02)' },
            ],
          },
        },
      },
    ],
  })
})
</script>

<style scoped lang="scss">
.box5 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 20px;

  .title {
    margin-left: 20px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 40px);
  }
}
</style>
