import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    const { poster, name, rating } = this.props;

    return (
      <div className="col">
        <div className="card h-100 shadow-sm border-0">

          <img
            src={poster}
            alt={name}
            className="card-img-top"
            style={{ height: "350px", objectFit: "contain" }}
          />

          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{name}</h5>

            <span className="badge bg-warning text-dark fs-6">
              ⭐ {rating}
            </span>
          </div>

        </div>
      </div>
    );
  }
}

export default MovieCard;