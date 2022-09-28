import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-dark bg-light font-white ${styles.navbarStyle}`}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                    </a>
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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    News
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Program
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Listing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Sponsor
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link active" href="/">
                                    Program
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link active" href="/">
                                <i className="far fa-newspaper" style={{fontSize: '30px'}}></i>
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link active" href="/">
                                <i class="fas fa-cart-plus" style={{fontSize: '30px'}}></i>
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="input-group">
                                <input
                                    className="form-control border-end-0 border rounded-pill"
                                    type="text"
                                    value="search"
                                    id="example-search-input"
                                />
                                <span className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3"
                                        type="button"
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
