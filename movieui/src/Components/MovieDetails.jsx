import React, { Component } from 'react'

export class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }

    async componentDidMount() {
        const { id } = this.props.params;

        const response = await fetch(
            `http://localhost:5146/api/MovieList/getMovieById/${id}`
        );

        if (response.ok) {
            const data = await response.json();
            this.setState({ movie: data.data });
        }
    }

    render() {
        const { movie } = this.state;

        return (
            <div>

                {/* HERO SECTION */}
                <div
                    className="position-relative text-white"
                    style={{
                        height: "450px",
                        backgroundImage: `url(${movie.poster_Link})`,
                        backgroundRepeat: "no-repeat",
    backgroundSize: "100%",

                        backgroundPosition: "center"
                    }}
                >
                    {/* dark overlay */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: "rgba(0,0,0,0.65)"
                        }}
                    />

                    {/* center content */}
                    <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center">

                        <h1 className="fw-bold display-4">
                            {movie.series_Title}
                        </h1>

                        <div className="d-flex gap-3 mt-2 align-items-center">
                            <span>{movie.released_Year}</span>

                            <span className="badge bg-danger">
                                {movie.certificate}
                            </span>

                            <span>{movie.runtime}</span>

                            <span>
                                ⭐ {Number(movie?.imdB_Rating || 0).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                
{/* Movie Details */}
                <div className="container py-5">
                    <div className="row">
                        {/* Poster */}
                        <div className="col-md-4 mb-4">
                            <img
                            src={this.state.movie.poster_Link}
                            alt={this.state.movie.series_Title}
                            className="img-fluid rounded shadow w-75"
                            />
                        </div>

                        {/* Information */}
                        <div className="col-md-8">
                            <h2>{this.state.movie.series_Title}</h2>

                            <p className="text-secondary">
                                {this.state.movie.genre}
                            </p>

                            <p>{this.state.movie.overview}</p>

                            <div className="card bg-dark text-white mt-4">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-4 fw-bold">
                                            Director
                                        </div>
                                        <div className="col-8">
                                            {this.state.movie.director}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-4 fw-bold">
                                            Release Year
                                        </div>
                                        <div className="col-8">
                                            {this.state.movie.released_Year}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-4 fw-bold">
                                            Runtime
                                        </div>
                                        <div className="col-8">
                                            {this.state.movie.runtime}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-4 fw-bold">
                                            Certificate
                                        </div>
                                        <div className="col-8">
                                            {this.state.movie.certificate}
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-4 fw-bold">
                                            IMDb Rating
                                        </div>
                                        <div className="col-8">
                                            ⭐ {Number(this.state.movie?.imdB_Rating).toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4 fw-bold">
                                            Votes
                                        </div>
                                        <div className="col-8">
                                            {this.state.movie?.no_of_Votes}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails



