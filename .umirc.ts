import { defineConfig } from 'umi';

export default defineConfig({
  title: 'PVP',
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
