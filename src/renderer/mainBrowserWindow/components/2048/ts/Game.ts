import Cube from './Cube'
import Event from './Event'

let deepClone = function (matrix) {
  let newMartrix: any[][] = []
  for (let i = 0; i < matrix.length; i++) {
    newMartrix[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      newMartrix[i][j] = matrix[i][j]
    }
  }
  return newMartrix
}

let compareMatrix = function (matrix1, matrix2) {
  let flag = true
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j].value !== matrix2[i][j].value) {
        flag = false
      }
    }
  }
  return flag
}

class Game {
  matrix: any[][] = []
  event
  constructor (obj) {
    for (let i = 0; i < obj[0]; i++) {
      this.matrix.push([])
      for (let j = 0; j < obj[1]; j++) {
        this.matrix[i][j] = new Cube(0)
      }
    }
    this.event = new Event(this.matrix)
  }
  render () {
    return this.matrix
  }
  start () {
    let self = this
    this.addCube()
    document.onkeydown = function (e) {
      let matrix = deepClone(self.matrix)
      switch (e.key) {
        case 'ArrowLeft':
          self.event.left()
          break
        case 'ArrowUp':
          self.event.up()
          break
        case 'ArrowRight':
          self.event.right()
          break
        case 'ArrowDown':
          self.event.down()
          break
      }
      if (!compareMatrix(matrix, self.matrix)) {
        self.addCube()
      }
    }
  }
  end () {

  }
  addCube () {
    let value: number = Math.random() > 0.5 ? 4 : 2
    let newCube = new Cube(value)
    let matrix = [...this.matrix]
    let tmp: Array<Object> = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j].value === 0) {
          tmp.push({
            x: i,
            y: j
          })
        }
      }
    }
    if (tmp.length === 0) {
      this.end()
      return
    }
    let index = Math.floor(Math.random() * tmp.length)
    this.matrix[tmp[index]['x']][tmp[index]['y']] = newCube
    this.matrix.splice(tmp[index]['x'], 1, this.matrix[tmp[index]['x']])
    return
  }
}

export default Game
