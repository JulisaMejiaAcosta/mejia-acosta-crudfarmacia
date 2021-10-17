import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaProducto = ({ listaProducto }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Vigencia</th>
                <th>idMarca</th>
                           </tr>
        );
    }

    const celdas = () => {
        let numero=0;
        return (            
            listaProducto.map((producto) => (
                <tr key={producto.id}>
                    <th>{numero+=1}</th>
                    <td>{producto.nombre}</td>
                    <td>{producto.vigencia}</td>
                    <td>{producto.idmarca}</td>
                    
                    <td>
                        <Link to={"/editarProducto/" + producto.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Productos</h3>
            <Link to="/agregarProducto" className="btn btn-primary mb-2">
                Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </>
    );
}

export default TablaProducto;