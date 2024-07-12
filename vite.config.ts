import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(config => {
  const { command } = config
  return {
    plugins: [
      vue(),
      {
        // 默认设置仅在构建时生效（即错误时失败）
        ...eslint(),
        apply: 'build',
      },
      {
        // 在本地开发（服务）时不使用构建失败
        ...eslint({
          failOnWarning: false,
          failOnError: false,
        }),
        apply: 'serve',
        enforce: 'post',
      },
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      svgLoader(),
      viteMockServe({
        // 只在开发阶段开启 mock 服务
        enable: command === 'serve', // 保证项目开发阶段可以使用 mock 接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
  }
})
