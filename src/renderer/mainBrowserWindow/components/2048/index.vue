<template>
  <div class="bg">
    <div class="btn-group">
      <btn @click="start">start</btn>
      <!-- <btn>undo</btn>
      <btn>end</btn> -->
    </div>
    <div class="table">
      <div class="box">
        <div v-for="item in 4">
          <div v-for="i in 4" :class="'cell position' + (item - 1) + '-' + (i - 1)"></div>
        </div>
        <div v-for="(item, index) in cubeQueue" :key="index"
          v-if="item.isShow"
          :class="'cube position' + item.nowPos[0] + '-' + item.nowPos[1] + ' ' + item.class + (item.value ? ' top-index' : '')">
          <div>{{ item.value | capitalize }}</div>
        </div>
      </div>
    </div>
    <div class="information">
      <div class="score">
        score: {{ matrixAttr.score }}
      </div>
      <div v-if="isShowEnd" class="end-info animation">
        <p class="over">Game Over!</p>
        <p>Your Score</p>
        <p>{{ matrixAttr.score }}</p>
        <p>Highest Score</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import btn from './btn.vue'
import Game from './ts/Game'
export default Vue.extend({
  components: {
    btn: btn
  },
  data () {
    return {
      game: Object(),
      initArr: [4, 4],
      matrix: Array<Array<any>>(),
      matrixAttr: {},
      cubeQueue: Array<any>(),
      isShowEnd: false
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return ''
      } else {
        return value
      }
    }
  },
  methods: {
    start () {
      let game = new Game(this.initArr, this)
      this.game = game
      if (this.game) {
        this.game.start()
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  @keyframes conbineCube {
    from {
      transform: scale(1)
    }
    50% {
      transform: scale(1.1)
    }
    to {
      transform: scale(1)
    }
  }
  .animation {
    animation: conbineCube 0.15s;
  }
  .bg {
    position: relative;
    width: 100%;
    height: 100%;
    // min-height: 420px;
    min-width: 16rem;
    background: rgb(51, 51, 51);
  }
  .btn-group {
    position: absolute;
    top: 60px;
    left: 60px;
    width: auto;
  }
  .information {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    font-size: 36px;
    font-family: NeonTech !important;
    .score {
      color: #fff;
      margin: 20px;
      width: 200px;
      right: 0;
      position: absolute;
    }
    .end-info {
      color: #fff;
      margin: 20px;
      margin-top: 160px;
      .over {
        font-size: 48px;
        color: rgb(255, 174, 0);
      }
    }
  }
  .table {
    font-family: NeonTech;
    font-size: 32px;
    height: 100%;
    min-width: 420px;
    width: 100vh;
    background: rgb(148, 90, 3);
    padding: 16px;
    border-radius: 14px;
    margin: auto;
    .box {
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .cell {
      position: absolute;
      width: 22%;
      height: 22%;
      text-align: center;
      background: rgb(223, 199, 93);
      border-radius: 8px;
    }
    .top-index {
      z-index: 10;
    }
    // .animation {
    //   animation: conbineCube 0.15s infinite;
    // }
    .cube {
      position: absolute;
      width: 22%;
      height: 22%;
      background: rgb(223, 199, 93);
      border-radius: 8px;
      text-align: center;
      transition: all 0.15s;
      div {
        position: absolute;
        width: 100%;
        height: 32px;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .cube-2 {
      background: rgb(248, 215, 26);
    }
    .cube-4 {
      background: rgb(204, 241, 37);
    }
    .cube-8 {
      background: rgb(241, 159, 37);
    }
    .cube-16 {
      background: rgb(241, 136, 37);
    }
    .cube-32 {
      background: rgb(241, 95, 37);
    }
    .cube-64 {
      background: rgb(241, 37, 37);
    }
    .cube-128 {
      background: rgb(125, 37, 241);
    }
    .cube-256 {
      background: rgb(57, 37, 241);
    }
    .cube-512 {
      background: rgb(37, 193, 241);
    }
    .cube-1024 {
      background: rgb(37, 241, 122);
    }
    .cube-2048 {
      background: rgb(67, 236, 0);
    }
    .cube-4096 {
      background: rgb(3, 71, 148);
    }
    .cube-8192 {
      background: rgb(1, 92, 54);
    }
    .cube-16384 {
      background: rgb(95, 53, 43);
    }
    .cube-32768 {
      background: rgb(133, 133, 133);
    }
    .cube-32768 {
      background: rgb(255, 255, 255);
    }
    .position0-0 {
      left: 0%;
      top: 0%;
    }
    .position0-1 {
      left: 26%;
      top: 0%;
    }
    .position0-2 {
      left: 52%;
      top: 0%;
    }
    .position0-3 {
      left: 78%;
      top: 0%;
    }
    .position1-0 {
      top: 26%;
      left: 0%;
    }
    .position1-1 {
      top: 26%;
      left: 26%;
    }
    .position1-2 {
      top: 26%;
      left: 52%;
    }
    .position1-3 {
      top: 26%;
      left: 78%;
    }
    .position2-0 {
      top: 52%;
      left: 0%;
    }
    .position2-1 {
      top: 52%;
      left: 26%;
    }
    .position2-2 {
      top: 52%;
      left: 52%;
    }
    .position2-3 {
      top: 52%;
      left: 78%;
    }
    .position3-0 {
      top: 78%;
      left: 0%;
    }
    .position3-1 {
      top: 78%;
      left: 26%;
    }
    .position3-2 {
      top: 78%;
      left: 52%;
    }
    .position3-3 {
      top: 78%;
      left: 78%;
    }

  }
</style>