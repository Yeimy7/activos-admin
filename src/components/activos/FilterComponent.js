import React from 'react'
import { FaSearch } from 'react-icons/fa'

export const FilterComponent = ({ onFilter, onClear, filterText }) => {
  if(!filterText){
    onClear()
  }
  return (
    <div className='barraBusqueda'>
      <input
        type="text"
        placeholder="Buscar"
        className='textField'
        name="busqueda"
        value={filterText}
        onChange={onFilter}
      />
      <button type='button' className='btnBuscar' onClick={() => onClear}>
        <FaSearch className='btnicon' />
      </button>
    </div>
  )
}
