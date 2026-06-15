import { useState } from "react";
import './Add.css'
function Add() {
    const [movie, setMovie] = useState({
        genre: "",
        title: "",
        posterUrl: "",
        rating: "",
        director: "",
    });
    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movie);
    };
    const handleReset = () => {
        setMovie({
            genre: "",
            title: "",
            posterUrl: "",
            rating: "",
            director: "",
        });
    };
    return (
        <div className="container py-5">
            <div className="movie-card p-5">
                <div className="text-center mb-5">
                    <h1 className="movie-title">🎬 Add Movie</h1>
                    <p className="text-muted">Fill in the details to add a new movie</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Genre</label>
                            <input type="text" className="form-control" name="genre" value={movie.genre} onChange={handleChange} placeholder="Action, Comedy, Drama" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Movie Title</label>
                            <input type="text" className="form-control" name="title" value={movie.title} onChange={handleChange} placeholder="Enter Movie Title" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Poster URL</label>
                            <input type="text" className="form-control" name="posterUrl" value={movie.posterUrl} onChange={handleChange} placeholder="Enter Poster URL" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Rating</label>
                            <input type="text" className="form-control" name="rating" value={movie.rating} onChange={handleChange} placeholder="8.5" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Director Name</label>
                            <input type="text" className="form-control" name="director" value={movie.director} onChange={handleChange} placeholder="Christopher Nolan" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Year</label>
                            <input type="text" className="form-control" name="Year" value={movie.year} onChange={handleChange} placeholder="2026" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button type="button" className="btn btn-outline-danger me-3 px-4" onClick={handleReset}>Reset</button>
                        <button type="submit" className="btn btn-success px-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Add;