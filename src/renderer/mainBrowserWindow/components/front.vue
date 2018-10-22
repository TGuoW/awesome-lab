<template>
  <div>
    <div class="main">
      <div class="left item">
        <ul class="component-list">
          <router-link class="item" v-for="(item, index) in routerArr" :key="index" :to="{ path: '/' + item}"  tag="li">
            {{item}}
          </router-link>
        </ul>
      </div>
      <div class="right item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerArr: [
        'editor',
        'calculator',
        'toDoList',
        'ts2048'
      ],
      radio: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .head {
    text-align: center;
    background: rgb(17, 159, 253);
    span {
      color: rgb(14, 90, 48);
      font-size: 36px;
      // font-style: oblique;
      // font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
  }
  .main {
    margin-top: 48px;
  }
  .item {
    list-style: none;
    text-align: left;
    cursor: pointer;
    padding: 0 16px;
    color: rgb(39, 39, 39);
  }
  .component-list {
    font-size: 24px;
  }
</style>
