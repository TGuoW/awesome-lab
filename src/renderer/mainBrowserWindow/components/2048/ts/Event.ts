import MatrixContainer from './MatrixContainer'

class Event {
  left (matrix) {
    return new MatrixContainer(matrix).reverseArr().push().add().push().reverseArr().end()
  }
  right (matrix) {
    return new MatrixContainer(matrix).push().add().push().end()
  }
  up (matrix) {
    return new MatrixContainer(matrix).reverseMatrix().reverseArr().push().add().push().reverseArr().reverseMatrix().end()
  }
  down (matrix) {
    return new MatrixContainer(matrix).reverseMatrix().push().add().push().reverseMatrix().end()
  }
}

export default Event
