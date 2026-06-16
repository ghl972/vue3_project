<template>
  <div class="box8">
    <div class="title">
      <p>数据统计</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="counter"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
let counter = ref<HTMLDivElement | null>(null)
let mychart: echarts.ECharts | null = null

onMounted(() => {
  if (!counter.value) return
  mychart = echarts.init(counter.value)
  mychart.setOption({
    tooltip: {
      backgroundColor: 'rgba(0,15,50,0.8)',
      textStyle: { color: '#fff' },
    },
    radar: {
      shape: 'polygon',
      indicator: [
        { name: '画笔', max: 100 },
        { name: '娱乐', max: 100 },
        { name: '爱好', max: 100 },
        { name: '小吃', max: 100 },
        { name: '出行', max: 100 },
        { name: '好感', max: 100 },
      ],
      radius: '75%',
      splitNumber: 4,
      axisName: {
        color: '#ffffff',
        fontSize: 14,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0,200,255,0.25)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,200,255,0.35)',
        },
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [75, 62, 70, 58, 66, 72],
            lineStyle: { color: '#00ccff', width: 2 },
            areaStyle: { color: 'rgba(0,204,255,0.12)' },
            itemStyle: { color: '#00ccff' },
          },
          {
            value: [82, 70, 76, 65, 78, 84],
            lineStyle: { color: '#b4ee61', width: 2 },
            areaStyle: { color: 'rgba(180,238,97,0.12)' },
            itemStyle: { color: '#b4ee61' },
          },
        ],
      },
    ],
  })
  window.addEventListener('resize', () => mychart?.resize())
})

onBeforeUnmount(() => {
  mychart?.dispose()
})
</script>

<style scoped lang="scss">
.box8 {
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
