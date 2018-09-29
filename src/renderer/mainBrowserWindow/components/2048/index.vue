<template>
  <div>
    <table class="table">
      <tr v-for="(item, index) in matrix.length">
        <td v-for="(o, idx) in matrix.length">
          {{ matrix[index][idx] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .table {
    height: 100%;
    width: calc(100%);
    background: #000;
    margin: auto;
    tr {
      height: 25%;
      width: 25%;
      background: grey;
      td {
        width: 25%;
        text-align: center;
      }
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
import Game from './ts/Game'
import Event from './ts/Event'
export default Vue.extend({
  data () {
    return {
      matrix: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    }
  },
  mounted () {
    let event = new Event(this.matrix)
    let game = new Game(this.matrix, event)
    game.start()
  }
})
</script>
