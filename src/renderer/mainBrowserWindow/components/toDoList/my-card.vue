<template>
  <div v-if="todo">
    <el-card v-for="(item, index) in todo.list" :key="index" class="box-card" :style="'width:' + cardWidth + 'px'">
      <div slot="header" class="clearfix">
        <span>{{ item.subTitle }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">delete</el-button>
      </div>
      <div v-for="(i, o) in item.subList" :key="o" class="text item">
        {{ i }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    data () {
      return {
        list: [],
        cardWidth: 240
      }
    },
    mounted () {
      let cWidth = document.documentElement.clientWidth - 180
      let cardNumber = cWidth / 240
      let oneCardWidth = 240
      if (cardNumber !== parseInt(cardNumber, 10)) {
        oneCardWidth = cWidth / parseInt(cardNumber, 10)
      }
      this.cardWidth = oneCardWidth
    }
  }
</script>

<style lang="scss" scoped>
  .box-card {
    float: left;
    margin-top: 8px;
    margin-left: 12px;
    margin-bottom: 10px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
