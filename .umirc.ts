import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  locale: { default: 'zh-CN', antd: true, title: false },
  nodeModulesTransform: {
    type: 'none',
  },
});
