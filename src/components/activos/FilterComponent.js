import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

export const FilterComponent = ({ onFilter, onClear, filterText }) => {
  if (!filterText) {
    onClear()
  }
  return (
    <div className='barraBusqueda'>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Código"
          value={filterText}
          onChange={onFilter}

        />
        <button className="btn btn-outline-secondary" type="button"  onClick={onClear}>
          <RiCloseLine className='btnicon' />
        </button>
      </div>
    </div>

  )
}
