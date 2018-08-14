<template>
  <div id="app">
    <!-- <div class="head" @click="back()"></div> -->
    <!-- <router-view></router-view> -->
    <index/>
  </div>
</template>

<script>
  import index from './components/index'
  export default {
    name: 'my-project',
    components: {
      index
    },
    mounted () {
      (function (doc, win) {
        var docEl = doc.documentElement
        var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
        var recalc = function () {
          var clientWidth = docEl.clientWidth
          var clientHeight = docEl.clientHeight - 48
          if (clientWidth === undefined || clientHeight === undefined) return
          docEl.style.fontSize = clientHeight / 7 + 'px'
          console.log(docEl.style.fontSize)
        }
        if (doc.addEventListener === undefined) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
      })(document, window)
    }
  }
</script>

<style>
  /* CSS */
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
