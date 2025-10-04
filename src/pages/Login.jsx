import React from "react"

function Login() {
   

    return (
        <>
            <div className=" d-flex  vh-100 bg-dark text-white">
                <div className="container mt-5  p-4 shadow-lg bg-secondary" style={{ width: "58rem", height: "70vh" }}>
                    <h1 className="mb-3 mt-5 fw-bold text-center"><span><i className="fa-solid fa-right-to-bracket fa-flip-horizontal"></i></span>Login</h1>
                        <div className="mb-3 mt-5">
                            <input type="email" placeholder="Email" className="form-control bg-dark text-white border-0" />
                        </div>
                        <div className="mb-3 mt-5">
                            <input type="password" placeholder="Password" className="form-control bg-dark text-white border-0" />
                        </div>
                        <button className="btn btn-info mt-5 w-25 ">Login</button>
                    
                </div>
            </div>
        </>
    )
}

export default Login
