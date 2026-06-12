import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {
    return (
      <div className='col'>
        <div className='overflow-hidden'>
        <img src={this.props.poster} alt="image" />
        </div>
        <div>
        {this.props.name}
        {this.props.rating}
        </div>
      </div>
    )
  }
}

export default MovieCard