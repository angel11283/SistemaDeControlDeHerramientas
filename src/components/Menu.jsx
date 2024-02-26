import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logo from '../images/utldrarr.png';

const Menu = () => {
  const navigate = useNavigate();
  const handlePrestamosClick = () => {
    navigate('/Prestamos');
  };
  const handleAlumnosClick = () => {
    navigate('/Alumnos');
  };
  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className='position-relative'>
      <nav className="bg-success p-4 ">
        <div className="container-fluid">
          <h2 className="text-center" >SISTEMA DE CONTROL DE HERRAMIENTAS</h2>
        </div>
      </nav>
      <div className='navbar fixed-top'>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ marginTop: '2vh', }}>
          <span className="navbar-toggler-icon bg-light "></span>
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div>
            <img src={Logo} className='rounded mx-auto d-block img-fluid' />
          </div>
          <div className="offcanvas-body">
          <ul className="nav flex-column nav-tabs mb-3">
                  <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handlePrestamosClick}>Prestamos</button>
                    </li>
                    <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handleAlumnosClick}>Alumnos</button>
                    </li>
                    <li className="nav-item d-grid gap-2 mb-3">
                      <button className="btn btn-success" aria-current="page" onClick={handleLoginClick}>Cerrar sesión</button>
                    </li>
                  </ul>
          </div>
        </div>
      </div>
      <table class="table table-bordered border-success">
        <thead className='table-success' >
          <tr>
            <th scope="col">Codigo de prestamos</th>
            <th scope="col">Nombre del Alumno</th>
            <th scope="col">Nombre del Administrador</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1129911</th>
            <td>Josep rosales coronado</td>
            <td>Abimael</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
          <tr>
            <th scope="row">112992</th>
            <td>Angel Ulloa Loera</td>
            <td>Pedro</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Menu;