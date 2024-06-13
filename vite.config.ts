import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      // 默认设置仅在构建时生效（即错误时失败）
      ...eslint(),
      apply: "build",
    },
    {
      // 在本地开发（服务）时不使用构建失败
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: "serve",
      enforce: "post",
    },
  ],
});
