const initialState = {
  theaterList: [],
  detail: {}
}

export default function movie(state = initialState, action) {
  switch (action.type) {
    case 'GET_THEATER':
      return({
        ...state,
        theaterList: action.tlist
      })

    case 'GET_DETAIL':

      return({
        ...state,
        detail: action.details
      })

    default:
      return state
  }
}
