import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NavBar = ({ toggle, setToggle }) => {

  const toogleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <nav className="navbar navbar-expand-lg  p-0">
      <div className="container-fluid py-3">
        <button className="btn p-1 me-3" id='menu-toggle' onClick={toogleMenu} >
          <FaBars className="m-1" />
        </button>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
