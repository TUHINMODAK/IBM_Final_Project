
import "./AdminDashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link } from "react-router-dom";
import React, { Component } from 'react'

export class AdminDashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         movielist:[]
      }
    }
    async componentDidMount(){
        try {
            const responce= await fetch('http://localhost:5146/api/MovieList/getAllMovies?pageNum=1&numOfData=10')
            if(responce.ok){
                    const data=await responce.json();
                    const movies=data.data;
                    this.setState({
                        movielist:movies
                    })
                }
            } catch (error) {
                console.error(error)
            }
    }

    onDeleteClick = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5146/api/MovieList/DeleteMovie/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);

                this.setState((prevState) => ({
                    movielist: prevState.movielist.filter(
                        (movie) => movie.id !== id
                    )
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    handleAddClk=()=>{
        this.props.navigate("/dashboard/add")
    }
   
  render() {
    return (
      <div className="container-fluid dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">🎬 Movie Admin Dashboard</h1>
                    <p className="dashboard-subtitle">Manage movies, ratings, posters and directors</p>
                </div>
                <br />
                <div className="d-flex align-items-center">
                    <button className="btn btn-success me-3" onClick={this.handleAddClk}>
                        <i className="bi bi-plus-circle me-2"></i>Add Movie</button>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-circle me-2"></i>Logout</button>
                </div>
                <br />
            </div>
            {/* Movie Management */}
            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="section-title">Movie Management</h2>
                        <div className="d-flex">
                            <input type="text" className="form-control me-2" placeholder="Search movie..." />
                            <button className="btn btn-outline-secondary">Filter</button>
                        </div>
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
                        {this.state.movielist.length==0?(<tbody><tr>
                                <td colSpan="7" className="text-center py-4 text-muted">
                                    🎬 No movies found
                                </td>
                                </tr></tbody>
                            ):(<tbody>
                            

                            {
                                this.state.movielist.map((movie)=>{
                                    return (
                                    <tr key={movie.id}>
                                        <td>
                                            <img src={movie.poster_Link} alt="" className="poster" />
                                        </td>
                                        <td>{movie.series_Title}</td>
                                        <td>{movie.released_Year}</td>
                                        <td>{movie.genre}</td>
                                        <td>{Number(movie.imdB_Rating).toFixed(2)} ⭐</td>
                                        <td>{movie.director}</td>
                                        <td></td>
                                        <td>
                                            <Link to={`/dashboard/edit/${movie.id}`}>
                                                <button className="btn btn-link text-dark" >
        
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                            </Link>
                                            <button className="btn btn-link text-dark" onClick={()=>this.onDeleteClick(movie.id)}>
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }

                        </tbody>)}
                    </table>
                    {/* Pagination */}
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                            <a className="page-link" href="#" aria-current="page">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
  }
}

export default AdminDashboard
