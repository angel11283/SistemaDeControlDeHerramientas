import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/utldrarr.png';

function Alumnos() {
  const navigate = useNavigate();
  const handlePrestamosClick = () => {
    navigate('/Prestamos');
  };
  const handleAlumnosClick = () => {
    navigate('/Alumnos');
  };
  const handleMenuClick = () => {
    navigate('/Menu');
  };

  return (
    <div className='container'>
      <div className='row align-items-start'>
      <nav className="navbar bg-success fixed-top p-4">
          <div className="container-fluid">
            <h1 className="navbar-brand mx-auto">ALUMNOS</h1>
            <button className="navbar-toggler position-absolute top-0 start-0 bg-light m-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div>
            <img src={Logo} className='rounded mx-auto d-block img-fluid' />
          </div>
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">SISTEMA DE CONTROL DE HERRMAIENTAS</h5>
              <div className="offcanvas-body">
                <div>
                  <ul className="nav flex-column nav-tabs mb-3">
                  <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handlePrestamosClick}>Prestamos</button>
                    </li>
                    <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handleAlumnosClick}>Alumnos</button>
                    </li>
                    <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handleMenuClick}>Registros</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row justify-content-center align-items-center vh-100">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              <div className='Login'>
                <div className="col-lg-8 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-5">
                  <form>
                    <img src={Logo} className='d-block mx-auto p-3 m-3' alt='Logo' width="200px" height="139px" />
                    <h2 className='text-center m-3' id='title'>ALUMNOS</h2>
                    <div class="form-floating mb-3">
                      <input type="Matricula" class="form-control" id="floatingInput"/>
                      <label for="floatingInput">Matricula</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Admostrador" class="form-control" id="floatingPassword"/>
                      <label for="floatingPassword">Nombre/Nombres</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Matricula" class="form-control" id="floatingInput"/>
                      <label for="floatingInput">Apellido paterno</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Matricula" class="form-control" id="floatingInput"/>
                      <label for="floatingInput">Apellido meterno</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Admostrador" class="form-control" id="floatingPassword"/>
                      <label for="floatingPassword">CURP</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Matricula" class="form-control" id="floatingInput"/>
                      <label for="floatingInput">Edad</label>
                    </div>
                    <div class="form-floating mb-2">
                      <input type="Admostrador" class="form-control" id="floatingPassword"/>
                      <label for="floatingPassword">Género</label>
                    </div>
                    <button type='button' className='col-12 col-lg-6 col-md-6 mx-auto d-block btn btn-success p-2'>Agregar Alumno</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="tabla">
                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
                  <h2>TABLA DE ALUMNOS</h2>
                  <table class="table">
                    <thead className='table-success'>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Alumnos;