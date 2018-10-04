let diffObj = function(oldObj, newObj) {
  let score = 0
  for (let i = 17; i > 1; i--) {
    let value = Math.pow(2, i)
    if (newObj[value]) {
      let old = oldObj[value] ? oldObj[value] : 0
      let tmp = newObj[value] - old
      score += tmp * value
      let next = Math.pow(2, i - 1)
      if (oldObj[next]) {
        oldObj[next] += old * 2
      } else {
        oldObj[next] = old * 2
      }
      if (newObj[next]) {
        newObj[next] += newObj[value] * 2
      } else {
        newObj[next] = newObj[value] * 2
      }
    }
  }
  return score
}

class Score {
  score
  matrixAttr
  constructor (matrixAttr) {
    this.score = 0
    this.matrixAttr = matrixAttr
  }
  render (oldMatrix, newMatrix) {
    let oldObj = {}, newObj = {}
    oldMatrix.forEach(element => {
      element.forEach(item => {
        if (oldObj[item]) {
          oldObj[item]++
        } else {
          oldObj[item] = 1
        }
      })
    })
    newMatrix.forEach(element => {
      element.forEach(item => {
        if (newObj[item.value]) {
          newObj[item.value]++
        } else {
          newObj[item.value] = 1
        }
      })
    })
    this.score += diffObj(oldObj, newObj)
    this.matrixAttr = Object.assign({}, this.matrixAttr, {score: this.score})
    return this.matrixAttr
  }
}

export default Score