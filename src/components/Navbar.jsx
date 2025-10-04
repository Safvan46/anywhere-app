import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/"> <span><i class="fa-solid fa-ghost fa-xl"></i></span>Anywhere-App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link text-light ms-5" href="/">Signup</a>
                            <a className="nav-link text-light ms-5" href="/log">Login</a>
                            <a className="nav-link text-light ms-5" href="/pro">Profile</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
