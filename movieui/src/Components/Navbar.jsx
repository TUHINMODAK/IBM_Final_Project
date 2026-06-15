import React, { Component } from 'react'
import SearchOptions from './SearchOptions'

export class Navbar extends Component {
  render() {
    return (
      // <div className='row p-3 bg-info'>
      //   <div className='col'>icon</div>
        
      //   <div className='col'>
      //       movies
      //       watchlist
      //   </div>
      //   <div className='col'>
      //     <input type="text" />
      //   </div>
      //   <div className='col'><a href="" className='btn btn-primary'>Login</a></div>
        
      // </div>

      <nav  className="navbar navbar-expand-lg navbar-dark bg-primary px-3 shadow-sm" >

        {/* Brand */}
        <a className="navbar-brand fw-bold" href="/">
          Navbar
        </a>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">

            <li className="nav-item d-flex ">
              <a className="nav-link active" href="/">
                Movies
              </a>
              <a className="nav-link " href="/watchlist">
                Watchlist
              </a>
            </li>

          </ul>

          
           <button className="btn btn-light text-primary fw-semibold" type="submit">
              Admin Login
            </button>


        </div>
      </nav>
    )
  }
}

export default Navbar