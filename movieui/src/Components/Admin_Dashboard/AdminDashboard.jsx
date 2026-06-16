
import "./AdminDashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

export class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movielist: [],
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchMovies(1);
  }

  fetchMovies = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/movies?pageNum=${page}&numOfData=${this.state.pageSize}&search=${encodeURIComponent(
this.state.searchTerm
        )}`
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movielist: data.data || [],
          currentPage: data.pageNumber,
          totalPages: data.totalPages,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleSearch = () => {
    this.fetchMovies(1);
  };

  handlePageChange = (page) => {
    this.fetchMovies(page);
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  handleAddClk = () => {
    this.props.navigate("/dashboard/add");
  };

  onDeleteClick = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5146/api/MovieList/DeleteMovie/${id}`,
{
    method: "DELETE",
        headers: {
        "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
}
      );

if (response.ok) {
    const data = await response.json();
    console.log(data.message);

    // Refresh current page after delete
    this.fetchMovies(this.state.currentPage);
}
    } catch (error) {
    console.error(error);
}
  };

render() {
    return (
        <div className="container-fluid dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">
                        🎬 Movie Admin Dashboard
                    </h1>
                    <p className="dashboard-subtitle">
                        Manage movies, ratings, posters and directors
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <button
                        className="btn btn-success me-3"
                        onClick={this.handleAddClk}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Movie
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={this.handleLogout}
                    >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </button>
                </div>
            </div>

            {/* Movie Management */}
            <div className="card shadow-sm border-0">
                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="section-title">
                            Movie Management
                        </h2>

                        <form
                            className="d-flex"
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.handleSearch();
                            }}
                        >
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Search movie..."
                                value={this.state.searchTerm}
                                onChange={(e) =>
                                    this.setState({
                                        searchTerm: e.target.value,
                                    })
                                }
                            />

                            <button
                                type="submit"
                                className="btn btn-outline-secondary"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <table className="table table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Poster</th>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Director</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {this.state.movielist.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center py-4 text-muted"
                                    >
                                        🎬 No movies found
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {this.state.movielist.map((movie) => (
                                    <tr key={movie.id}>
                                        <td>
                                            <img
                                                src={movie.poster_Link}
                                                alt={movie.series_Title}
                                                className="poster"
                                            />
                                        </td>

                                        <td>{movie.series_Title}</td>
                                        <td>{movie.released_Year}</td>
                                        <td>{movie.genre}</td>

                                        <td>
                                            {Number(movie.imdB_Rating).toFixed(2)} ⭐
                                        </td>

                                        <td>{movie.director}</td>

                                        <td>
                                            <Link
                                                to={`/dashboard/edit/${movie.id}`}
                                            >
                                                <button className="btn btn-link text-dark">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>

                                            <button
                                                className="btn btn-link text-dark"
                                                onClick={() =>
                                                    this.onDeleteClick(movie.id)
                                                }
                                            >
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>

                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPages={this.state.totalPages}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
}

export default AdminDashboard;

