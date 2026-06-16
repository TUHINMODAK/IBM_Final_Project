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
        console.log(id);
        try {
            const responce = await fetch(`http://localhost:5146/api/MovieList/getMovieById/${id}`)
            if (responce.ok) {
                const data = await responce.json();
                console.log(data.data);
                const movie = data.data;
                this.setState({
                    movie: movie
                })
            }
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        return (
            <div>
                {/* Hero Section */}
                <div
                    className="position-relative text-white"
                    style={{
                        height: "500px",
                        backgroundImage: `url(${this.state.movie.poster_Link})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.3))"
                        }}
                    />

                    <div className="container h-100 d-flex align-items-end position-relative">
                        <div className="pb-5">
                            <h1 className="display-3 fw-bold">
                                {this.state.movie.series_Title}
                            </h1>

                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                <span>{this.state.movie.released_Year}</span>

                                <span className="badge bg-danger">
                                    {this.state.movie.certificate}
                                </span>

                                <span>{this.state.movie.runtime}</span>

                                <span>
                                    ⭐ {Number(this.state.movie?.imdB_Rating).toFixed(2)}
                                </span>
                            </div>
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
                                className="img-fluid rounded shadow"
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