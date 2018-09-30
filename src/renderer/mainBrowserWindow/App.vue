<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'awesomeLab',
  mounted () {
    let self = this;
    (function (doc, win) {
      let docEl = doc.documentElement
      let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
      let recalc = function () {
        let clientHeight = docEl.clientHeight - 48
        docEl.style.fontSize = clientHeight / 7 + 'px'
        self.$store.commit('setWidth', docEl.clientWidth)
        self.$store.commit('setHeight', docEl.clientHeight)
      }
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
  }
}
</script>

<style lang="less">
  @import (css) url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @font-face {
    font-family: NeonTech;
    src: url('../assets/fonts/NeonTech.ttf');
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    // font-family: NeonTech;
    font-size: 37px;
    height: 100%;
    width: 100%;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    /* background: #2c3e50; */
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
