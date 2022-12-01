
import React, { Component } from 'react'
import "../../App.css";
import logo from "../../logo.svg";  
export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">

                    <header className="navbar navbar-expand-lg ">
                        <div className="container">
                            <a href="/" className="navbar-brand">
                                <img src={logo} className="App-logo" alt="logo" style={{ width: "100px" }} />                                V_news
                            </a>
                            <div className="dropdown nav d-block order-lg-2 ms-auto">
                                <a href="/" className="nav-link d-flex align-items-center p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" className="border rounded-circle" width="48" alt="Isabella Bocouse" />
                                    <div className="d-none d-sm-block ps-3" >
                                        <div className="fs-xs lh-1 opacity-60">Hello,</div>
                                        <div className="fs-sm dropdown-toggle">Isabella</div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end my-1">
                                    <h6 className="dropdown-header fs-xs fw-medium text-muted text-uppercase pb-1">Account</h6>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-user-check fs-lg opacity-70 me-2"></i>
                                        Overview
                                    </a>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-settings fs-lg opacity-70 me-2"></i>
                                        Settings
                                    </a>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-wallet fs-base opacity-70 me-2 mt-n1"></i>
                                        Billing
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <h6 className="dropdown-header fs-xs fw-medium text-muted text-uppercase pb-1">Dashboard</h6>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-cart fs-lg opacity-70 me-2"></i>
                                        Orders
                                    </a>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-activity fs-lg opacity-70 me-2"></i>
                                        Earnings
                                    </a>
                                    <a href="/" className="dropdown-item d-flex align-items-center">
                                        <i className="ai-messages fs-lg opacity-70 me-2"></i>
                                        Chat
                                        <span className="badge bg-danger ms-auto">4</span>
                                    </a>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-heart fs-lg opacity-70 me-2"></i>
                                        Favorites
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="/" className="dropdown-item">
                                        <i className="ai-logout fs-lg opacity-70 me-2"></i>
                                        Sign out
                                    </a>
                                </div>
                            </div>
                            <button type="button" className="navbar-toggler ms-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse5">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <nav className="collapse navbar-collapse" id="navbarCollapse5">
                                <ul className="navbar-nav">
                                    <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link">Services</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                                    <li className="nav-item"><a href="/" className="nav-link">India</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
            </>
        )
    }
}
