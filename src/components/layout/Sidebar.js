import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import user from '../../assets/user.jpg'
import { FaBook, FaBuilding, FaChair, FaClipboardList, FaListAlt, FaObjectGroup, FaTruckLoading, FaUserFriends, FaUserTie, FaWarehouse } from 'react-icons/fa'
import { RiBarChartFill, RiCommunityFill, RiFileChartFill, RiFileHistoryFill, RiArrowDownSLine } from 'react-icons/ri'
import { MdAssignmentInd, MdAssignmentReturn, MdAssignmentReturned, MdAssignmentTurnedIn } from 'react-icons/md'



export const Sidebar = ({ toggle }) => {

    const [arrows, setArrows] = useState({
        arrow1: false,
        arrow2: false,
        arrow3: false,
        arrow4: false,
        arrow5: false,
        arrow6: false,
    })
    return (
        <aside>
            <div className={`sidebar ${toggle ? 'close' : ''}`}>
                <div className="logo-details">
                    <div className="badgee__logo">
                        <img alt='logo-institucion' src={logo} />
                    </div>
                    <span className="logo_name">Asociación Centro Virgen Niña - EPDB</span>
                </div>
                <ul className="nav-links">       
                    <li className={arrows.arrow1 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <FaWarehouse />
                                </i>
                                <span className="link_name">Activos</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow1: !arrows.arrow1 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Activos</a></li>
                            <li>
                                <Link to="/activos/altas">
                                    <FaBook />
                                    <span>Altas</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/activos/bajas">
                                    <FaClipboardList />
                                    <span>Bajas</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/grupos">
                                    <FaObjectGroup />
                                    <span>Grupos</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/auxiliares" className='item' >
                                    <FaChair  />
                                    <span>Auxiliar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/lista-anio" className='item' >
                                    <FaListAlt />
                                    <span>Listar por año</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={arrows.arrow2 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <MdAssignmentInd />
                                </i>
                                <span className="link_name">Asignación</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow2: !arrows.arrow2 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Asignación</a></li>
                            <li >
                                <Link to="/asignar" >
                                    <MdAssignmentTurnedIn />
                                    <span>Asignar</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={arrows.arrow3 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <MdAssignmentReturn className="icon" />
                                </i>
                                <span className="link_name">Devolución</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow3: !arrows.arrow3 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Devolución</a></li>
                            <li>
                                <Link to="/altas" >
                                    <MdAssignmentReturned />
                                    <span>Devolver</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bajas" >
                                    <RiFileHistoryFill />
                                    <span >Historial</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={arrows.arrow4 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <RiFileChartFill />
                                </i>
                                <span className="link_name">Depreciación</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow4: !arrows.arrow4 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Depreciación</a></li>
                            <li >
                                <Link to="/asignar" >
                                    <RiBarChartFill />
                                    <span>Depreciar</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={arrows.arrow5 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <FaBuilding />
                                </i>
                                <span className="link_name">Institución</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow5: !arrows.arrow5 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Institución</a></li>
                            <li>
                                <Link to="/altas"  >
                                    <RiCommunityFill />
                                    <span>Unidades</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bajas"  >
                                    < FaUserTie />
                                    <span>Cargos</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/grupos" >
                                    <FaUserFriends />
                                    <span>Empleados</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={arrows.arrow6 ? 'showMenu' : ''}>
                        <div className="iocn-link">
                            <div className='wrap-link_name'>
                                <i>
                                    <FaTruckLoading />
                                </i>
                                <span className="link_name">Proveedores</span>
                            </div>
                            <i className='arrow' onClick={() => setArrows({ ...arrows, arrow6: !arrows.arrow6 })}>
                                <RiArrowDownSLine />
                            </i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="/">Proveedores</a></li>
                            <li >
                                <Link to="/asignar" >
                                    <FaClipboardList />
                                    <span>Registrar</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src={user} alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name"> Gabriela Limachi</div>
                                <div className="job">Administrador</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
