import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuetify from '@vuetify/vite-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetIcons()]
    }),
    Vuetify({ styles: 'expose' })
  ]
})
