import axios from 'axios'

const url = 'http://api.douban.com/v2/movie/in_theaters'

export const getTheater = dispatch => {
	dispatch({
		type: 'GET_THEATER',
    loading: 'request'
	})
  axios.get(url).then(function(response) {

    console.log(response.data)
  })
  .catch(function(error) {
    console.log(error)
    dispatch({
      type: 'GET_THEATER_FAIL',
      loading: 'fail'
    })
  })
}
