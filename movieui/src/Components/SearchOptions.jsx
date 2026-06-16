import React, { Component } from 'react'

export class SearchOptions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const params = new URLSearchParams()

    if (this.state.search.trim()) {
      params.append('search', this.state.search.trim())
    }

    this.props.onSearch(params)
  }

  render() {
    return (
      <form
        className="d-flex align-items-center gap-2 mt-2 mt-lg-0 py-2 px-1"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control"
          type="search"
          placeholder="Search movies..."
          value={this.state.search}
          onChange={this.handleChange}
        />

        <button
          className="btn btn-light text-primary fw-semibold"
          type="submit"
        >
          Search
        </button>
      </form>
    )
  }
}

export default SearchOptions