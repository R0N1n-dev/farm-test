import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  vitePlugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    Components(),
  ],
});
