import React, { Component } from 'react'
import Navbar from '../Navbar'
import MovieList from './MovieList'
import SearchOptions from '../SearchOptions'
import FilterSec from '../FilterSec'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SearchOptions/>
        <FilterSec/>
        <MovieList/>
      </div>
    )
  }
}

export default Home