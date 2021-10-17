import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';


const AgregarFormularioMarca = ({
    marca,
    onChange,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Marca</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombres:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombres"
                                placeholder="Ingrese nombres"
                                value={marca.nombres}
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
                                value={marca.vigencia}
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
                        <Link to="/marcas" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AgregarFormularioMarca;