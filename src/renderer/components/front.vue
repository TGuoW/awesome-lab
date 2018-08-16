<template>
  <div>
    <div class="head">
      <span>玩具店</span>
    </div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
    <ul class="component-list">
      <router-link class="item" v-for="(item, index) in routerArr" :key="index" :to="{ path: '/' + item}"  tag="li">
        {{item}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerArr: [
        'editor',
        'calculator',
        'toDoList'
      ],
      radio: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .head {
    text-align: center;
    background: rgb(255, 255, 255);
    span {
      color: rgb(14, 90, 48);
      font-size: 36px;
      // font-style: oblique;
      // font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }
  .item {
    cursor: pointer;
    color: blue;
  }
  .component-list {
    font-size: 24px;
  }
</style>
