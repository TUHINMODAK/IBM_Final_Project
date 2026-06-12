import React, { Component } from 'react'
import Navbar from '../Navbar'
import MovieList from './MovieList'
import SearchOptions from '../SearchOptions'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SearchOptions/>
        <MovieList/>
      </div>
    )
  }
}

export default Home