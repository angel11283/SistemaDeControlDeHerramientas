import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../images/utldrarr.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/styles.css';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigate("/Menu");
    } else {
      alert('Credenciales inválidas');
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center vh-100 bg-custom'>
        <div className='col-md-6 text-center rounded-start-5 p-5 '>
          <div className='fondo'>
            <div className='title'>
              <h1 className='p-4'>SISTEMA DE CONTROL DE HERRAMIENTAS</h1>
            </div>
            <img src={Logo} className='p-4' alt='Logo' width="500px" height="350px" />
          </div>
        </div>
        <div className='col-12 col-lg-4 col-md-6 bg-secondary rounded-end-5 shadow  bg-body-tertiary rounded p-5 rounded-5 '>
          <form className='p-4 '>
            <img src={Logo} className='d-block mx-auto p-0' alt='Logo' width="200px" height="139px" />
            <h2 className='text-center ' id='title'>ADMINISTRADOR</h2>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>Nombre de usuario:</label>
              <input
                type='text' className='form-control' id='username' value={username} onChange={handleUsernameChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Contraseña:</label>
              <input
                type='password' className='form-control' id='password' value={password} onChange={handlePasswordChange}
              />
            </div>
            <button type='button' className='col-12 col-lg-6 col-md-6 mx-auto d-block btn btn-success p-2' onClick={handleLogin}>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;