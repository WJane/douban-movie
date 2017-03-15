import React from 'react'
import {Link} from 'react-router'

export default class List extends React.Component {

  // static propTypes = {
  //  name: React.PropTypes.string
  // }

  render() {
    const { theaters } = this.props
    let block = theaters.map((value, index) => {
      return <div key={index}>
        <div>
          <div>{value.title}</div>
          <div>{value.origin_title}</div>
          <div>{value.year}</div>
          <div>{value.rating.average}</div>
          <div><img src={value.images.medium} /></div>
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
