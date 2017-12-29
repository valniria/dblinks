import React, { Component } from 'react';
import logo from '../images/logo.png';
import fb from '../images/fb.png';
import News from '../pages/News';
import dblink from '../images/logo-db.png';
import sysmo from '../images/logo-sysmo.png';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
  }
 
  handleTop() {
      window.scrollTo(0, 0)
  }


  render() {
    return (
    <div>
        <News />
        <div className="App-footer">
            <div className="App-footer-elements">
                <div className="col-md-4 logo-footer">
                    <img src={logo} className="App-logo-footer" alt="logo" />
                </div>
                <hr className="linha-footer" />
                <div className="col-md-4 lojas-footer">
                    <div className="titulo-footer">Lojas</div>
                    <ul className="navbar-down">
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
                <div className="col-md-4 social-footer">
                    <div className="titulo-footer">Siga-nos</div>
                    <div className="social-media">
                        <a target="_blank" href="https://www.facebook.com/supermercadoscarol">
                            <i className="fa fa-facebook fa-3x"></i>
                        </a>
                        <a  target="_blank" href="https://www.facebook.com/supermercadoscarol">
                            <i className="fa fa-google-plus fa-3x"></i>
                        </a>
                        <a  target="_blank" href="https://www.facebook.com/supermercadoscarol">
                            <i className="fa fa-twitter fa-3x"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/supermercadoscarol">
                            <i className="fa fa-whatsapp fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="direitos">
            <h5>Todos os direitos reservados. Supermercados Carol 2017.</h5>
            <ul className="lista-img-footer">
                <li><img src={dblink} className="img-footer" alt="Dblink"  /> </li>
                <li><img src={sysmo} className="img-footer" alt="Sysmo"  /> </li>
            </ul>
        </div>
        <div id="topcontrol" className="topcontrol" title="" onClick={ () => this.handleTop() }>
            <i className="fa fa-angle-up scrolltop"></i>
        </div>
    </div>
    );
  }
}

export default App;
