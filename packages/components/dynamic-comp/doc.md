# 动态组件

> 根据配置对象，动态渲染组件

## 类型

- boolean
- (this: instance) => boolean
- 

## 特性

1. 通过配置对象，动态渲染组件，脱离SFC限制。
2. 内置多种组件常用方法，如：v-if、v-show的切换函数等。
3. 支持虚拟节点（VNode）、普通组件（Component）、原生dom（Native DOM）、全局组件（Global Component）、函数式组件（Function Component）。
4. 内置多种指令，如：v-dc-lazy、v-dc-keep等。
