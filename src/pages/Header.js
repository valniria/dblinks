import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/App.css';


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
                <li className="botao-header"><button type="button" className="btn btn-default botao"><b>CARTÃO FIDELIDADE</b></button></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="localizacao-site">
          Você esta em: Home > Receitas > Bolo Paçoca com Cobertura Cremosa
        </div>
      </div>
    );
  }
}

export default App;
