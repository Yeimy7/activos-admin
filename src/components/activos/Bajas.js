import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';


const tablaActivos = [
  { id: 1, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 2, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 3, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 4, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 5, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 6, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 7, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 8, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 9, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 10, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 11, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 12, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 13, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 14, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 15, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 16, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },
  { id: 17, nombre: 'silla', precio: 150, marca: "Los robles", color: "café" },

]

const columnas = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true
  },
  {
    name: 'Nombre',
    selector: 'nombre',
    sortable: false
  },
  {
    name: 'Precio',
    selector: 'precio',
    sortable: false
  },
  {
    name: 'Marca',
    selector: 'marca',
    sortable: false
  },
  {
    name: 'Color',
    selector: 'color',
    sortable: false
  }
]
const paginacionOpciones = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}
export const Bajas = () => {
  return (
    <div className='w-80 table table-responsive' >
      <DataTable className='table-responsive'
        columns={columnas}
        data={tablaActivos}
        title="Lista de activos"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight='400px'
        striped
        responsive
        theme="solarized"
      />
    </div>
  )
}
