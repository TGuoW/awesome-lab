<template>
  <div>
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td @click="addNumber('(')">(</td>
        <td @click="addNumber(')')">)</td>
        <td @click="addNumber('²')">²</td>
        <td @click="addNumber('√')">√</td>
      </tr>
      <tr>
        <td @click="clearInput()">AC</td>
        <td @click="drop()">←</td>
        <td @click="addNumber('÷')">÷</td>
        <td @click="addNumber('×')">×</td>
      </tr>
      <tr>
        <td @click="addNumber('7')">7</td>
        <td @click="addNumber('8')">8</td>
        <td @click="addNumber('9')">9</td>
        <td @click="addNumber('-')">-</td>
      </tr>
      <tr>
        <td @click="addNumber('4')">4</td>
        <td @click="addNumber('5')">5</td>
        <td @click="addNumber('6')">6</td>
        <td @click="addNumber('+')">+</td>
      </tr>
      <tr>
        <td @click="addNumber('1')">1</td>
        <td @click="addNumber('2')">2</td>
        <td @click="addNumber('3')">3</td>
        <td rowspan="2" @click="solve()">=</td>
      </tr>
      <tr>
        <td @click="addNumber('0')">0</td>
        <td @click="addNumber('.')">.</td>
        <td>ans</td>
      </tr>
    </table>
  </div>
</template>

<script>
import math from 'mathjs'
export default {
  data () {
    return {
      inputText: '0',
      outputText: []
    }
  },
  methods: {
    jj () {
      this.inputText = '2'
    },
    clearInput () {
      this.inputText = '0'
    },
    drop () {
      if (this.inputText.length > 1) {
        this.inputText = this.inputText.substr(0, this.inputText.length - 1)
      } else if (this.inputText !== '0') {
        this.inputText = '0'
      }
    },
    addNumber (res) {
      let endChar = this.inputText.charAt(this.inputText.length - 1)
      let endChar2 = this.inputText.charAt(this.inputText.length - 2)
      let newChar = res
      switch (newChar) {
        case '+':
        case '×':
        case '÷':
          if (isNaN(endChar) && !isNaN(endChar2) && endChar !== ')' && endChar !== '²') {
            this.inputText = this.inputText.substring(0, this.inputText.length - 1) + newChar
          } else {
            this.inputText += newChar
          }
          break
        case '-':
          if (endChar !== '-') {
            this.inputText += newChar
          }
          break
        case '.':
          if (!isNaN(this.inputText[this.inputText.length - 1])) {
            this.inputText += newChar
          }
          break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (this.inputText.length === 1 && this.inputText === '0') {
            this.inputText = newChar
          } else {
            this.inputText += newChar
          }
          break
        case '(':
          if (this.inputText.length === 1 && this.inputText === '0') {
            this.inputText = newChar
          } else if (isNaN(this.inputText[this.inputText.length - 1])) {
            this.inputText += newChar
          }
          break
        case ')':
          this.inputText += newChar
          break
        case '0':
          // if (!isNaN(endChar) && this.inputText !== '0') {
          if (this.inputText !== '0') {
            this.inputText += newChar
          }
          break
        case '²':
          if (!isNaN(endChar) || endChar === ')') {
            this.inputText += newChar
          }
          break
        case '√':
          if (this.inputText.length === 1 && this.inputText === '0') {
            this.inputText = newChar
          } else {
            this.inputText += newChar
          }
          break
      }
    },
    solve () {
      let str = this.inputText.split('')
      let endResult = this.solveString(str)
      this.outputText = [this.inputText + '=', endResult[0]]
      this.inputText = '0'
    },
    solveString (res) {
      let output = []
      let input = ['#']
      let isp = { '#': 0, '(': 1, '×': 5, '÷': 5, '+': 3, '-': 3, ')': 6, '√': 0.5 }
      let icp = { '#': 0, '(': 6, '×': 4, '÷': 4, '+': 2, '-': 2, ')': 1, '√': 7 }
      // let res = this.inputText.split('')
      let result = []
      let endResult = []
      for (let i = 0; i < res.length; i) {
        result.push(res[i])
        i++
        if (!isNaN(res[i - 1])) {
          while (!isNaN(res[i]) || res[i] === '.') {
            result[result.length - 1] += res[i]
            i++
          }
        }
      }
      console.log(result)
      result.push('#')
      for (let i = 0; i < result.length; i++) {
        if (!isNaN(result[i]) || result[i] === '²') {
          output.push(result[i])
        } else if (isp[input[input.length - 1]] < icp[result[i]]) {
          // console.log(...input)
          input.push(result[i])
        } else if (isp[input[input.length - 1]] > icp[result[i]]) {
          if (isp[input[input.length - 1]] > icp[result[i]]) {
            let t = input.pop()
            output.push(t)
            i--
          }
          if (isp[input[input.length - 1]] === icp[result[i]]) {
            input.pop()
          }
          if (isp[input[input.length - 1]] < icp[result[i]]) {
            input.push(result[i])
          }
        } else if (isp[input[input.length - 1]] === icp[result[i]]) {
          input.pop()
        }
      }
      // console.log(output)
      for (let i = 0; i < output.length; i++) {
        console.log([...endResult])
        if (!isNaN(output[i])) {
          output[i] = parseFloat(output[i])
          endResult.push(output[i])
        } else {
          switch (output[i]) {
            case '+':
              endResult.push(
                parseFloat(
                  math.format(
                    math.add(
                      math.bignumber(endResult.pop()), math.bignumber(endResult.pop())
                    )
                  )
                )
              )
              // endResult.push((endResult.pop() + endResult.pop()))
              break
            case '-':
              endResult.push(
                parseFloat(
                  math.format(
                    -math.subtract(
                      math.bignumber(endResult.pop()), math.bignumber(endResult.pop())
                    )
                  )
                )
              )
              // endResult.push(-(endResult.pop() - endResult.pop()))
              break
            case '×':
              endResult.push(
                parseFloat(
                  math.format(
                    math.multiply(
                      math.bignumber(endResult.pop()), math.bignumber(endResult.pop())
                    )
                  )
                )
              )
              // endResult.push(endResult.pop() * endResult.pop())
              break
            case '÷':
              endResult.push(
                parseFloat(
                  math.format(
                    1 / math.divide(
                      math.bignumber(endResult.pop()), math.bignumber(endResult.pop())
                    )
                  )
                )
              )
              // endResult.push(1 / (endResult.pop() / endResult.pop()))
              break
            case '²':
              let tmp = endResult.pop()
              endResult.push(tmp * tmp)
              break
            case '√':
              endResult.push(math.sqrt(endResult.pop()))
              break
          }
        }
        // console.log([...endResult])
      }
      // console.log(endResult)
      return endResult
    }
  },
  // props: ['inputText'],
  watch: {
    inputText (val) {
      this.$emit('listenKeyBoard', val, true)
    },
    outputText (val) {
      this.$emit('listenKeyBoard', val, false)
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 72%;
    background: rgb(131, 131, 131);
    font-size: 0.4rem;
  }
  table {
    width: 100%;
    height: 100%;
    border: none;
  }
  tr {
    width: 100%;
    height: 17%;
    border: none;
  }
  tr td {
    border: none;
    cursor: pointer;
    width: 25%;
    background: rgb(187, 187, 187);
    user-select: none;
  }
  tr td:hover {
    background: rgb(175, 175, 175);
  }
  tr td:active {
    background: rgb(241, 165, 24);
  }
</style>
