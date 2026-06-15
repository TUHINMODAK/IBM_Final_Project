import React, { Component } from "react";
import InputFields from "../InputFields";
import "./Add.css";

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      genre: "",
      year: "",
      posterUrl: "",
      director: "",
      overview: "",
      certificate: "",
      runtime: "",
      rating: "",
      no_of_Votes: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      title: "",
      genre: "",
      year: "",
      posterUrl: "",
      director: "",
      overview: "",
      certificate: "",
      runtime: "",
      rating: "",
      no_of_Votes: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const movie = {
      series_Title: this.state.title,
      genre: this.state.genre,
      released_Year: this.state.year,
      poster_Link: this.state.posterUrl,
      director: this.state.director,
      overview: this.state.overview,
      certificate: this.state.certificate,
      runtime: this.state.runtime,
      imdB_Rating: this.state.rating,
      no_of_Votes: this.state.no_of_Votes,
    };

    try {
      const response = await fetch(
        "http://localhost:5146/api/MovieList/addMovie",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movie),
        }
      );

      if (response.ok) {
        alert("Movie added successfully!");
        this.handleReset();
      } else {
        alert("Failed to add movie");
      }
    } catch (error) {
      console.error("Add Error:", error);
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="movie-card p-5">
            <div className="text-center mb-5">
                <h1 className="movie-title">🎬 Add Movie</h1>
                <p className="text-muted">Fill in the details to add a new movie</p>
            </div>

          <form onSubmit={this.handleSubmit}>

            <InputFields
              movie={this.state}
              handleChanges={this.handleChanges}
            />

            <div className="text-center mt-5">
              <button
                type="button"
                className="btn btn-outline-danger me-3"
                onClick={this.handleReset}
              >
                Reset
              </button>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Add;

// import { useState } from "react";
// import './Add.css'
// function Add() {
//     const [movie, setMovie] = useState({
//         genre: "",
//         title: "",
//         posterUrl: "",
//         rating: "",
//         director: "",
//     });
//     const handleChange = (e) => {
//         setMovie({ ...movie, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(movie);
//     };
//     const handleReset = () => {
//         setMovie({
//             genre: "",
//             title: "",
//             posterUrl: "",
//             rating: "",
//             director: "",
//         });
//     };
//     return (
//         <div className="container py-5">
//             <div className="movie-card p-5">
//                 <div className="text-center mb-5">
//                     <h1 className="movie-title">🎬 Add Movie</h1>
//                     <p className="text-muted">Fill in the details to add a new movie</p>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="row g-3">
//                         <div className="col-md-6">
//                             <label className="form-label">Genre</label>
//                             <input type="text" className="form-control" name="genre" value={movie.genre} onChange={handleChange} placeholder="Action, Comedy, Drama" />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Movie Title</label>
//                             <input type="text" className="form-control" name="title" value={movie.title} onChange={handleChange} placeholder="Enter Movie Title" />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Poster URL</label>
//                             <input type="text" className="form-control" name="posterUrl" value={movie.posterUrl} onChange={handleChange} placeholder="Enter Poster URL" />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Rating</label>
//                             <input type="text" className="form-control" name="rating" value={movie.rating} onChange={handleChange} placeholder="8.5" />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Director Name</label>
//                             <input type="text" className="form-control" name="director" value={movie.director} onChange={handleChange} placeholder="Christopher Nolan" />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Year</label>
//                             <input type="text" className="form-control" name="Year" value={movie.year} onChange={handleChange} placeholder="2026" />
//                         </div>
//                     </div>
//                     <div className="text-center mt-5">
//                         <button type="button" className="btn btn-outline-danger me-3 px-4" onClick={handleReset}>Reset</button>
//                         <button type="submit" className="btn btn-success px-4">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
// export default Add;