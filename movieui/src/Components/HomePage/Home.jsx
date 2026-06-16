import React, { Component } from 'react'
import Navbar from '../Navbar'
import MovieList from './MovieList'
import SearchOptions from '../SearchOptions'
import FilterSec from '../FilterSec'

export default class Home extends Component {
  state = {
    movielist: []
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async (params) => {
    try {
      const query = params ? `?${params.toString()}` : ''
      const url = `http://localhost:5146/api/MovieList/movies${query}`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json()

      this.setState({
        movielist: data.data || []
      })
    } catch (error) {
      console.error('Error fetching movies:', error)
      this.setState({ movielist: [] })
    }
  }

  handleFilter = (params) => {
    this.fetchMovies(params)
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchOptions />
        <FilterSec onFilter={this.handleFilter} />
        <MovieList movielist={this.state.movielist} />
      </div>
    )
  }
}