<template>
  <div class="box7">
    <div class="title">
      <p>年度游客量对比</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="year"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
let year = ref()
onMounted(() => {
  //一个容器可以同时韩式多种类型的图形图标
  let mychart = echarts.init(year.value)
  //设置配置项
  mychart.setOption({
    title: {
      text: '散点图',
      left: '40%',
      textStyle: {
        color: 'white',
      },
    },
    //x|y轴组件
    xAxis: {
      type: 'category',
      show: true,
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: 20,
      bottom: 20,
      right: 0,
      top: 20,
    },
    series: {
      type: 'scatter',
      data: [
        33, 88, 21, 9, 456, 123, 7897, 1231, 654, 3, 88, 33, 21, 8888, 3321,
        1235, 321, 5, 654, 98,
      ],
      //图形设置
      symbol: 'diamond',
      symbolSize: 16,
      //图文标签
      label: {
        show: true,
        position: 'top',
        color: 'white',
      },
      //散点图标记颜色
      itemStyle: {
        color: 'skyblue',
      },
    },
  })
})
</script>

<style scoped lang="scss">
.box7 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;

  .title {
    margin-left: 20px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }
}
</style>
