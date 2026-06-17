<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <AppHeader :connected="iotConnected" />
      </el-col>

      <el-col :xs="24" :sm="14" :md="16">
        <VideoMonitor :videoSrc="videoSrc" @command="sendCommand" />
      </el-col>

      <el-col :xs="24" :sm="10" :md="8">
        <MusicControl :lastAction="lastAction" @command="sendCommand" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWebSocket } from './composables/useWebSocket'
import AppHeader from './components/AppHeader.vue'
import VideoMonitor from './components/VideoMonitor.vue'
import MusicControl from './components/MusicControl.vue'

const { iotConnected, videoSrc, lastAction, initWebSocket, sendCommand } = useWebSocket()

onMounted(() => {
  initWebSocket()
})
</script>
