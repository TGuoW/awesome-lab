<template>
  <div class="flex">
    <div class="head"
      id="head"
      ref="head">
      <span @click="back()">玩具店</span>
      <router-link class="btn" v-for="(item, index) in btnArr" :key="index" :to="{ path: '/' + item }" tag="div">
        {{item}}
        <i @click.stop="deleteRoute(item)">✘</i>
      </router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowHead: false,
      btnArr: []
    }
  },
        // v-show="isShowHead" 
  // computed: {
  //   isShowHead () {
  //     return this.$router.currentRoute.fullPath === '/'
  //   }
  // },
  methods: {
    back () {
      this.$router.push({ path: '/' })
    },
    deleteRoute (item) {
      let deleteI = function (arr, it, self) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === it) {
            let lastPath = '/' + (arr[i - 1] ? arr[i - 1] : '')
            self.$router.push({ path: lastPath})
            for (let j = i; j < arr.length - 1; j++) {
              arr[j] = arr[j + 1]
            }
            arr.pop()
            return
          } 
        }
      }
      deleteI(this.btnArr, item, this)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath !== '/' && from.fullPath === '/') {
        let path = to.fullPath.substr(1, to.fullPath.length)
        let find = function (arr, tag) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === tag) {
              return false
            }
          }
          return true
        }
        if (find(this.btnArr, path)) {
          this.btnArr.push(path)
        }
      }
      this.isShowHead = to.fullPath === '/' ? false : true
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .head {
    text-align: left;
    background: brown;
    height: 48px;
    span {
      color: #fff;
      font-size: 28px;
      line-height: 48px;
      font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .btn {
      cursor: pointer;
      display: inline;
      font-size: 20px;
      background: rgb(128, 34, 34);
      padding: 3px 8px;
      border-radius: 5px;
      margin: 0 3px;
    }
  }
  .component-list {
    font-size: 24px;
  }
  .main {
    flex: 1;
    background: #fff;
  }
</style>
