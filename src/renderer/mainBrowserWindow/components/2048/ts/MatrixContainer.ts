let deepClone = (matrix) => matrix.map((ele) => ele.slice(0))

class MatrixContainer {
  matrix
  constructor (matrix) {
    this.matrix = deepClone(matrix)
    return this
  }
  push () {
    this.matrix = this.matrix.map((ele) => ele.filter((item) => !item.value)
                    .concat(ele.filter((item) => item.value)))
    return this
  }
  add () {
    this.matrix = this.matrix.map((arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].value === arr[i - 1].value) {
          arr[i].combine()
          arr[i - 1].zero(arr[i])
          i--
        }
      }
      return arr
    })
    return this
  }
  reverseArr () {
    this.matrix = this.matrix.map((ele) => ele.reverse())
    return this
  }
  reverseMatrix () {
    let newMartrix = deepClone(this.matrix)
    for (let i = 0; i < newMartrix.length; i++) {
      for (let j = 0; j < newMartrix[i].length; j++) {
        this.matrix[j][i] = newMartrix[i][j]
      }
    }
    return this
  }
  end () {
    return this.matrix
  }
}

export default MatrixContainer
