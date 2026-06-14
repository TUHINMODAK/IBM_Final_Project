import React, { Component } from "react";
import "./LoginPage.css"

export default class LoginPage extends Component {
    constructor(props) {
     super(props)
   
     this.state = {
        email:"",
        password:""
     }
   }

   handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
        
    })
   }

   handleLogin=()=>{
    console.log("loginclick");
   }

  render() {
   
    return (
      <section
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div
                className="card border-0 shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "25px",
                }}
              >
                <div className="card-body p-5 text-center text-white">
                  
                  {/* Logo */}
                  <div className="mb-4">
                    <i
                      className="fas fa-user-shield"
                      style={{
                        fontSize: "4rem",
                        color: "#fff",
                      }}
                    ></i>
                  </div>

                  <h2 className="fw-bold mb-2">Admin Access</h2>
                  <p className="text-light mb-5">
                    Please login to continue
                  </p>

                  {/* Email */}
                  <div className="input-group mb-4">
                    
                    <input
                      type="email"
                      className="form-control border-0 py-3 "
                      placeholder="Username or Email"
                      onChange={this.handleChange}
                      name="email"
                    />
                  </div>

                  {/* Password */}
                  <div className="input-group mb-3">
                   
                    <input
                      type="password"
                      className="form-control border-0 py-3"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="text-end mb-4">
                    <a
                      href="#!"
                      className="text-white text-decoration-none"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={this.handleLogin}
                    className="btn btn-light w-100 py-3 fw-bolder "
                    style={{
                      borderRadius: "12px",
                      transition: "0.3s",
                    }}
                  >
                    Login
                  </button>


                  <div className="mt-4">
                    <small className="text-light">
                      © 2026 Admin Portal
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}