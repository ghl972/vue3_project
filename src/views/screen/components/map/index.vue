<template>
  <div class="box4" ref="map">地图组件</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJSON from './china.json'
import { my } from 'element-plus/es/locales.mjs'
//获取DOM元素
let map = ref()
//注册中国地图
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let mychart = echarts.init(map.value)
  //设置配置项
  mychart.setOption({
    //地图组件
    geo: {
      map: 'china', //中国地图
      roam: true, //鼠标缩放效果
      //地图位置调试
      top: 66,
      left: 72,
      right: 72,
      bottom: 0,
      //地图上的文字的设置
      label: {
        show: true, //文字显示
        // rotate: 20,
        color: 'white',
      },
      //每一个多边形的样式
      itemStyle: {
        // 径向渐变深蓝底色，大屏科技感
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            { offset: 0, color: '#083075' },
            { offset: 1, color: '#041538' },
          ],
        },
        borderColor: '#00bfff', // 亮蓝色行政区描边
        borderWidth: 1.2,
        // 外发光阴影
        shadowBlur: 8,
        shadowColor: 'rgba(0,190,255,0.3)',
        opacity: 0.8,
      },
      //地图高亮的效果
      emphasis: {
        itemStyle: {
          areaColor: '#0099ff',
          borderColor: '#ffffff',
          borderWidth: 2,
          shadowBlur: 15,
          shadowColor: 'rgba(0,220,255,0.6)',
        },
      },
    },
    //布局组件
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      // 航线飞线系列
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          symbol: 'path://M24 16l-8-8-4 4 8 8-8 8 4 4 8-8 8 8 4-4-8-8 8-8-4-4z',
          trailLength: 0.45,
          period: 5.5,
          symbolSize: 3.8,
        },
        lineStyle: {
          width: 1.2, // 线稍微细一点
          color: '#00eeff',
          curveness: 0.15, // 弯曲度减小，线条更舒展不缠绕
        },
        // 新增发光
        shadowBlur: 6,
        shadowColor: 'rgba(0, 238, 255, 0.4)',
        data: [
          // 西南目的地 ↔ 北京
          {
            coords: [
              [104.07, 30.67],
              [116.4, 39.9],
            ],
          },
          // 西南目的地 ↔ 上海
          {
            coords: [
              [104.07, 30.67],
              [121.47, 31.23],
            ],
          },
          // 西南目的地 ↔ 广州
          {
            coords: [
              [104.07, 30.67],
              [113.27, 23.13],
            ],
          },
          // 西南目的地 ↔ 杭州
          {
            coords: [
              [104.07, 30.67],
              [120.16, 30.28],
            ],
          },
          // 西南目的地 ↔ 深圳
          {
            coords: [
              [104.07, 30.67],
              [114.07, 22.62],
            ],
          },
          // 西南目的地 ↔ 武汉
          {
            coords: [
              [104.07, 30.67],
              [114.31, 30.59],
            ],
          },
          // 西南目的地 ↔ 西安
          {
            coords: [
              [104.07, 30.67],
              [108.95, 34.27],
            ],
          },
          // 西南目的地 ↔ 郑州
          {
            coords: [
              [104.07, 30.67],
              [113.65, 34.76],
            ],
          },
          // 西南目的地 ↔ 南京
          {
            coords: [
              [104.07, 30.67],
              [118.78, 32.04],
            ],
          },
          // 西南目的地 ↔ 青岛
          {
            coords: [
              [104.07, 30.67],
              [120.38, 36.07],
            ],
          },
          // 西南目的地 ↔ 沈阳
          {
            coords: [
              [104.07, 30.67],
              [123.43, 41.8],
            ],
          },
          // 西南目的地 ↔ 长沙
          {
            coords: [
              [104.07, 30.67],
              [112.93, 28.23],
            ],
          },
          // 西南目的地 ↔ 福州
          {
            coords: [
              [104.07, 30.67],
              [119.3, 26.08],
            ],
          },
          // 西南目的地 ↔ 海口
          {
            coords: [
              [104.07, 30.67],
              [110.32, 20.03],
            ],
          },
          // 西南目的地 ↔ 天津
          {
            coords: [
              [104.07, 30.67],
              [117.2, 39.13],
            ],
          },
        ],
      },
    ],
  })
})
</script>

<style scoped lang="scss"></style>
