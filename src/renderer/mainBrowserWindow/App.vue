<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'lulumi-browser',
  mounted () {
    (function (doc, win) {
      let docEl = doc.documentElement
      let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
      let recalc = function () {
        let clientWidth = docEl.clientWidth
        let clientHeight = docEl.clientHeight - 48
        // if (clientWidth === undefined || clientHeight === undefined) return
        docEl.style.fontSize = clientHeight / 7 + 'px'
        console.log(docEl.style.fontSize)
      }
      // if (doc.addEventListener === undefined) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
  }
}
</script>

<style lang="less">
  @import (css) url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
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
