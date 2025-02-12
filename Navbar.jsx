import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    let {nav} = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">{nav}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}

export default Navbar