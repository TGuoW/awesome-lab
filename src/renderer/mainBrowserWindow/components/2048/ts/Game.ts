import Cube from './Cube'
import Event from './Event'
import Score from './Score'

let deepClone = (matrix) => matrix.map((ele) => ele.slice(0))

let compareMatrix = function (matrix1, matrix2) {
  let flag = true
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j].value !== matrix2[i][j].value) {
        console.log(i, j)
        flag = false
      }
    }
  }
  return flag
}

let setCubePos = function (matrix, queue) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j].setPos([i, j])
    }
  }
  queue.forEach((element) => {
    if (element.static === 'die') {
      let pos = element.dieCube.nowPos
      element.setPos([...pos])
    }
  })
}

let pushArr = function (arr) {
  let newArr: any[] = []
  arr.forEach((element) => {
    if (element.value) {
      newArr.push(element)
    }
  })
  let zeroNumber = arr.length - newArr.length
  while (zeroNumber > 0) {
    newArr.unshift(new Cube(0))
    zeroNumber--
  }
  return newArr
}

let reverseMatrix = function (matrix) {
  let newMartrix: Cube[][] = []
  for (let i = 0; i < matrix.length; i++) {
    newMartrix[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      newMartrix[i][j] = matrix[i][j]
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMartrix[j][i] = matrix[i][j]
    }
  }
  return newMartrix
}

let checkIsEnd = function (matrix, extraCubeNumber) {
  if (extraCubeNumber > 1) {
    return true
  }
  let flag = false
  for (let i = 0; i < matrix.length; i++) {
    let arr = pushArr(matrix[i])
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].value === arr[j + 1].value && arr[j].value !== 0) {
        return true
      }
    }
  }
  let newMatrix = reverseMatrix(matrix)
  for (let i = 0; i < newMatrix.length; i++) {
    let arr = pushArr(newMatrix[i])
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].value === arr[j + 1].value && arr[j].value !== 0) {
        return true
      }
    }
  }
  return flag
}

class Game {
  matrix: any[][] = []
  matrixAttr: any = {
    score: 0
  }
  cubeQueue: Cube[] = []
  event
  score
  Vue
  constructor (obj, Vue) {
    for (let i = 0; i < obj[0]; i++) {
      this.matrix.push(new Array(4))
      for (let j = 0; j < obj[1]; j++) {
        this.matrix[i][j] = new Cube(0)
      }
    }
    this.event = new Event()
    this.score = new Score(this.matrixAttr)
    this.Vue = Vue
    this.Vue.isShowEnd = false
    this.Vue.matrixAttr = Object.assign({}, this.matrixAttr)
  }
  render () {
    return this.matrix
  }
  renderScore () {
    return this.matrixAttr
  }
  start () {
    let self = this
    this.addCube()
    document.onkeydown = function (e) {
      let matrix = deepClone(self.matrix)
      switch (e.key) {
        case 'ArrowLeft':
          self.matrix = self.event.left(self.matrix)
          break
        case 'ArrowUp':
          self.matrix = self.event.up(self.matrix)
          break
        case 'ArrowRight':
          self.matrix = self.event.right(self.matrix)
          break
        case 'ArrowDown':
          self.matrix = self.event.down(self.matrix)
          break
      }
      if (!compareMatrix(matrix, self.matrix)) {
        let newScore = self.score.render(matrix, self.matrix)
        setCubePos(self.matrix, self.cubeQueue)
        self.matrixAttr = Object.assign({}, self.matrixAttr, newScore)
        self.Vue.matrixAttr = Object.assign({}, self.matrixAttr, newScore)
        self.Vue.cubeQueue = self.cubeQueue
        setTimeout(() => {
          self.addCube()
        }, 150)
      }
    }
  }
  end () {
    this.Vue.isShowEnd = true
    document.onkeydown = null
  }
  addCube () {
    let value: number = Math.random() > 0.5 ? 4 : 2
    let newCube = new Cube(value)
    let matrix = [...this.matrix]
    let tmp: Array<Object> = []
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (matrix[i][j].value === 0) {
          tmp.push({
            x: i,
            y: j
          })
        }
      }
    }
    let index = Math.floor(Math.random() * tmp.length)
    this.matrix[tmp[index]['x']][tmp[index]['y']] = newCube
    let flag = false
    for (let i = 0; i < this.cubeQueue.length; i++) {
      if (this.cubeQueue[i].nowPos[0] === tmp[index]['x'] && this.cubeQueue[i].nowPos[1] === tmp[index]['y']) {
        this.cubeQueue[i] = newCube
        flag = true
      }
    }
    if (!flag) {
      this.cubeQueue.push(newCube)
    }
    newCube.setPos([tmp[index]['x'], tmp[index]['y']])
    this.matrix.splice(tmp[index]['x'], 1, this.matrix[tmp[index]['x']])
    this.Vue.cubeQueue = this.cubeQueue
    if (!checkIsEnd(this.matrix, tmp.length)) {
      this.end()
    }
    return
  }
}

export default Game
