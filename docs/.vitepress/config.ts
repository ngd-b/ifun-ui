// sidebar
const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [
        {
          text: "Button按钮",
          link: "/components/button/",
        },
      ],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    {
      text: "数据展示",
      children: [
        {
          text: "GridTable 列表",
          link: "/components/GridTable/",
        },
      ],
    },
    { text: "布局" },
  ],
};

// config
const config = {
  title: "Fun-UI",
  description: "业务经验，常用组件封装",
  themeConfig: { sidebar },
  markdown: {
    config(md) {
      // 添加demoblock
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};

// module.exports = {
//   markdown: {
//     config(md) {
//       // 添加demoblock
//       const { demoBlockPlugin } = require("vitepress-theme-demoblock");
//       md.use(demoBlockPlugin);
//     },
//   },
// };

export default config;
