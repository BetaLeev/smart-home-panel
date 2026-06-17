<template>
  <div class="header-card">
    <h2>
      🏡 {{ appName }}
      <small class="version-info">{{ version }} {{ subtitle }}</small>
    </h2>
    <el-tag :type="connected ? 'success' : 'danger'">
      {{ connected ? '中转服务器：已连接' : '中转服务器：断开' }}
    </el-tag>
  </div>
</template>

<script setup>
import { config } from '../config'

defineProps({
  connected: {
    type: Boolean,
    required: true
  }
})

const { app: appConfig } = config
const appName = appConfig.name
const version = `v${appConfig.version}`
const subtitle = appConfig.subtitle
</script>

<style scoped>
.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card-bg);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--box-shadow);
}

.header-card h2 {
  margin: 0;
}

.version-info {
  font-size: 12px;
  color: var(--text-secondary);
}
</style>
