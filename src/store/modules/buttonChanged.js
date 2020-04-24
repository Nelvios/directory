const state = {
  disabled: [false, false, false, false],
  isAddP: false,
  isRemP: false,
  isAddId: false,
  isRemId: false
}

const getters = {
  disabledChanged: state => {
    return state.disabled
  },
  fetchAllButton: state => {
    return {
      isAddPCondition: state.isAddP,
      isAddIdCondition: state.isAddId,
      isRemPCondition: state.isRemP,
      isRemIdCondition: state.isRemId
    }
  }
}

const mutations = {
  changeIsAddP: (state) => {
    state.isAddP = !state.isAddP
    if (state.isAddP) {
      state.disabled = [false, true, true, true]
    } else {
      state.disabled = [false, false, false, false]
    }
  },
  changeIsRemP: (state) => {
    state.isRemP = !state.isRemP
    if (state.isRemP) {
      state.disabled = [true, false, true, true]
    } else {
      state.disabled = [false, false, false, false]
    }
  },
  changeIsAddId: (state) => {
    state.isAddId = !state.isAddId
    if (state.isAddId) {
      state.disabled = [true, true, false, true]
    } else {
      state.disabled = [false, false, false, false]
    }
  },
  changeIsremId: (state) => {
    state.isRemId = !state.isRemId
    if (state.isRemId) {
      state.disabled = [true, true, true, false]
    } else {
      state.disabled = [false, false, false, false]
    }
  }
}

export default {
  state,
  mutations,
  getters
}
