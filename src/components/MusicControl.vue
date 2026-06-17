<template>
  <el-card class="box-card" header="🎵 背景音乐 (ESP32 节点)">
    <div class="music-panel">
      <p class="action-info">
        最近动作:
        <el-tag type="warning">{{ lastAction }}</el-tag>
      </p>
      <div class="music-controls">
        <el-button-group>
          <el-button type="info" @click="handleCommand('musicPrev')">上一首</el-button>
          <el-button type="primary" @click="handleCommand('musicToggle')">播放/暂停</el-button>
          <el-button type="info" @click="handleCommand('musicNext')">下一首</el-button>
        </el-button-group>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { config } from '../config'

defineProps({
  lastAction: {
    type: String,
    default: '无'
  }
})

const emit = defineEmits(['command'])

const handleCommand = (commandKey) => {
  emit('command', config.commands[commandKey])
}
</script>

<style scoped>
.music-panel {
  text-align: center;
  padding: var(--spacing-lg) 0;
}

.action-info {
  margin-bottom: var(--spacing-md);
}

.music-controls {
  margin-top: var(--spacing-lg);
}
</style>
