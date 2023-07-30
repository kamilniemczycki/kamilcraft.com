import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    publicPath: '/',
    transpileDependencies: true,
    server: {
      host: 'localhost',
      port: parseInt(env.VITE_PORT ?? 5173),
      hmr: {
        host: 'localhost',
      },
    },
    plugins: [ vue() ],
    resolve: {
        vue: 'vue/dist/vue.esm-bundler.js',
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
  };
});
