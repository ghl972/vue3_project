<template>
  <div class="box6">
    <div class="title">
      <p>热门景区排行</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="rank"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
//获取图形图标的DOM节点
let rank = ref()
onMounted(() => {
  //一个容器可以同时韩式多种类型的图形图标
  let mychart = echarts.init(rank.value)
  //设置配置项
  mychart.setOption({
    //标题组件
    title: {
      text: '景区排行',
      link: 'http://www.baidu.com',
      left: '40%',
      textStyle: {
        color: 'white',
        fontSize: 20,
      },
      subtext: '各大景区排行',
      subtextStyle: {
        color: 'white',
        fontSize: 16,
      },
    },
    //x|y轴组件
    xAxis: {
      type: 'category', //图形图标在x轴均匀分布展示
    },
    yAxis: {},
    //布局组件
    grid: {
      left: 20,
      bottom: 20,
      right: 20,
    },
    //系列:决定显示图形图标是哪一种
    series: [
      {
        type: 'bar',
        data: [10, 20, 30, 40, 50, 60, 70],
        //柱状图:图形上的文本标签
        label: {
          show: true,
          //文字的位置
          position: 'insideTop',
          //文字颜色
          color: 'white',
        },
        //是否显示背景颜色
        showBackground: true,
        backgroundStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: 'black',
              },
              {
                offset: 1,
                color: 'blue',
              },
            ],
            global: false,
          },
        },
        //柱条的样式
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
          //柱条颜色
          color: 'cyan',
        },
      },
    ],
  })
})
</script>

<style scoped lang="scss">
.box6 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;

  .title {
    margin-left: 5px;

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
