export const setClient = (state, data) => {
  state.client = data
}

export const output = (state) => {
  state.client = null
}
