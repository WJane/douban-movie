const initialState = {
  theater: []
}

export default function movie(state = initialState, action) {
  return ({
    ...state,
    theater: action.list
  })
}
