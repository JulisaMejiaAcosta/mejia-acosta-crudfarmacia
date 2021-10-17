import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/comunes/barraNavegacion/BarraNavegacion';
import VistaMarca from './app/paginas/marca/VistaMarca';
import AgregarMarca from './app/paginas/marca/AgregarMarca';
import EditarMarca from './app/paginas/marca/EditarMarca';

import AgregarProducto from './app/paginas/producto/AgregarProducto';
import VistaProducto from './app/paginas/producto/VistaProducto';
import EditarProducto from './app/paginas/producto/EditarProducto'

import Inicio from './app/paginas/inicio/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <BarraNavegacion />
            <div className="container mt-4">
                <Switch>
                    <Route path="/inicio" exact><Inicio/></Route>
                    <Route path="/AgregarMarca" exact><AgregarMarca/></Route>
                    <Route path="/EditarMarca/:id" exact><EditarMarca/></Route>
                    <Route path="/marcas" exact><VistaMarca/></Route>

                    <Route path="/AgregarProducto" exact><AgregarProducto/></Route>
                    <Route path="/EditarProducto/:id" exact><EditarProducto/></Route>
                    <Route path="/productos" exact><VistaProducto/></Route>
                   
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
