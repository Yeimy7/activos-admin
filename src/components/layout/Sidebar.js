import React from 'react'
import { Link } from 'react-router-dom';
import { FaBook, FaBuilding, FaChair, FaClipboardList, FaListAlt, FaObjectGroup, FaTruckLoading, FaUserFriends, FaUserTie, FaWarehouse } from 'react-icons/fa'
import { RiBarChartFill, RiCommunityFill, RiFileChartFill, RiFileHistoryFill } from 'react-icons/ri'
import { MdAssignmentInd, MdAssignmentReturn, MdAssignmentReturned, MdAssignmentTurnedIn } from 'react-icons/md'



export const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar-wrapper">
            <ul id="menu">
                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseActivos" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <FaWarehouse className="icon" />Activos
                    </a>
                    <div className="collapse px-4" id="collapseActivos" data-bs-parent="#menu">
                        <Link to="/altas" className='item' activeclassname="active"><FaBook className="icon" />Altas</Link>
                        <Link to="/bajas" className='item' activeclassname="active"><FaClipboardList className="icon" />Bajas</Link>
                        <Link to="/grupos" className='item' activeclassname="active"><FaObjectGroup className="icon" />Grupos</Link>
                        <Link to="/auxiliares" className='item' activeclassname="active"><FaChair className="icon" />Auxiliar</Link>
                        <Link to="/lista-anio" className='item' activeclassname="active"><FaListAlt className="icon" />Listado por año</Link>
                    </div>
                </li>

                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseAsignacion" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <MdAssignmentInd className="icon" />Asignación de activos
                    </a>
                    <div className="collapse px-4" id="collapseAsignacion" data-bs-parent="#menu">
                        <Link to="/altas" className='item' activeclassname="active"><MdAssignmentTurnedIn className="icon" />Asignar</Link>
                    </div>
                </li>
                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseDevolucion" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <MdAssignmentReturn className="icon" />Devolución de activos
                    </a>
                    <div className="collapse px-4" id="collapseDevolucion">
                        <Link to="/devoluciones" className='item' activeclassname="active"><MdAssignmentReturned className="icon" />Devolver</Link>
                        <Link to="/historial-devoluciones" className='item' activeclassname="active"><RiFileHistoryFill className="icon" />Historial</Link>
                    </div>
                </li>
                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseDepreciacion" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <RiFileChartFill className="icon" />Depreciación de activos
                    </a>
                    <div className="collapse px-4" id="collapseDepreciacion">
                        <Link to="/depreciacion" className='item' activeclassname="active"><RiBarChartFill className="icon" />Depreciar</Link>
                    </div>
                </li>
                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseInstitucion" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <FaBuilding className="icon" />Institución
                    </a>
                    <div className="collapse px-4" id="collapseInstitucion">
                        <Link to="/unidades" className='item' activeclassname="active"><RiCommunityFill className="icon" />Unidades</Link>
                        <Link to="/cargos" className='item' activeclassname="active"><FaUserTie className="icon" />Cargos</Link>
                        <Link to="/empleados" className='item' activeclassname="active"><FaUserFriends className="icon" />Empleados</Link>
                    </div>
                </li>
                <li>
                    <a className="item dropdown-toggle" data-bs-toggle="collapse" href="#collapseProvedor" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <FaTruckLoading className="icon" />Proveedores
                    </a>
                    <div className="collapse px-4" id="collapseProvedor">
                        <Link to="/registrar-proveedor" className='item' activeclassname="active"><FaClipboardList className="icon" />Registrar</Link>
                    </div>
                </li>

            </ul>

        </aside>
    );
}
