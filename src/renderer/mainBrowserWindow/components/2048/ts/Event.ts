let pushArr = function (arr) {
  let newArr: number[] = []
  arr.forEach((element) => {
    if (element) {
      newArr.push(element)
    }
  })
  let zeroNumber = arr.length - newArr.length
  while (zeroNumber > 0) {
    newArr.unshift(0)
    zeroNumber--
  }
  return newArr
}

let addArr = function (arr) {
  arr = pushArr(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      arr[i - 1] *= 2
      arr[i] = 0
      i--
    }
  }
  return pushArr(arr)
}

class Event {
  matrix
  constructor (arr) {
    this.matrix = arr
  }
  left () {

  }
  right () {
    for (let j = 0; j < this.matrix.length; j++) {
      this.matrix[j] = addArr(this.matrix[j])
      this.matrix.splice(j, 1, this.matrix[j])
    }
  }
  up () {

  }
  down () {

  }
}

export default Event
