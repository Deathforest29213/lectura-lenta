import { registerSW } from 'virtual:pwa-register'

export const registerServiceWorker = () => {
  registerSW({
    immediate: true,
    onNeedRefresh() {
      window.dispatchEvent(new CustomEvent('lectura-lenta:update-ready'))
    },
  })
}
