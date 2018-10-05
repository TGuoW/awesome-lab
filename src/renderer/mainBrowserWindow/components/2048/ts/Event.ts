import Cube from './Cube'
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

let addArr = function (arr) {
  arr = pushArr(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i].value === arr[i - 1].value) {
      arr[i].combine()
      arr[i - 1].zero(arr[i])
      i--
    }
  }
  return pushArr(arr)
}

let reverseArr = function (arr) {
  return arr.reverse()
}

let reverseMatrix = function (matrix) {
  let newMartrix: number[][] = []
  for (let i = 0; i < matrix.length; i++) {
    newMartrix[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      newMartrix[i][j] = 0
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMartrix[j][i] = matrix[i][j]
    }
  }
  return newMartrix
}

class Event {
  matrix
  constructor (arr) {
    this.matrix = arr
  }
  left () {
    for (let j = 0; j < this.matrix.length; j++) {
      this.matrix[j] = reverseArr(this.matrix[j])
      this.matrix[j] = addArr(this.matrix[j])
      this.matrix[j] = reverseArr(this.matrix[j])
      this.matrix.splice(j, 1, this.matrix[j])
    }
  }
  right () {
    for (let j = 0; j < this.matrix.length; j++) {
      this.matrix[j] = addArr(this.matrix[j])
      this.matrix.splice(j, 1, this.matrix[j])
    }

  }
  up () {
    let matrix = reverseMatrix(this.matrix)
    for (let j = 0; j < matrix.length; j++) {
      matrix[j] = reverseArr(matrix[j])
      matrix[j] = addArr(matrix[j])
      matrix[j] = reverseArr(matrix[j])
    }
    matrix = reverseMatrix(matrix)
    for (let j = 0; j < matrix.length; j++) {
      this.matrix.splice(j, 1, matrix[j])
    }
  }
  down () {
    let matrix = reverseMatrix(this.matrix)
    for (let j = 0; j < matrix.length; j++) {
      matrix[j] = addArr(matrix[j])
    }
    matrix = reverseMatrix(matrix)
    for (let j = 0; j < matrix.length; j++) {
      this.matrix.splice(j, 1, matrix[j])
    }
  }
}

export default Event
