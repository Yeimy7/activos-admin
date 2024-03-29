import React, { useState } from 'react'

import { NavBar } from '../layout/NavBar';
import { PageContainer } from '../layout/PageContainer';
import { Sidebar } from '../layout/Sidebar';
import { NuevoActivo } from '../modals/NuevoActivo';
import { Table } from '../Table';


const tablaActivos = [
  { id: 1, nombre: 'silla', precio: 150, marca: "Los robles", color: "café", poster: 'https://ekonomodo.com/12730-medium_default/silla-giratoria-premium-polux.jpg' },
  { id: 2, nombre: 'mesa', precio: 150, marca: "Los robles", color: "café", poster: 'https://mundoescolarydeoficina.com/image/cache/data/ESCRITORIO%20RECTO%20LOGAN%20ECO%202-600x600.jpg' },
  { id: 3, nombre: 'escritorio', precio: 150, marca: "Los robles", color: "café" },
  { id: 4, nombre: 'mouse', precio: 150, marca: "Los robles", color: "café" },
  { id: 5, nombre: 'monitor', precio: 150, marca: "Los robles", color: "café" },
  { id: 6, nombre: 'teclado', precio: 150, marca: "Los robles", color: "café" },
  { id: 7, nombre: 'cpu', precio: 150, marca: "Los robles", color: "café" },
  { id: 8, nombre: 'comoda', precio: 150, marca: "Los robles", color: "café" },
  { id: 9, nombre: 'estante', precio: 150, marca: "Los robles", color: "café" },
  { id: 10, nombre: 'televisor', precio: 150, marca: "Los robles", color: "café" },
  { id: 11, nombre: 'tocador', precio: 150, marca: "Los robles", color: "café" },
  { id: 12, nombre: 'velador', precio: 150, marca: "Los robles", color: "café" },
  { id: 13, nombre: 'cama', precio: 150, marca: "Los robles", color: "café" },
  { id: 14, nombre: 'mueble de radio', precio: 150, marca: "Los robles", color: "café" },
  { id: 15, nombre: 'mueble de televisión', precio: 150, marca: "Los robles", color: "café" },
  { id: 16, nombre: 'ropero', precio: 150, marca: "Los robles", color: "café" },
  { id: 17, nombre: 'librero', precio: 150, marca: "Los robles", color: "café" },
]

const grupos = [
  'muebles y enseres de oficina',
  'equipo e instalaciones',
  'equipo de comunicaciones',
  'equipo médico',
  'equipo de computación',
  'equipo educacional y recreativo',
  'maquinaria en general'
]

const columns = [
  {
    name: 'Nro',
    cell: (row, index) => (index + 1),
    grow: 0
  },
  {
    name: 'Código',
    selector: row => row.nombre,
    sortable: false,
  },
  {
    name: 'Fecha',
    selector: row => row.precio,
    sortable: false
  },
  {
    name: 'Descripción',
    selector: row => row.marca,
    sortable: false
  },
  {
    name: 'Costo',
    selector: row => row.color,
    sortable: false
  },
  {
    name: 'Valor Actual',
    selector: row => row.color,
    sortable: false
  },
  {
    name: 'Estado',
    selector: row => row.color,
    sortable: false
  },
  {
    name: 'Imagen',
    grow: 0,
    cell: row => <img height="80px" width="62px" alt={row.name} src={row.poster} />,
  },
  {
    name: 'Acciones',
    button: true,
    width: '220px',
    cell: row => (
      <div>
        <button className='boo'>Download</button>
        <button className='boo boo2'>Upload</button>
        <button className='boo boo3'>Deleted</button>
      </div>
    ),
  },
]




export const Altas = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='home'>
      <Sidebar toggle={toggle} />
      <div className="w-100">
        <NavBar toggle={toggle} setToggle={setToggle} />
        <PageContainer toggle={toggle}>
          <button type='button' className='btn btn-primary m-3' data-bs-toggle='modal' data-bs-target="#exampleModal">Agregar</button>
          <button type='button' className='btn btn-success m-3'>Reporte de activos</button>
          <button type='button' className='btn btn-dark m-3'>Generar Códigos</button>
          <NuevoActivo grupos={grupos} />
          <Table columns={columns} tablaActivos={tablaActivos} title='Lista de activos' />
        </PageContainer>
      </div>
    </div>
  )
}
