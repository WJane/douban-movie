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


export const getTop = (query = defaultQuery) => dispatch => {
  const url = "http://api.douban.com/v2/movie/top250"
  let topList = []

  jsonp(url, null, function(err, data) {

    topList = data.subjects

    dispatch({
      type: 'GET_TOP',
      tolist: topList
    })
  })

}

export const getNew = (query = defaultQuery) => dispatch => {
  const url = "http://api.douban.com/v2/movie/coming_soon"
  let newList = []

  jsonp(url, null, function(err, data) {

    newList = data.subjects

    dispatch({
      type: 'GET_NEW',
      nlist: newList
    })
  })

}

export const getBox = (query = defaultQuery) => dispatch => {
  const url = "http://api.douban.com/v2/movie/us_box"
  let boxList = []

  jsonp(url, null, function(err, data) {

    boxList = data.subjects

    dispatch({
      type: 'GET_BOX',
      blist: boxList
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
