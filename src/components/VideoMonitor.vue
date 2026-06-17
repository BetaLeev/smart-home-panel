<template>
  <el-card class="box-card" header="📹 实时视频监控">
    <div class="video-wrapper">
      <img v-if="videoSrc" :src="videoSrc" class="live-stream" alt="视频流" />
      <div v-else class="video-placeholder">
        <p>等待 ESP32-S3-CAM 视频流输入...</p>
      </div>
    </div>
    <div class="video-footer">
      <el-button type="success" @click="handleCommand('videoStart')">开启流</el-button>
      <el-button type="danger" @click="handleCommand('videoStop')">暂停流</el-button>
      <el-button type="primary" @click="handleCommand('capture')">📸 远程抓拍</el-button>
    </div>
  </el-card>
</template>

<script setup>
import { config } from '../config'

const props = defineProps({
  videoSrc: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['command'])

const handleCommand = (commandKey) => {
  emit('command', config.commands[commandKey])
}
</script>

<style scoped>
.video-wrapper {
  width: 100%;
  height: v-bind('config.video.height');
  background: #000;
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.live-stream {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.video-placeholder {
  color: #fff;
  text-align: center;
}

.video-footer {
  margin-top: var(--spacing-md);
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
}
</style>
