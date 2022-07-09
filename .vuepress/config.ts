import clipboardPlugin from "vuepress-plugin-clipboard";
import sidebar from "./sidebar";
import navbar from "./navbar";

const { defineUserConfig } = require("vuepress");
const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";

export default defineUserConfig({
  title: "计算机知识杂货铺",
  description: "xiaofei.work-专为计算机相关专业的学生提供学习的平台！",
  head: [
    [
      "script",
      {},
      `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
        `,
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "笔记,编程,前端,后端,Java,高等数学,html,css,javascript,vue,jquery,spring,小飞的学习笔记",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "编程学习记录,包括Java,JavaWeb,javascript,linux,Sql,Redis,Vue,Git,C语言,Python,计算机网络,面试资料,高等数学,劳动合同法",
      },
    ],
    ["meta", { name: "referrer", content: "no-referrer" }],
  ],
  theme: defaultTheme({
    logo: "logo.png",
    repo: "https://github.com/731016/study-notes",
    sidebar,
    navbar,
    editLink: false,
    smoothScroll: true,
    contributors: false,
    lastUpdated: false,
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
    clipboardPlugin({
      align: "top",
      staticIcon: true,
    }),
    seoPlugin({
      hostname: "http://xiaofei.work",
      author: "折腾的小飞",
    }),
    sitemapPlugin({
      hostname: "http://xiaofei.work",
    }),
    searchConsolePlugin({
      // 改成自己的百度统计 id：https://tongji.baidu.com/
      baiduId: "https://hm.baidu.com/hm.js?1c47bfb627fa9414e1963d73e2015017",
    }),
  ],
});
