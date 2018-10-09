class Cube {
  value: number
  class: string
  static: string
  prevPos: number[]
  nowPos: number[]
  dieCube
  isShow: boolean
  constructor (value) {
    this.isShow = true
    this.static = 'alive'
    this.value = value
    this.class = 'cube-' + value + ' animation'
    setTimeout(() => {
      this.class = 'cube-' + this.value
    }, 150)
  }
  combine () {
    this.value *= 2
    this.class = 'cube-' + this.value + ' animation'
    setTimeout(() => {
      this.class = 'cube-' + this.value
    }, 150)
  }
  zero (posCube) {
    this.dieCube = posCube
    this.static = 'die'
    this.class = 'cube-' + this.value * 2
    this.value = 0
    setTimeout(() => {
      this.isShow = false
    }, 150)
  }
  setPos (arr) {
    if (this.nowPos) {
      this.prevPos = [...this.nowPos]
    }
    this.nowPos = [...arr]
  }
}

export default Cube
