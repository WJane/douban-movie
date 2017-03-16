import axios from 'axios'
import jsonp from 'jsonp'

let defaultQuery = {
  page: 1,
  limit: 20,
  tab: 'all'
}

//TODO:  错误处理
export const getTheater = (query = defaultQuery) => dispatch => {
  const url = "http://api.douban.com/v2/movie/in_theaters"
  let theaterList = []

  jsonp(url, null, function(err, data) {

    theaterList = data.subjects

    dispatch({
      type: 'GET_THEATER',
      tlist: theaterList
    })
  })

}

export const getDetail = (id) => dispatch => {
  const url = "http://api.douban.com/v2/movie/subject/"+id

  let detail = {}
  jsonp(url, null, function(err, data){
    detail = data
    console.log(detail.images.large)
    dispatch({
      type: 'GET_DETAIL',
      details: detail
    })
  })
}
