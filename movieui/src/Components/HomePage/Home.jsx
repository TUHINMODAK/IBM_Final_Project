import React, { Component } from 'react'
import Navbar from '../Navbar'
import MovieList from './MovieList'
import SearchOptions from '../SearchOptions'
import FilterSec from '../FilterSec'
import Pagination from '../Pagination'

export default class Home extends Component {
  state = {
    movielist: [],
    pageNumber: 1,
    pageSize: 12,
    totalPages: 0
  }

  componentDidMount() {
    this.fetchMovies()
  }
   handleSearch = (param) => {
    this.fetchMovies(param);
  };

  fetchMovies = async (params = new URLSearchParams()) => {
    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/movies?${params.toString()}`
      )

      const data = await response.json()

      this.setState({
        movielist: data.data || [],
        pageNumber: data.pageNumber,
        totalPages: data.totalPages
      })

    } catch (error) {
      console.error(error)
    }
  }

  handleFilter = (params) => {
    params.set('pageNum', 1) // reset to page 1 on filter
    this.fetchMovies(params)
  }

  handlePageChange = (newPage) => {
    const params = new URLSearchParams()

    params.set('pageNum', newPage)
    params.set('numOfData', this.state.pageSize)

    this.fetchMovies(params)
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchOptions onSearch={this.handleSearch} />
        <FilterSec onFilter={this.handleFilter} />

        <MovieList movielist={this.state.movielist} />

        <Pagination
          currentPage={this.state.pageNumber}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    )
  }
}