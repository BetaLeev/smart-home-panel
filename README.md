# 智能家居控制中心

基于 Vue 3 + Element Plus 的智能家居控制面板，支持 ESP32 设备远程控制。

## 功能特性

- 实时视频监控（ESP32-S3-CAM）
- 背景音乐控制（ESP32 节点）
- WebSocket 实时通信
- 响应式布局

## 项目结构

```
src/
├── config/           # 配置文件
├── composables/      # 组合式函数
├── components/       # Vue 组件
├── styles/           # 样式文件
├── App.vue           # 主组件
└── main.js           # 入口文件
```

## 配置说明

编辑 `src/config/index.js` 修改：

- WebSocket 服务器地址
- 应用名称和版本
- 控制命令

## 安装运行

```bash
npm install
npm run dev
```

## 技术栈

- Vue 3 (Composition API)
- Element Plus
- Vite
