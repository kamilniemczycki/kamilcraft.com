import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: 'localhost',
      port: parseInt(env.VITE_PORT ?? 5173),
      hmr: {
        host: 'localhost',
      },
    },
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
    ],
    resolve: {
        vue: 'vue/dist/vue.esm-bundler.js',
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
      manifest: true,
    },
  };
});
