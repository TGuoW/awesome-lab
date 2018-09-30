class Cube {
  value: number
  class: string
  constructor (value) {
    this.value = value
    this.class = 'cube-' + value
  }
  combine () {
    this.value *= 2
    this.class = 'cube-' + this.value
  }
  zero () {
    this.value = 0
  }
}

export default Cube
