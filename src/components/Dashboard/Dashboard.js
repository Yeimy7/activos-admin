import React, { useState } from 'react'
import { NavBar } from '../layout/NavBar'
import { Sidebar } from '../layout/Sidebar'

export const Dashboard = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`body ${toggle ? 'sb-sidenav-toggled' : ''}`}>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div className="content w-100" id="page-content-wrapper">

          <NavBar toggle={toggle} setToggle={setToggle} />
          <div className="page-content">
            <main>
              {/* <FormTarea /> */}
              <div className='contenedor-tareas'>
                {/* <ListadoTareas /> */}

              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
