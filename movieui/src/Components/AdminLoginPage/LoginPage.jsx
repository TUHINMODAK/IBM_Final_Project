import  { Component } from "react";
import "./LoginPage.css"
export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserName: "",
            Password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }


    handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5146/api/Authentication",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.state)
                }
            );

            const data = await response.json();

            if (response.ok) {

                // Store JWT Token
                localStorage.setItem("token", data.token);
                console.log(data)

                // Clear form
                this.setState({
                    UserName: "",
                    Password: ""
                });


                console.log("Stored Token:", localStorage.getItem("token"));
                window.location.href = "/dashboard";


            } else {

                alert(data.message || "Login Failed");
            }

        } catch (error) {

            console.log(error);
            alert("Server Error");
        }
    };



    //   render() {

    //     return (
    //       <section
    //         className="vh-100 d-flex align-items-center justify-content-center"
    //         style={{
    //           background:
    //             "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    //         }}
    //         >
    //             <form className="container" method='POST' onSubmit={this.handleLogin}>
    //           <div className="row justify-content-center">
    //             <div className="col-md-6 col-lg-5">
    //               <div
    //                 className="card border-0 shadow-lg"
    //                 style={{
    //                   background: "rgba(255,255,255,0.15)",
    //                   backdropFilter: "blur(15px)",
    //                   borderRadius: "25px",
    //                 }}
    //               >
    //                 <div className="card-body p-5 text-center text-white">

    //                   {/* Logo */}
    //                   <div className="mb-4">
    //                     <i
    //                       className="fas fa-user-shield"
    //                       style={{
    //                         fontSize: "4rem",
    //                         color: "#fff",
    //                       }}
    //                     ></i>
    //                   </div>

    //                   <h2 className="fw-bold mb-2">Admin Access</h2>
    //                   <p className="text-light mb-5">
    //                     Please login to continue
    //                   </p>

    //                   {/* Email */}
    //                   <div className="input-group mb-4">

    //                     <input
    //                       type="email"
    //                       className="form-control border-0 py-3 "
    //                       placeholder="Username or Email"
    //                       onChange={this.handleChange}
    //                                         name="UserName"
    //                     />
    //                   </div>

    //                   {/* Password */}
    //                   <div className="input-group mb-3">

    //                     <input
    //                       type="password"
    //                       className="form-control border-0 py-3"
    //                       placeholder="Password"
    //                                         name="Password"
    //                       onChange={this.handleChange}
    //                     />
    //                   </div>

    //                   <div className="text-end mb-4">
    //                     <a
    //                       href="#!"
    //                       className="text-white text-decoration-none"
    //                     >
    //                       Forgot Password?
    //                     </a>
    //                   </div>

    //                   {/* Login Button */}
    //                   <button

    //                     className="btn btn-light w-100 py-3 fw-bolder "
    //                     style={{
    //                       borderRadius: "12px",
    //                       transition: "0.3s",
    //                     }}
    //                   >
    //                     Login
    //                   </button>


    //                   <div className="mt-4">
    //                     <small className="text-light">
    //                       © 2026 Admin Portal
    //                     </small>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           </form>
    //       </section>
    //     );
    //   }
    // }

    render() {
        return (
            <div
                className="container-fluid vh-100"
                style={{
                    background: "linear-gradient(to right, #4e73df, #224abe)",
                }}
            >
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-sm-10 col-md-8 col-lg-5 col-xl-4">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-5">

                                {/* Logo */}
                                <div className="text-center mb-4">
                                    <div
                                        className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            fontSize: "32px",
                                        }}
                                    >
                                        🔐
                                    </div>
                                </div>

                                {/* Heading */}
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-dark">
                                        Admin Login
                                    </h2>
                                    <p className="text-muted">
                                        Sign in to access your dashboard
                                    </p>
                                </div>

                                <form method="POST" onSubmit={this.handleLogin}>

                                    {/* Username */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            Username / Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter username or email"
                                            name="UserName"
                                            value={this.state.UserName}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder="Enter password"
                                            name="Password"
                                            value={this.state.Password}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Forgot Password */}
                                    <div className="text-end mb-4">
                                        <a
                                            href="#!"
                                            className="text-decoration-none"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                    {/* Login Button */}
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg fw-bold"
                                        >
                                            Login
                                        </button>
                                    </div>

                                </form>

                                <hr className="my-4" />

                                <div className="text-center text-muted">
                                    <small>
                                        © 2026 Admin Portal. All Rights Reserved.
                                    </small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}