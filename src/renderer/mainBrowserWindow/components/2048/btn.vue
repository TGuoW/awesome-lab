<template>
  <div>
    <div class="bg" @click="click">
      <div class="bg1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    click () {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss" scoped>
  .bg {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(148, 90, 3);
    border-radius: 12px / 30%;
    padding: 10px 10px;
    margin-bottom: 40px;
    font-family: NeonTech;
    .bg1 {
      padding: 5px 40px;
      border-radius: 6px / 30%;
      box-shadow: 0px 0px 10px rgb(87, 79, 12);
      background: rgb(161, 144, 66);
      transition: all 0.5s;
      user-select: none;
      &:hover {
        background: rgb(223, 199, 93);
      }
    }
  }
</style>
