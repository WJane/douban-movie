const initialState = {
  theaterList: [],
  topList: [],
  newList: [],
  boxList: [],
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

    case 'GET_TOP':
      return({
        ...state,
        topList: action.tolist
      })

    case 'GET_NEW':
      return({
        ...state,
        newList: action.nlist
      })

    case 'GET_BOX':
      return({
        ...state,
        boxList: action.blist
      })

    default:
      return state
  }
}
