import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{color:"white"}}>
          <Link className="navbar-brand" to="/">DailyNews</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              {/* <li className="nav-item"><Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link></li> */}
              <li className="nav-item"><Link className="nav-link" to="business">Business <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="entertainment">Entertainment <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="general">General <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="health">Health <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="science">Science <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="sports">Sports <span className="sr-only">(current)</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="technology">Technology <span className="sr-only">(current)</span></Link></li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}
