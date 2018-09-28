<template>
  <div v-if="todo">
    <div v-for="(ele, eIdx) in todos.list" :style="'width:' + cardWidth + 'px;float:left;margin-right:12px'">
      <el-card v-if="ele.length" v-for="(item, index) in ele" :key="index" class="box-card" :style="'width:' + cardWidth + 'px'">
        <div slot="header" class="clearfix">
          <span>{{ item.subTitle }}</span>
          <el-button style="float: right; padding: 3px 0" type="text">delete</el-button>
        </div>
        <div v-for="(i, o) in item.subList" :key="o" class="text item">
          {{ i }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    data () {
      return {
        list: [],
        cardWidth: 240,
        todos: {},
        cardNumber: Number
      }
    },
    computed: {
      cWidth () {
        return this.$store.state.Screen.clientWidth
      }
    },
    mounted () {
      this.setCardWidth(this.$store.state.Screen.clientWidth)
    },
    methods: {
      setCardWidth (clientWidth) {
        let cWidth = this.$store.state.Screen.clientWidth - 200
        let cardNumber = cWidth / (240 + 12)
        this.cardNumber = parseInt(cardNumber, 10)
        let oneCardWidth = 240
        if (cardNumber !== parseInt(cardNumber, 10)) {
          oneCardWidth = cWidth / parseInt(cardNumber, 10) - 12
        }
        this.cardWidth = oneCardWidth
      },
      setTodos (cardNumber) {
        if (!this.todo || !cardNumber) {
          return
        }
        this.todos.title = this.todo.title
        this.todos.list = []
        for (let i = 0; i < cardNumber; i++) {
          this.todos.list[i] = []
          let j = i
          while (j < this.todo.list.length) {
            this.todos.list[i].push(this.todo.list[j])
            j += cardNumber
          }
        }
      }
    },
    watch: {
      cWidth (val) {
        this.setCardWidth(val)
      },
      todo (val) {
        this.setTodos(this.cardNumber)
      },
      cardNumber (val) {
        this.setTodos(val)
      }
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
