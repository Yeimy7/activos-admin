import React from 'react'

export const NuevoActivo = ({ grupos }) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog  modal-lg modal-background">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title " id="exampleModalLabel">Agregar Activo</h5>
                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor='grupo' className='form-label'>
                                    Grupo:
                                </label>
                                <select
                                    name='grupo'
                                    className='form-select'
                                    aria-label='Default select example'
                                >
                                    <option defaultValue>Seleccione el grupo </option>
                                    {grupos.map((item, index) => (<option key={index} value={item}>{item}</option>))}
                                </select>
                            </div>
                            <div className='col'>
                                <label htmlFor='auxiliar' className='form-label'>
                                    Auxiliar:
                                </label>
                                <select
                                    name='auxiliar'
                                    className='form-select'
                                    aria-label='Default select example'
                                >
                                    <option defaultValue>Seleccione el auxiliar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor='codigo' className='form-label'>
                                    Código:
                                </label>
                                <input
                                    type='text'
                                    name='codigo'
                                    className='form-control'
                                />
                            </div>
                            <div className='col'>
                                <label htmlFor='descripcion' className='form-label'>
                                    Descripción A.F.:
                                </label>
                                <input
                                    type='text'
                                    name='descripcion'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor='fecha' className='form-label'>
                                    Fecha de ingreso:
                                </label>
                                <input
                                    type='date'
                                    name='fecha'
                                    className='form-control'
                                />
                            </div>
                            <div className='col'>
                                <label htmlFor='costo' className='form-label'>
                                    Costo Bs:
                                </label>
                                <input
                                    type='text'
                                    name='costo'
                                    className='form-control'
                                />
                            </div>
                            <div className='col'>
                                <label htmlFor='estado' className='form-label'>
                                    Estado del bien:
                                </label>
                                <select
                                    name='estado'
                                    className='form-select'
                                    aria-label='Default select example'
                                >
                                    <option defaultValue>Seleccione estado</option>
                                    <option value="bueno">Bueno</option>
                                    <option value="nuevo">Nuevo</option>
                                    <option value="regular">Regular</option>
                                    <option value="malo">Malo</option>
                                    <option value="obsoleto">Obsoleto</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor='observacion' className='form-label'>
                                    Observaciones:
                                </label>
                                <input
                                    type='text'
                                    name='observacion'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>

                                <label htmlFor="formFile" className="form-label">Seleccionar foto:</label>
                                <input className="form-control" type="file" id="formFile"></input>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
