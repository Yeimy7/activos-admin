import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre, email, password, confirmar } = usuario;
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='form-usuario'>
            {/* {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null} */}
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirma tu password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarme'
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    )
}
