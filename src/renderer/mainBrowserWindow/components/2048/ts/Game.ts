class Game {
  newGame: number[][]
  event
  constructor (obj, event) {
    this.newGame = obj
    this.event = event
  }
  start () {
    // this.newGame = []
    let self = this
    this.addCube()
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          self.event.left()
          return
        case 38:
          self.event.up()
          self.addCube()
          return
        case 39:
          self.event.right()
          self.addCube()
          return
        case 40:
          self.event.down()
          return
      }
    }
  }
  addCube () {
    let newCube: number = Math.random() > 0.5 ? 4 : 2
    let matrix = [...this.newGame]
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          let arr = [...matrix[i]]
          arr[j] = newCube
          this.newGame.splice(i, 1, arr)
          return
        }
      }
    }
  }
}

export default Game
