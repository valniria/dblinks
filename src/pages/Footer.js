import React, { Component } from 'react';
import logo from '../images/logo.png';
import fb from '../images/fb.png';
import News from '../pages/News';
import dblink from '../images/logo-db.png';
import sysmo from '../images/logo-sysmo.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div>
        <News />
        <div className="App-footer">
            <div className="App-footer-elements">
                <div className="col-md-4">
                    <img src={logo} className="App-logo-footer" alt="logo" />
                </div>
                <div className="col-md-4">
                    <div className="titulo-footer">Lojas</div>
                    <ul class="navbar-down">
                        <li>Guabiruba - SC (Matriz)</li>
                        <li>Brusque - SC (Dom Joaquim)</li>
                        <li>Brusque - SC (Guarani)</li>								
                        <li>Brusque - SC (São Pedro)</li>												
                        <li>Brusque - SC (Águas Claras)</li>
                        <li>Nova Trento - SC (Claraiba)</li>
                        <li>Nova Trento - SC (Claraiba)</li>
                        <li>Guabiruba - SC (Centro de Distribuição)</li>
                        <li>Guabiruba - SC (Auto Posto Carol)</li>
                        <li>Guabiruba - SC (Auto Posto Carol)</li>
                        <li>Guabiruba - SC (Carol Retire Atacarejo)</li>
                        <li>Blumenau - SC (Progresso)</li>
                        <li>Gaspar - SC (Gaspar)</li>
                        <li>Guabiruba - SC (Carol Presentes)</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="titulo-footer">Siga-nos</div>
                    <ul class="uisocial-index radius social">
                        <li>
                            <a class="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/supermercadoscarol">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h5>Todos os direitos reservados. Supermercados Carol 2017.</h5>
        <ul className="lista-img-footer">
            <li><img src={dblink} className="img-footer" alt="Dblink"  /> </li>
            <li><img src={sysmo} className="img-footer" alt="Sysmo"  /> </li>
        </ul>
    </div>
    );
  }
}

export default App;
