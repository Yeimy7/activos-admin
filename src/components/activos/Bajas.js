import React, { useState } from 'react'
import { NavBar } from '../layout/NavBar';
import { PageContainer } from '../layout/PageContainer';
import { Sidebar } from '../layout/Sidebar';
import { Table } from '../Table';


const tablaActivos = [
  { id: 111, codigo: 'RYNV-938-15-0001', fecha: '02-07-2021', descripcion: "laptop marca DELL", motivo:'obsolescencia' },
  { id: 112, codigo: 'RYNV-938-15-0002', fecha: '15-10-2021', descripcion: "escritorio de roble", motivo:'obsolescencia'},
  { id: 113, codigo: 'RYNV-938-15-0003', fecha: '08-12-2021', descripcion: "Monitor marca LG", motivo:'obsolescencia' },

]
const columns = [
  {
    name: 'Nro',
    cell: (row, index) => (index + 1),
    grow: 0
  },
  {
    name: 'Código',
    selector: row => row.codigo,
  },
  {
    name: 'Fecha',
    selector: row => row.fecha,
  },
  {
    name: 'Descripción',
    selector: row => row.descripcion,
  },
  {
    name: 'Motivo',
    selector: row => row.motivo,
  },
  {
    name: 'Acciones',
    button: true,
    width: '150px',
    cell: row => (
      // <div>
        <button className='btn btn-success'>Dar de alta</button>
      // </div>
    ),
  },
]


export const Bajas = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='home'>
      <Sidebar toggle={toggle} />
      <div className="w-100">
        <NavBar toggle={toggle} setToggle={setToggle} />
        <PageContainer toggle={toggle}>
          <Table columns={columns} tablaActivos={tablaActivos} title='Activos dados de baja' />            
        </PageContainer>
      </div>
    </div>

  )
}
