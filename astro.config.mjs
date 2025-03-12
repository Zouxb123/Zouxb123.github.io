import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// 判断是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://huashengfucai.github.io', // 已更新为公司GitHub用户名
  // 始终使用base路径确保在GitHub Pages上正确加载
  base: '/huashengweb/',
  server: {
    port: 3000,
    host: true
  }
});