import React, { useState } from 'react'
import { NavBar } from '../layout/NavBar'
import { Sidebar } from '../layout/Sidebar'

export const Home = () => {
  const [toggle, setToggle] = useState(false)

  return (

    <div>
      <Sidebar toggle={toggle} />
      <div className=" w-100">
        <NavBar toggle={toggle} setToggle={setToggle} />
        <section className={`page-section ${toggle ? 'page-section-close' : ''}`}>
          <main className='page-content'>
            Holaaa
            <div className='contenedor-tareas'>
              {/* <ListadoTareas /> */}

            </div>
          </main>
        </section>
      </div>
    </div>
  )
}
