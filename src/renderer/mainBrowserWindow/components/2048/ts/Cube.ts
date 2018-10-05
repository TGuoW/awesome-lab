class Cube {
  value: number
  class: string
  static: string
  prevPos: number[]
  nowPos: number[]
  dieCube
  constructor (value) {
    this.static = 'alive'
    this.value = value
    this.class = 'cube-' + value
  }
  combine () {
    this.value *= 2
    this.class = 'cube-' + this.value
  }
  zero (posCube) {
    this.dieCube = posCube
    this.static = 'die'
    this.value = 0
  }
  setPos (arr) {
    if (this.nowPos) {
      this.prevPos = [...this.nowPos]
    }
    this.nowPos = [...arr]
  }
}

export default Cube
