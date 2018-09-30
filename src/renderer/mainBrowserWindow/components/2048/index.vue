<template>
  <div>
    <table v-if="matrix.length" class="table">
      <tr v-for="(item, index) in matrix.length">
        <td v-for="(o, idx) in matrix.length">
          <div :class="'cube ' + matrix[index][idx].class">
            <div>{{ matrix[index][idx].value | capitalize }}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .table {
    font-family: NeonTech;
    font-size: 32px;
    height: 100%;
    width: 100vh;
    background: rgb(148, 90, 3);
    padding: 16px;
    border-radius: 14px;
    margin: auto;
    tr {
      height: 20%;
      width: 20%;
      td {
        width: 20%;
        text-align: center;
        background: rgb(218, 180, 110);
        border-radius: 8px;
        .cube {
          width: 80%;
          height: 80%;
          margin: 10%;
          border-radius: 8px;
          text-align: center;
          vertical-align: middle;
          position: relative;
          div {
            position: absolute;
            width: 32px;
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
      }
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
import Game from './ts/Game'
export default Vue.extend({
  data () {
    return {
      initArr: [4, 4],
      matrix: Array<Array<any>>()
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
  mounted () {
    let game = new Game(this.initArr)
    this.matrix = game.render()
    game.start()
  }
})
</script>
