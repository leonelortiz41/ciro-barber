import { useState } from "react";
import logo from '../assets/logobarber1.svg'

function Header() {
    let [scrollYHeader, setScrollYHeader] = useState(0);
    document.addEventListener("scroll",()=>{
        setScrollYHeader(window.scrollY)
    })
    return (
        <div className={scrollYHeader === 0 ? "Header" : "Header-fixed"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
                <div className="container-fluid justify-content-around">
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav d-flex justify-content-center align-center">
                                <li className="nav-item">
                                    <a className="btn d-block" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn d-block" href="#Services">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn d-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Reservar turno
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={logo}  style={{ height: "70px" }} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
