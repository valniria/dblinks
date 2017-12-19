import React, { Component } from 'react';
import logo from '../images/logo.png';
import fb from '../images/fb.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div>
      <div id="box-novidades">
          <div className="box-elements">
          <div className="col-md-4">
            <div className="titulo-box">Receba nossas novidades.</div>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Digite seu E-mail" />
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-default botao-box">Inscreva-se</button>
          </div>
        </div>
      </div>
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
                <img src={fb} id="fb-img" alt="fb"  />
            </div>
          </div>
      </div>
      <p>Todos os direitos reservados. Supermercados Carol 2017.</p>
    </div>
    );
  }
}

export default App;
