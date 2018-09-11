<template>
  <div class="flex">
    <div class="head"
      id="head"
      ref="head">
      <span class="awesome-lab" @click="back()">AWESOME-LAB</span>
      <router-link class="btn" v-for="(item, index) in btnArr" :key="index" :to="{ path: '/' + item }" tag="div">
        {{item}}
        <span @click.stop="deleteRoute(item)">x</span>
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
            self.$router.push({ path: lastPath })
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
      this.isShowHead = to.fullPath !== '/'
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
    background: rgb(44, 171, 230);
    height: 48px;
    .awesome-lab {
      float: left;
      cursor: pointer;
      margin-left: 36px;
      color: #fff;
      font-size: 24px;
      line-height: 48px;
    }
    .btn {
      cursor: pointer;
      display: inline-block;
      font-size: 20px;
      background: rgb(255, 255, 255);
      padding: 3px 8px;
      border-radius: 5px;
      margin: 10px 3px;
      span {
        display: inline-block;
        margin: auto;
        width: 20px;
        text-align: center;
        background: rgb(204, 204, 204);
        &:hover {
          background: rgb(151, 151, 151);
        }
      }
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