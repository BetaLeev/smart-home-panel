import { ref, onUnmounted } from 'vue'
import { config } from '../config'

export function useWebSocket() {
  const iotConnected = ref(false)
  const videoSrc = ref('')
  const lastAction = ref('无')
  
  let ws = null
  let reconnectTimer = null

  const initWebSocket = () => {
    ws = new WebSocket(config.websocket.url)

    ws.onopen = () => {
      iotConnected.value = true
    }

    ws.onclose = () => {
      iotConnected.value = false
      reconnectTimer = setTimeout(initWebSocket, config.websocket.reconnectInterval)
    }

    ws.onerror = (error) => {
      console.error('WebSocket 错误:', error)
    }

    ws.onmessage = (event) => {
      if (event.data instanceof Blob) {
        if (videoSrc.value) {
          URL.revokeObjectURL(videoSrc.value)
        }
        videoSrc.value = URL.createObjectURL(event.data)
      }
    }
  }

  const sendCommand = (action) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'control',
        action,
        timestamp: Date.now()
      }))
      lastAction.value = action
    }
  }

  const closeWebSocket = () => {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
    }
    if (ws) {
      ws.close()
      ws = null
    }
    if (videoSrc.value) {
      URL.revokeObjectURL(videoSrc.value)
    }
  }

  onUnmounted(() => {
    closeWebSocket()
  })

  return {
    iotConnected,
    videoSrc,
    lastAction,
    initWebSocket,
    sendCommand,
    closeWebSocket
  }
}
