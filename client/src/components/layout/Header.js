import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar fixed-top clearfix navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#!">LOGO</a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- MENU --> */}
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item dropdown px-2">
              <a href="#!" className="nav-link dropdown-toggle" data-toggle="dropdown">Options</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/posts"><i className="fas fa-scroll mr-1"></i>Posts</Link>
                <Link className="dropdown-item" to="/posts/new"><i className="fas fa-paper-plane mr-2"></i>New Post</Link>
                <Link className="dropdown-item" to="/expenses"><i className="fas fa-wallet mr-2"></i>Expenses</Link>
                {/* <Link className="dropdown-item" to="/files"><i className="fas fa-folder"></i>Documents</Link> */}
                <Link className="dropdown-item" to="/profiles/me"><i className="fas fa-user mr-2"></i>Profile</Link>
                <Link className="dropdown-item" to="/dashboard/posts"><i className="fas fa-cog mr-2"></i>Dashboard</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
