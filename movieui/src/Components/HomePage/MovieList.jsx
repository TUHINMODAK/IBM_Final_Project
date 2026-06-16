import React, { Component } from 'react'
import MovieCard from '../MovieCard'

export default class MovieList extends Component {
  render() {
    const movies = this.props.movielist || []

    return (
      <div className="container mt-4">

        {movies.length === 0 ? (
          <div className="text-center">
            🎬 No movies found
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster_Link}
                name={movie.series_Title}
                rating={movie.imdB_Rating}
              />
            ))}
          </div>
        )}

      </div>
    )
  }
}