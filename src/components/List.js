import React from 'react'
import {Link} from 'react-router'


const style = {
  content: {
    height: '180px',
    width: '650px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    margin: '10px auto'
  },
  info: {
    marginLeft: '30px'
  }
}


export default class List extends React.Component {

  // static propTypes = {
  //  name: React.PropTypes.string
  // }

  render() {
    const { theaters } = this.props

    let block = theaters.map((value, index) => {
      return <div key={index}>
        <div style={style.content}>

          <Link to={`/movie/${value.id}`}><img src={value.images.medium} /></Link>
          <div style={style.info}>
            <div>名字：{value.title}</div>
            <div>年份：{value.year}</div>
            <div>评分：{value.rating.average}</div>
            <div>类型：{value.genres}</div>

          </div>
        </div>
      </div>
    })

    return (
      <div>
        {block}
      </div>
    )
  }
}
