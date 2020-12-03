import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: ['library']
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
