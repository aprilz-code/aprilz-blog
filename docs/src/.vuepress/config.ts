import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Aprilz 博客",
      description: "Aprilz的博客学习笔记 - 专注于技术分享的笔记平台",
    },
    "/en/": {
      lang: "en-US",
      title: "Aprilz Blog",
      description: "Aprilz Blog Note",
    },
  },

  theme,

  shouldPrefetch: false,
});
