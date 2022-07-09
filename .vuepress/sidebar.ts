import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "JavaSE",
    collapsible: true,
    children: [
      { text: "Java基础", link: "/JavaSE/Java基础.html" },
      { text: "面向对象编程", link: "/JavaSE/面向对象编程.html" },
      { text: "JavaAPI", link: "/JavaSE/JavaAPI.html" },
      { text: "包装类型", link: "/JavaSE/包装类型.html" },
      { text: "数据结构", link: "/JavaSE/数据结构.html" },
      { text: "集合", link: "/JavaSE/集合.html" },
      { text: "泛型", link: "/JavaSE/泛型.html" },
      { text: "异常处理", link: "/JavaSE/异常处理.html" },
      { text: "IO流", link: "/JavaSE/IO流.html" },
      { text: "线程", link: "/JavaSE/线程.html" },
      { text: "网络编程", link: "/JavaSE/网络编程.html" },
      { text: "函数式接口", link: "/JavaSE/函数式接口.html" },
      { text: "Debug调试", link: "/JavaSE/Debug.html" },
    ],
  },
  {
    text: "反射",
    link: "/反射/反射.html",
  },
  {
    text: "设计模式",
    link: "/设计模式/设计模式.html",
  },
  {
    text: "MySQL",
    collapsible: true,
    children: [
      { text: "MySQL安装", link: "/MySQL/MySql安装.html" },
      { text: "MySQL基础", link: "/MySQL/MySQL基础.html" },
      { text: "JDBC组件", link: "/MySQL/JDBC组件.html" },
      { text: "控制台购物商城实现", link: "/MySQL/购物商城.html" },
    ],
  },
  {
    text: "SQLServer",
    link: "/SQLServer/SqlServer.html",
  },
  {
    text: "JavaWeb",
    collapsible: true,
    children: [
      { text: "JSP + servlet", link: "/JavaWeb/jsp_servlet.html" },
    ],
  },
  {
    text: "前端",
    collapsible: true,
    children: [
      { text: "HTML", link: "/前端/HTML.html" },
      { text: "CSS", link: "/前端/CSS.html" },
      { text: "Javascript语法基础", link: "/前端/Javascript语法基础.html" },
      { text: "Web API", link: "/前端/Web-Api.html" },
      { text: "Vue2", link: "/前端/vue2.html" },
      { text: "Vue3", link: "/前端/vue3.html" },
      { text: "移动布局基础", link: "/前端/移动布局基础.html" },
      { text: "前后端交互", link: "/前端/前后端交互.html" },
      { text: "前端项目注意事项", link: "/前端/前端项目注意事项.html" },
    ],
  },
  {
    text: "JQuery",
    collapsible: true,
    children: [
      { text: "JQuery基础", link: "/JavaWeb/Jquery.html" },
      { text: "jQuery-Ajax", link: "/JavaWeb/Ajax.html" },
    ],
  },
  {
    text: "版本控制",
    collapsible: true,
    children: [
      { text: "SVN", link: "/版本控制/SVN.html" },
      { text: "Git", link: "/版本控制/Git.html" },
    ],
  },
  {
    text: "SSM 框架",
    collapsible: true,
    children: [
      { text: "Mybatis", link: "/SSM框架/mybatis.html" },
      { text: "spring", link: "/SSM框架/spring.html" },
      { text: "springMVC", link: "/SSM框架/springMVC.html" },
      { text: "springBoot", link: "/SSM框架/springBoot.html" },
      { text: "springClond", link: "/SSM框架/springClond.html" },
      { text: "springClond Alibaba", link: "/SSM框架/springClond Alibaba.html" },
    ],
  },
  {
    text: "Redis",
    collapsible: true,
    children: [
      { text: "Redis", link: "/Redis/redis.html" },
    ],
  },
  {
    text: "消息队列",
    collapsible: true,
    children: [
      { text: "RadditMQ", link: "/消息队列/rabbitMQ.html" },
    ],
  },
  {
    text: "Linux",
    collapsible: true,
    children: [
      { text: "常用linux部署命令", link: "/linux/常用linux命令.html" },
      { text: "linux安装", link: "/linux/linux安装.html" },
      { text: "正则表达式", link: "/linux/正则表达式.html" },
      { text: "配置Samba服务器", link: "/linux/samba服务器.html" },
      { text: "Ununtu问题解答", link: "/linux/ubuntu问题解答.html" },
    ],
  },
  {
    text: "面试",
    collapsible: true,
    children: [
      { text: "Java基础面试16问部分", link: "/面试/面试题.html" },
      { text: "Java基础", link: "/面试/Java基础.html" },
      { text: "群硕软件", link: "/面试/群硕软件.html" },
      { text: "赛德勤", link: "/面试/赛德勤.html" },
    ],
  },
  {
    text: "开发环境",
    collapsible: true,
    children: [
      { text: "vscode配置", link: "/开发环境/vscode.html" },
      { text: "tomcat配置", link: "/开发环境/Tomcat配置.html" },
      { text: "idea配置", link: "/开发环境/IDEA配置.html" },
      { text: "maven配置", link: "/开发环境/maven配置.html" },
      { text: "cmd编码-编码解决", link: "/开发环境/cmd编码-编码解决.html" },
      { text: "单元测试", link: "/开发环境/单元测试.html" },
      { text: "压力测试", link: "/开发环境/压力测试.html" },
    ],
  },
  {
    text: "c语言",
    link: "/c语言/c.html",
  },
  {
    text: "Python",
    link: "/Python/pyhton.html",
  },
  {
    text: "计算机网络",
    link: "/计算机网络/network.html",
  },
  {
    text: "劳动合同法",
    collapsible: true,
    children: [
      { text: "<<劳动合同法>>的重要性和范围", link: "/劳动合同法/《劳动合同法》的重要性和范围.html" },
      { text: "劳动合同的效力", link: "/劳动合同法/劳动合同的效力.html" },
      { text: "劳动合同的分类", link: "/劳动合同法/劳动合同的分类.html" },
      { text: "试用期", link: "/劳动合同法/试用期.html" },
      { text: "服务期和违约金", link: "/劳动合同法/服务期和违约金.html" },
      { text: "竞业限制和违约金", link: "/劳动合同法/竞业限制和违约金.html" },
    ],
  },
  {
    text: "高等数学",
    collapsible: true,
    children: [
      { text: "基本初等函数图形", link: "/高等数学/基本初等函数图形.html" },
      { text: "特殊值的三角函数值表", link: "/高等数学/特殊值的三角函数值表.html" },
      { text: "三角恒等变换", link: "/高等数学/三角恒等变换.html" },
      { text: "诱导公式", link: "/高等数学/诱导公式.html" },
      { text: "一元三次方程展开", link: "/高等数学/一元三次方程展开.html" },
      { text: "指数函数的运算法则", link: "/高等数学/指数函数的运算法则.html" },
      { text: "华氏度F与摄氏度C的转换", link: "/高等数学/华氏度F与摄氏度C的转换.html" },
      { text: "函数、极限、连续", link: "/高等数学/函数、极限、连续.html" },
      { text: "一元函数微分学", link: "/高等数学/一元函数微分学.html" },
      { text: "一元函数积分学", link: "/高等数学/一元函数积分学.html" },
      { text: "常微分方程", link: "/高等数学/常微分方程.html" },
    ],
  },
] as SidebarConfig;
