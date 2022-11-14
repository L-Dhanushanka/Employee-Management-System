
import {Employee} from './components/Employee';
import { Department } from './components/Department';

import { BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        {" "}
        <br />
        <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="%PUBLIC_URL%../../log.png"
          width="140"
          class="center"
          alt=""
        />
        <h3
          className="d-flex justify-content-center m-3"
          style={{
            fontWeight: "bold",
          }}
        >
          Employee Details Mangement System
        </h3>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{
            background: "transparent",

            opacity: 0.6,
            padding: "10px",
          }}
        >
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#"></a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/department"
                  >
                    Department
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/employee"
                  >
                    <i class="fas fa-phone-square"></i> &nbsp;Employee
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="%PUBLIC_URL%../../user.png"
                        class="rounded-circle"
                        width="40"
                        height="40"
                        alt=""
                      />
                      &nbsp; Manager &nbsp; &nbsp; &nbsp;{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        {/* <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
          <ul className="navbar-nav">
            
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-info btn btn-outline-secondary"
                to="/department"
              >
                Department
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-info btn btn-outline-secondary"
                to="/employee"
              >
                Employee
              </NavLink>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/employee" element={<Employee />} />
          <Route path="/department" element={<Department />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
 }

 export default App;


