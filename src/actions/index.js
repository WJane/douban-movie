import axios from 'axios'
import jsonp from 'jsonp'

let defaultQuery = {
  page: 1,
  limit: 20,
  tab: 'all'
}

export const getTheater = (query = defaultQuery) => dispatch => {
  const url = "http://api.douban.com/v2/movie/in_theaters"
  let theaterList = []
  console.log('ddd')
  jsonp(url, null, function(err, data) {
    console.log(url)
    theaterList = data.subjects
    console.log(data)
    dispatch({
      type: 'GET_THEATER',
      tlist: theaterList
    })
  })

}
