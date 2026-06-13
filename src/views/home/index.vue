<template>
  <div class="home-bg-wrap">
    <el-card class="glass-card">
      <div class="box">
        <!-- <img :src="userStore.avatar" alt="" class="avatar" /> -->
        <img src="@/assets/images/preview.jpg" alt="" class="avatar" />
        <div class="bottom">
          <h3 class="title">{{ getTime() }}好! {{ userStore.username }}</h3>
          <p class="subtitle">硅谷甄选运营平台</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
//引入用户相关的仓库，获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
</script>

<style scoped lang="scss">
// 磨砂玻璃核心样式
.glass-card {
  background: rgba(255, 255, 255, 0.18) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      font-style: italic;
      font-size: 30px;
      margin-bottom: 30px;
      font-weight: 700;
    }

    .subtitle {
      font-style: italic;
      color: pink;
    }
  }
}

.home-bg-wrap {
  min-height: calc(100vh - 90px);
  width: 100%;
  background: url('@/assets/images/preview1.jpg') no-repeat center center;
  background-size: cover;
  padding: 20px;
}
</style>
