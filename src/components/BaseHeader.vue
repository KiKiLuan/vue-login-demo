<template>
  <header class="base-header">
    <div class="item left">
      <slot name="left"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="item right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .base-header {
    position: relative;
    line-height: 38px;
    color: #fff;
    background: #222;
    text-align: center;
    display: flex;
    .title {
      flex: 1;
    }
    .item {
      width: 40px;
      a {
        color: #fff;
      }
    }
    .left {
      padding-left: 10px;
    }
    .right {
      padding-right: 10px;
      text-align: right;
    }
  }
</style>
