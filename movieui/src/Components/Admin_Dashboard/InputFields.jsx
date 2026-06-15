import React, { Component } from "react";

export class InputFields extends Component {
  render() {
    const { movie, handleChanges } = this.props;

    return (
      <div className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={movie.genre}
            placeholder="e.g. Action, Comedy, Drama"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Movie Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={movie.title}
            placeholder="Enter movie title"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Poster URL</label>
          <input
            type="text"
            className="form-control"
            name="posterUrl"
            value={movie.posterUrl}
            placeholder="https://example.com/poster.jpg"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">IMDb Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            name="rating"
            value={movie.rating}
            placeholder="e.g. 8.5"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Director</label>
          <input
            type="text"
            className="form-control"
            name="director"
            value={movie.director}
            placeholder="Enter director name"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Release Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={movie.year}
            placeholder="e.g. 2024"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Certificate</label>
          <input
            type="text"
            className="form-control"
            name="certificate"
            value={movie.certificate}
            placeholder="e.g. U, UA, A"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Runtime</label>
          <input
            type="text"
            className="form-control"
            name="runtime"
            value={movie.runtime}
            placeholder="e.g. 2h 15m"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Number of Votes</label>
          <input
            type="number"
            className="form-control"
            name="no_of_Votes"
            value={movie.no_of_Votes}
            placeholder="e.g. 100000"
            onChange={handleChanges}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Overview</label>
          <textarea
            className="form-control"
            rows="5"
            name="overview"
            value={movie.overview}
            placeholder="Write a short movie description..."
            onChange={handleChanges}
          />
        </div>

      </div>
    );
  }
}

export default InputFields;