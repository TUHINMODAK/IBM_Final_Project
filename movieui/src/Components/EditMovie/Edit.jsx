import React, { Component } from 'react'
import './Edit.css'
export class Edit extends Component {
    constructor(props) {
    super(props);

    this.state = {
      movieId: "",
      movieName: "",
      genre: "",
      year: "",
    };
  }

   async componentDidMount() {
    const { id } = this.props.params;

    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/getMovieById/${id}`
      );

      const jsonvalue = await response.json();
      const data=jsonvalue.data;
      this.setState({
        movieId: data.id,
        movieName: data.series_Title,
        genre: data.genre,
        year: data.relesed_Year,
      });
      console.log(this.state);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }
  handleSubmit=()=>{

  }
  handleReset=()=>{

  }
  handleChanges=()=>{

  }
  render() {
    return (
        <div className="container py-5">
            <div className="movie-card p-5">
                <div className="text-center mb-5">
                    <h1 className="movie-title">🎬 Update Movie Details</h1>
                    <p className="text-muted">Modify and Save Changes to the Selected Movie </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Genre</label>
                            <input type="text" className="form-control" name="genre" value={""} onChange={this.handleChanges} placeholder="Action, Comedy, Drama" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Movie Title</label>
                            <input type="text" className="form-control" name="title" value={""} onChange={this.handleChanges} placeholder="Enter Movie Title" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Poster URL</label>
                            <input type="text" className="form-control" name="posterUrl" value={""} onChange={this.handleChanges} placeholder="Enter Poster URL" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Rating</label>
                            <input type="text" className="form-control" name="rating" value={"movie.rating"} onChange={this.handleChanges} placeholder="8.5" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Director Name</label>
                            <input type="text" className="form-control" name="director" value={"movie.director"} onChange={this.handleChanges} placeholder="Christopher Nolan" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Year</label>
                            <input type="text" className="form-control" name="Year" value={"movie.year"} onChange={this.handleChanges} placeholder="2026" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button type="button" className="btn btn-outline-danger me-3 px-4" onClick={this.handleReset}>Reset</button>
                        <button type="submit" className="btn btn-success px-4">Submit</button>
                    </div>
                </form>
            </div>
        </div> 
    );
  }
}

export default Edit


// import{ useState } from "react";
// 
// function Edit() {
//     const [movie, setMovie] = useState({
//         genre: "",
//         title: "",
//         posterUrl: "",
//         rating: "",
//         director: "",
//     });
//     const this.handleChanges = (e) => {
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
//     
// }
// export default Edit;


{/* */}