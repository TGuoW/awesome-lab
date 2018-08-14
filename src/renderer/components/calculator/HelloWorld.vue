<template>
  <div class="main">
    <t-output :outputText="outputText"></t-output>
    <t-input :inputText="inputText"></t-input>
    <t-key-board @listenKeyBoard="update"></t-key-board>
  </div>
</template>

<script>
// import Vue from 'vue'
// // import {Provide, Vue} from 'vue-property-decorator'
import tInput from './input.vue'
import tOutput from './output.vue'
import tKeyBoard from './keyBoard.vue'
export default {
  data () {
    return {
      inputText: '0',
      outputText: '0'
    }
  },
  components: {
    tInput,
    tOutput,
    tKeyBoard
  },
  methods: {
    update (val, bool) {
      if (bool) {
        this.inputText = val
      } else {
        this.outputText = val
      }
    }
  }
}
// import Component from 'vue-class-component'
// // export default Vue.extend({
// //   // msg: string =  'Welcome to Your Vue.js App'
// //   data: function () {
// //     return {
// //       msg: 'Welcome to Your Vue.js Apps'
// //     }
// //   }
// // })
// @Component({
//   components: {
//     tInput,
//     tOutput,
//     tKeyBoard
//   }
// })
// export default class HelloWorld extends Vue {
//   msg: String = 'Welcome to Your Vue-Typescript App'
//   inputText: String = '0'
//   outputText: String = '0'
//   update (val, bool) {
//     if (bool) {
//       this.inputText = val
//     } else {
//       this.outputText = val
//     }
//   }
//   // @Provide() msg: string = 'Welcome to Your Vue-Typescript App'
// }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  background: #42b983;
  margin: auto;
  width: 4rem;
  height: 7rem;
}
/* @media screen and (max-width: 360px) {
  .main {
    width: 4rem;
    height: 7rem;
  }
}
@media screen and (max-width: 414px) and (min-width: 360px) {
  .main {
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 414px) {
  .main {
    width: 4rem;
    height: 7rem;
  }
} */
/* @media screen and (min-width: 414px) and (max-height: 736px) {
  .main {
    width: 414px;
    height: 100%;
  }
} */
</style>
