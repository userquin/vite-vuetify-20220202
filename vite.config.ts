import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { promises as fs } from 'fs'
import Vuetify from '@vuetify/vite-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // {
    //   name: 'vuetify-fix',
    //   enforce: 'pre',
    //   resolveId(id) {
    //     console.log(id)
    //     if (id === 'vuetify/dist/json/importMap.json') {
    //       return 'vuetify-import-map.json'
    //     }
    //   },
    //   async load(id) {
    //     if (id === 'vuetify-import-map.json') {
    //       return await fs.readFile('node_modules/vuetify/dist/json/importMap.json', 'utf-8')
    //     }
    //   }
    // },
      Unocss({
        presets: [presetIcons()]
      }),
    Vuetify({ styles: 'expose' })
  ]
})
