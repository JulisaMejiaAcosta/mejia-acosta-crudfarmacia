import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AgregarFormularioProducto = ({
    producto,
    onChange,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Producto</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombre"
                                placeholder="Ingrese nombre"
                                value={producto.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Vigencia:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="vigencia"
                                placeholder="Ingrese vigencia"
                                value={producto.vigencia}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>idMarca:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="date"
                                name="idMarca"
                                placeholder="Ingrese idMarca"
                                value={producto.idMarca}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                   
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight:"10px" }}>
                            Registrar
                        </Button>
                        <Link to="/productos" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioProducto;