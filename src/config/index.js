// 智能家居控制中心配置

export const config = {
  // WebSocket 配置
  websocket: {
    url: 'ws://gdtaolaocha.com/ws?role=viewer',
    reconnectInterval: 3000
  },

  // 应用信息
  app: {
    name: '智能家居控制中心',
    version: '1.0',
    subtitle: '手动精简版'
  },

  // 视频配置
  video: {
    height: '350px'
  },

  // 控制命令
  commands: {
    videoStart: 'video_start',
    videoStop: 'video_stop',
    capture: 'capture',
    musicPrev: 'music_prev',
    musicToggle: 'music_toggle',
    musicNext: 'music_next'
  }
}

export default config
