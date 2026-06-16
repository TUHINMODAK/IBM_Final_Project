import React, { Component } from 'react'
import { Dropdown } from './Dropdown'
import './FilterSec.css'

export default class FilterSec extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genre: '',
      year: '',
      rating: '',
      certificate: ''
    }
  }

  handleReturnValue = (name, value) => {
    this.setState({
      [name.toLowerCase()]: value
    })
  }

  handleSubmit = () => {
    const params = new URLSearchParams()

    if (this.state.genre) params.append('genre', this.state.genre)
    if (this.state.year) params.append('year', this.state.year)
    if (this.state.rating) params.append('rating', this.state.rating)
    if (this.state.certificate) params.append('certificate', this.state.certificate)

    this.props.onFilter(params)
  }

  render() {
    const movieGenres = [
      { value: "action", name: "Action" },
      { value: "adventure", name: "Adventure" },
      { value: "animation", name: "Animation" },
      { value: "comedy", name: "Comedy" },
      { value: "crime", name: "Crime" },
      { value: "drama", name: "Drama" },
      { value: "horror", name: "Horror" },
      { value: "romance", name: "Romance" },
      { value: "thriller", name: "Thriller" }
    ]

    const years = []
    for (let i = 1920; i <= 2020; i++) {
      years.push({ value: i, name: String(i) })
    }

    const rating = []
    for (let i = 1; i <= 10; i++) {
      rating.push({ value: i, name: String(i) })
    }

    const certificate = [
      { value: "U", name: "U" },
      { value: "UA", name: "UA" },
      { value: "A", name: "A" },
      { value: "PG-13", name: "PG-13" },
      { value: "R", name: "R" },
      { value: "TV-MA", name: "TV-MA" }
    ]

    return (
      <div className="row align-items-center border p-2">

        <div className="col">
          <Dropdown
            options={movieGenres}
            placeholder="Genre"
            label="Genre"
            onSelectValue={this.handleReturnValue}
          />
        </div>

        <div className="col">
          <Dropdown
            options={years}
            placeholder="Year"
            label="Year"
            onSelectValue={this.handleReturnValue}
          />
        </div>

        <div className="col">
          <Dropdown
            options={rating}
            placeholder="Rating"
            label="Rating"
            onSelectValue={this.handleReturnValue}
          />
        </div>

        <div className="col">
          <Dropdown
            options={certificate}
            placeholder="Certificate"
            label="Certificate"
            onSelectValue={this.handleReturnValue}
          />
        </div>

        <div className="col d-flex justify-content-center align-items-end">
          <button
            className="btn btn-primary px-4 applybtn"
            onClick={this.handleSubmit}
          >
            Apply Filter
          </button>
        </div>

      </div>
    )
  }
}