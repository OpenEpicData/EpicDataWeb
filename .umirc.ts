import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  locale: { default: 'zh-CN', antd: true, title: false, },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/agn', component: '@/pages/agn' },
    { path: '/products', component: '@/pages/products' },
  ],
});
