<template>
  <div class="index" @mouseup="selectSlide(false, $event)">
    <div class="title">
      markdown-editor
    </div>
    <div id="main" ref="main">
      <div class="edit" ref="edit" v-if="!isFull.is || isFull.choose">
        <div class="tool">
          <ul>
            <li>
              <i v-if="!isFull.is" class="fa fa-window-maximize fa-fw" @click="fullScreen(1, true)"></i>
              <i v-else class="fa fa-window-restore fa-fw" @click="fullScreen(1, false)"></i>
              <i class="fa fa-music fa-fw" @click="insert('#')"></i>
              <i class="fa fa-music fa-fw" @click="insert('----------')"></i>
              
            </li>
          </ul>
        </div>
        <div class="text">
          <textarea name="" id="" v-model="inputString"></textarea>
        </div>
      </div>
      <div class="slide" @mousedown="selectSlide(true, $event)"></div>
      <div class="view" ref="view" v-if="!isFull.is || !isFull.choose">
        <div class="tool">
          <ul>
            <li>
              <i v-if="!isFull.is" class="fa fa-window-maximize fa-fw" @click="fullScreen(2, true)"></i>
              <i v-else class="fa fa-window-restore fa-fw" @click="fullScreen(2, false)"></i>
            </li>
          </ul>
        </div>
        <div class="vm-markdown-html" v-html="htmlString"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'index',
  data () {
    return {
      inputString: '',
      htmlString: '',
      // isFullScreen: false,
      isFull: {
        is: false,
        choose: false
      },
      isSelectSlide: false,
      recentWidth: '49.8%',
      timer: {},
      x: Number
    }
  },
  methods: {
    setX: function () {
      if (this.isSelectSlide) {
        let x = window.event.clientX
        if (x < 200) {
          x = 200
        }
        if (x > document.body.clientWidth - 200) {
          x = document.body.clientWidth - 200
        }
        this.x = x
      }
    },
    selectSlide: function (val, e) {
      let self = this
      self.isSelectSlide = val
      if (val) {
        this.$refs.main.onmousemove = self.setX
        self.timer = setInterval(function () {
          if (self.$refs.edit) {
            self.$refs.edit.style.width = self.x + 'px'
          }
        }, 30)
      } else {
        this.$refs.main.onmousemove = null
        clearInterval(self.timer)
      }
    },
    fullScreen: function (val, bool) {
      this.isFull.is = bool
      if (val === 1) {
        if (bool) {
          this.isFull.choose = true
          this.recentWidth = this.$refs.edit.clientWidth + 'px'
          this.$refs.edit.style.width = '100%'
        } else {
          this.$refs.edit.style.width = this.recentWidth
        }
      }
      if (val === 2) {
        if (bool) {
          this.isFull.choose = false
          // this.recentWidth = this.$refs.edit.clientWidth + 'px'
          // this.$refs.edit.style.width = '0%'
        } else {
          // this.$refs.edit.style.width = this.recentWidth
        }
      }
    },
    insert: function (val) {
      this.inputString += '\n' + val + ' '
    },
    parseHtml: function () {
      let style = {
        ul: `
              margin: 10px 20px;
              list-style-type: square;
              padding: 0;
            `,
        ol: `
              margin: 10px 20px;
              list-style-type: decimal;
              padding: 0;
            `,
        li: `
              display: list-item;
              padding: 0;
            `,
        hr: `
              margin: 15px 0;
              border-top: 1px solid #eeeff1;
            `,
        pre: `
              display: block;
              margin: 10px 0;
              padding: 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
              color: #656565;
              font-size: 14px;
             `,
        blockquote: `
                      display: block;
                      border-left: 4px solid #ddd;
                      margin: 15px 0;
                      padding: 0 15px;
                    `,
        img: `
               margin: 20px 0;
             `,
        a: `
            color: #41b883;
           `,
        table: `
                 border: 1px solid #eee;
                 border-collapse: collapse;
               `,
        tr: `
              border: 1px solid #eee;
            `,
        th: `
              padding: 8px 30px;
              border-right: 1px solid #eee;
              background-color: #f2f2f2;
            `,
        td: `
              padding: 8px 30px;
              border-right: 1px solid #eee;
            `
      }
      let html = document.getElementsByClassName('vm-markdown-html')[0]
      let tagNames = Object.keys(style)
      for (let i = 0; i < tagNames.length; i++) {
        let _tagNames = html.getElementsByTagName(tagNames[i])
        if (_tagNames.length > 0) {
          for (let j = 0; j < _tagNames.length; j++) {
            _tagNames[j].style = style[tagNames[i]]
          }
        }
      }
    }
  },
  watch: {
    inputString: function (val) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value
        },
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
      this.htmlString = marked(val)
      console.log(val)
      setTimeout(() => {
        this.parseHtml()
      }, 0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  // width: 100%;
  // height: 100%;
}
.title {
  font-size: 32px;
  // font-style: oblique;
}
li {
  list-style: none;
}
#main {
  position: absolute;
  width: 100%;
  top: 40px;
  bottom: 0;
  height: auto;
  display: flex;
  .edit {
    position: relative;
    text-align: left;
    width: 49.8%;
    height: 100%;
    .text {
      width: 100%;
    }
    textarea {
      box-sizing: content-box;
      border: none;
      position: absolute;
      font-size: 16px;
      top: 32px;
      left: 2%;
      bottom: 0;
      outline: none;
      background: rgb(255, 255, 255);
      resize: none;
      height: auto;
      width: 98%;
    }
  }
  .view {
    text-align: left;
    flex: 1;
    width: auto;
    height: 100%;
    line-height:32px;
    position: relative;
    .vm-markdown-html {
      position: absolute;
      top: 32px;
      bottom: 0;
      width: 98%;
      height: auto;
      right: 0;
      overflow: scroll;
      overflow-x: hidden;
    }
  }
  .slide {
    cursor: e-resize;
    float: left;
    width: 0.4%;
    height: 100%;
    background: grey;
  }
  .tool {
    width: 100%;
    height: 32px;
    background: rgb(59, 59, 59);
    font-size: 16px;
    li {
      color: rgb(218, 218, 218);
      cursor: pointer;
      line-height: 32px;
    }
  }
}
</style>
