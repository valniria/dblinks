import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Menu-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <ul class="navbar-right">
                <li>OFERTAS</li>
                <li>LOJAS</li>
                <li>NOTÍCIAS</li>								
                <li>RECEITAS</li>												
                <li>INSTITUCIONAL</li>
                <li>CONTATO</li>
                <li className="botao-header"><button type="button" className="btn btn-default botao">CARTÃO FIDELIDADE</button></li>
              </ul>
            </nav>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
