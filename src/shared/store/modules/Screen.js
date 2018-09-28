const state = {
  clientWidth: 0,
  clientHeight: 0
}

const mutations = {
  setWidth (state, clientWidth) {
    state.clientWidth = clientWidth
  },
  setHeight (state, clientHeight) {
    state.clientHeight = clientHeight
  }
}

export default {
  state,
  mutations
}