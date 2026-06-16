import React, { Component } from 'react'
import Navbar from '../Navbar'
import MovieList from './MovieList'
import SearchOptions from '../SearchOptions'
import FilterSec from '../FilterSec'

export default class Home extends Component {
  state = {
    movielist: [],
    filters: {}
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async (params) => {
    try {
      const query = params ? `?${params.toString()}` : ''
      const url = `http://localhost:5146/api/MovieList/movies${query}`

      const response = await fetch(url)

      const data = await response.json()

      this.setState({
        movielist: data.data || []
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleFilter = (params) => {
    this.fetchMovies(params)
  }

  handleSearch = (params) => {
    this.fetchMovies(params)
  }

  render() {
    return (
      <div>
        <Navbar />

        {/* SEARCH */}
        <SearchOptions onSearch={this.handleSearch} />

        {/* FILTERS */}
        <FilterSec onFilter={this.handleFilter} />

        {/* MOVIES */}
        <MovieList movielist={this.state.movielist} />
      </div>
    )
  }
}