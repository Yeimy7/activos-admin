import React from 'react'

export const Barra = () => {
  return (
    <header className='app-header'>
      {/* {usuario ? <p className='nombre-usuario'>Hola <span>{usuario[0].nombre}</span></p> : null} */}
      <p className='nombre-usuario'>Hola <span>Gabriela</span></p>

      <nav className='nav-principal'>
        <button
          className='btn btn-blank cerrar-sesion'
        //   onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  )
}
