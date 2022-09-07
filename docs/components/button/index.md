# Button

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`color`、`size`、`round`来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <FButton color="blue">蓝色按钮</FButton>
    <FButton color="green">绿色按钮</FButton>
    <FButton color="gray">灰色按钮</FButton>
    <FButton color="yellow">黄色按钮</FButton>
    <FButton color="red">红色按钮</FButton>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)

:::demo 使用`icon`来定义 Button 的图标

```vue
<template>
  <div style="margin-bottom:20px;">
    <FButton color="green" icon="search">绿色按钮</FButton>
    <FButton color="yellow" icon="edit">黄色按钮</FButton>
    <FButton color="red" icon="delete"></FButton>
  </div>
</template>
```

:::
