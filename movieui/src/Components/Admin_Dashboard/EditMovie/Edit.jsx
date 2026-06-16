import React, { Component } from "react";
import "./Edit.css";
import InputFields from "../InputFields";
import { Link } from "react-router-dom";

export class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: "",
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

  async componentDidMount() {
    const { id } = this.props.params;

    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/getMovieById/${id}`
      );

      const jsonvalue = await response.json();
      const data = jsonvalue.data;

      this.setState({
        movieId: data.id,
        title: data.series_Title,
        genre: data.genre,
        year: data.released_Year,
        posterUrl: data.poster_Link,
        overview: data.overview,
        runtime: data.runtime,
        rating: data.imdB_Rating,
        director: data.director,
        certificate: data.certificate,
        no_of_Votes: data.no_of_Votes,
      });
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
      e.preventDefault();
     const token = localStorage.getItem("token");

    const movie = {
      id: this.state.movieId,
      series_Title: this.state.title,
      genre: this.state.genre,
      released_Year: this.state.year,
      poster_Link: this.state.posterUrl,
      director: this.state.director,
      overview: this.state.overview,
      runtime: this.state.runtime,
      certificate: this.state.certificate,
      imdB_Rating: this.state.rating,
      no_of_Votes: this.state.no_of_Votes,
    };

    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/updateMovieById/${this.state.movieId}`,
        {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(movie),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Movie updated successfully!");
        // console.log(result);
        this.props.navigate("/dashboard");
      } else {
        alert("Failed to update movie.");
      }
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  handleReset = () => {
    
  };

  render() {
    return (
      <div className="container py-5">
        <div className="movie-card p-5">
          <div className="text-center mb-5">
            <h1 className="movie-title">🎬 Update Movie Details</h1>
            <p className="text-muted">
              Modify and Save Changes to the Selected Movie
            </p>
          </div>

          <form onSubmit={this.handleSubmit}>

            <InputFields
              movie={this.state}
              handleChanges={this.handleChanges}
            />

            <div className="text-center mt-5">
              <Link to={"/dashboard"}><button
                type="button"
                className="btn btn-outline-danger me-3 px-4"
                onClick={this.handleCancel}
              >
                Cancel
              </button></Link>

              <button
                type="submit"
                className="btn btn-success px-4"
              >
                Update Movie
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Edit;