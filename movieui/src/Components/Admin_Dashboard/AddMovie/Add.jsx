import { Component } from "react";
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
      const token = localStorage.getItem("token");
      console.log('Received Token:',token)

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
        "http://localhost:5146/api/MovieList/AddMovie",
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(movie),
        }
      );

      if (response.ok) {
        alert("Movie added successfully!");
        this.handleReset();
        this.props.navigate("/dashboard");
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

