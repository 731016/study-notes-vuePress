import { NavbarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
  {
    text: "刷题网站",
    collapsible: true,
    children: [
      { text: "学习算法、大数据、人工智能、面向对象编程", link: "https://www.lintcode.com/" },
      { text: "名企 BAT 真题", link: "https://www.acmcoder.com/#/practice/company" },
      { text: "牛客网", link: "https://www.nowcoder.com/" },
    ],
  },
  {
    text: "代码库",
    collapsible: true,
    children: [
      { text: "Java常用配置文件模板", link: "/代码库/常用配置文件.html" },
      { text: "Java工具类", link: "/代码库/java工具类.html" },
      { text: "Java基础算法", link: "/代码库/Java.html" },
      { text: "HTML+CSS+JS+JQuery案例学习", link: "https://github.com/731016/webpage-basic-learning" },
      { text: "前端案例学习", link: "http://www.lvyestudy.com/" },
      { text: "JavaScript基础算法", link: "/代码库/javascript.html" },
    ],
  },
  {
    text: "vscode插件",
    collapsible: true,
    children: [
      { text: "vscode插件", link: "/开发环境/vscode.html" },
    ],
  },
  {
    text: "演示网站",
    collapsible: true,
    children: [
      { text: "基于vue的快递代取系统【毕业设计】", link: "http://119.3.104.52:8080/" },
    ],
  },
] as NavbarConfig;
