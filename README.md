# acg-box
A webApp for everyone who loves Acg. It`s the first WebApp of me.

# ver.0
0-1 不要一开始就向着大而全 高大上也量力而为 时间很客观 利用迭代进行技术和性能 体验 设计的升级 先破壳而出 孵化出毛茸茸的小鸡


# 建议
* 请添加足够的注释和说明，例如组件中props的说明，一份代码的生命周期取决于他的可维护程度（很重要）


# 踩坑
## 页面居然所有元素可编辑
~~手机上的chrome/uc点击web元素，什么元素的点击都会调起系统键盘。~~(已解决)
 * 这个纯粹是阅读[spy-debugger文档](https://github.com/wuchangming/spy-debugger)不仔细，启动代理时的命令：**spy-debugger -w true**,这里的true会设置页面为可编辑（其实就是在调试的页面内注入：
```
document.body.contentEditable=true
```
&nbsp;&nbsp;&nbsp;&nbsp;所以：启动时使用**spy-debugger -w**就可以了
&nbsp;&nbsp;&nbsp;&nbsp;ps:*以后使用某一个选项，一个要阅读该选项的作用，不要想当然。*

## 手机页面console方案 -- vconsole
[vconsole](https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md)
[vconsole简书](https://www.jianshu.com/p/de447816dd41)
