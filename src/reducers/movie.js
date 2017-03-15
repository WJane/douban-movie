const initialState = {
  theaterList: []
}

export default function movie(state = initialState, action) {
  switch (action.type) {
    case 'GET_THEATER':
      return({
        ...state,
        theaterList: action.tlist
      })
    default:
      return state
  }
}
