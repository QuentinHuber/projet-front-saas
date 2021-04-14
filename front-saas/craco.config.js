//import aliyunTheme from '@ant-design/aliyun-theme';
const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
               // 'theme': aliyunTheme,
              // '@primary-color': '#B3B2B3',
              // '@link-color': '#1890ff',
              // '@success-color': '#52c41a',
              // '@warning-color': '#faad14', 
              // '@error-color': '#f5222d', //
              // '@font-size-base': '14px', //
              // '@heading-color': 'rgba(0, 0, 0, 0.85)',
              // '@text-color': 'rgba(0, 0, 0, 0.65)',
              // '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
              // '@disabled-color': 'rgba(0, 0, 0, 0.25)',
              // '@border-radius-base': '2px',
              // '@border-color-base': '#d9d9d9',
              // '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
              javascriptEnabled: true,
            },
          },
        },
      },
    },
    ],
  };