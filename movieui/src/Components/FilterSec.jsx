import { Dropdown } from './Dropdown'
import React, { Component } from 'react'
import './FilterSec.css'

export default class FilterSec extends Component {
  handleGenreValue = (type, value) => {
    console.log(type, value);
  }
  render() {
    const movieGenres = [
      { value: "action", name: "Action" },
      { value: "adventure", name: "Adventure" },
      { value: "animation", name: "Animation" },
      { value: "comedy", name: "Comedy" },
      { value: "crime", name: "Crime" },
      { value: "documentary", name: "Documentary" },
      { value: "drama", name: "Drama" },
      { value: "family", name: "Family" },
      { value: "fantasy", name: "Fantasy" },
      { value: "history", name: "History" },
      { value: "horror", name: "Horror" },
      { value: "music", name: "Music" },
      { value: "mystery", name: "Mystery" },
      { value: "romance", name: "Romance" },
      { value: "science-fiction", name: "Science Fiction" },
      { value: "tv-movie", name: "TV Movie" },
      { value: "thriller", name: "Thriller" },
      { value: "war", name: "War" },
      { value: "western", name: "Western" }
    ];

    const years = [];

    for (let index = 1920; index <= 2020; index++) {
      years.push({
        value: index,
        name: index.toString()
      });
    }

    const rating = [];

    for (let index = 1; index <= 10; index++) {
      rating.push({
        value: index,
        name: index.toString()
      });
    }

    const certificate = [
      { "value": "16", "name": "16" },
      { "value": "A", "name": "A" },
      { "value": "Approved", "name": "Approved" },
      { "value": "G", "name": "G" },
      { "value": "GP", "name": "GP" },
      { "value": "Passed", "name": "Passed" },
      { "value": "PG", "name": "PG" },
      { "value": "PG-13", "name": "PG-13" },
      { "value": "R", "name": "R" },
      { "value": "TV-14", "name": "TV-14" },
      { "value": "TV-MA", "name": "TV-MA" },
      { "value": "TV-PG", "name": "TV-PG" },
      { "value": "U", "name": "U" },
      { "value": "U/A", "name": "U/A" },
      { "value": "UA", "name": "UA" },
      { "value": "Unrated", "name": "Unrated" }
    ]

    const dropDowns = [
      { value: movieGenres, name: "Genre" },
      { value: years, name: "Year" },
      { value: rating, name: "Rating" },
      { value: certificate, name: "Certificate" }
    ]

    return (
      <div className='row align-items-center border p-2'>
        {/* {
          dropDowns.map((data, ind) => {
            return (
              <div key={ind} className='col'>
                <Dropdown options={data.value} placeholder={data.name} label={data.value} onSelectValue={(value) => this.handleGenreValue(data.name, value)} />
              </div>
            )
          })
        } */}

        <div className='col'>
          <Dropdown options={movieGenres} placeholder="Genre" label="Genre" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
          <Dropdown options={years} placeholder="Year" label="Year" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
          <Dropdown options={rating} placeholder="Rating" label="Rating" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
          <Dropdown options={certificate} placeholder="Certificate" label="Certificate" onSelectValue={this.handleGenreValue} />
        </div>
        <div className="col d-flex justify-content-center align-items-end">
          <button className="btn btn-primary px-4 applybtn" type="button">
            Apply Filter
          </button>
        </div>
      </div>
    )
  }
}
