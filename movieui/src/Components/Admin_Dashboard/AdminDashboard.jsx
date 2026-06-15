
import "./AdminDashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Navigate,useNavigate } from "react-router-dom";
import React, { Component } from 'react'

export class AdminDashboard extends Component {

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
                    <button className="btn btn-success me-3" onClick={() => navigate("/dashboard/Add")}>
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
                        <tbody>
                            <tr>
                                <td>
                                    <img src="" alt="" className="poster" />
                                </td>
                                <td>Peddi</td>
                                <td>2026</td>
                                <td>Action</td>
                                <td>9.5 ⭐</td>
                                <td>Bujji Babu</td>
                                <td>
                                    <button className="btn btn-link text-dark" onClick={() => navigate("/dashboard/Edit")}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button className="btn btn-link text-dark">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    {/* Pagination */}
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center">
                            <li className="page-item active">
                                <a className="page-link">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link">3</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
  }
}

export default AdminDashboard
