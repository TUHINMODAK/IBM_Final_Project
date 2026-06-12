import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className='row p-3 bg-info'>
        <div className='col'>icon</div>
        
        <div className='col'>
            movies
            watchlist
        </div>
        <div className='col'><a href="" className='btn btn-primary'>Login</a></div>
        
      </div>
    )
  }
}

export default Navbar