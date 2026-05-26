<template>
  <div class="box">
    <h1>我是App</h1>
    <h1>{{ str }}</h1>
  </div>
</template>

<script setup lang="ts">
const str: string = '中国'
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
