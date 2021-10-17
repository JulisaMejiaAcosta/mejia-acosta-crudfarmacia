import React from 'react';
import { NavLink } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/home" className="container-title">FARMACIA</NavLink>                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

/*    <NavLink to="/marcas" className="opt-barra">
                                Marca
                            </NavLink>
                            <NavLink to="/Productos" className="opt-barra">
                                Producto
                            </NavLink>
                            */

export default BarraNavegacion;