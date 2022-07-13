import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NavBar = ({ toggle, setToggle }) => {

  const toogleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <nav className={`navbar navbar-expand-lg  p-0 ${toggle ? 'nav-close' : ''}`}>
      <div className="container-fluid py-3">
        <button className="btn p-1 me-3" onClick={toogleMenu} >
          <FaBars className="m-1" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
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
