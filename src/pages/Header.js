import React, { Component } from 'react';
import logo from '../images/logo.png';
import imgHeader from '../images/bg-header_1.jpg'


class App extends Component {
  render() {
    return (
      <header className="open-menu">
        {/* <div id="menu-mobile" className="visible-xs">
          <div className="bar-close">
            <button type="button" className="btn btn-close"><i className="fa fa-times"></i></button>
          </div>
          <ul>
            <li>Ofertas</li>
            <li>Lojas</li>
            <li>Notícias</li>								
            <li>Receitas</li>												
            <li>Intstitucional</li>
            <li>Contato</li>
            <li className="botao-header"><button type="button" className="btn btn-default botao"><b>CARTÃO FIDELIDADE</b></button></li>
          </ul>
        </div> */}
        <div className="App">
          <header className="App-header">
            <img src={imgHeader} className="img-header" alt="Header" />
            <div className="container Menu-header">
              {/* <div className="  navbar navbar-default navbar-fixed-top menu-top menu_dropdown"> */}
                <a href="#">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                  <button id="btn-bars" type="button"><i className="fa fa-bars"></i></button>
                  <ul className="navbar-right">
                    <li><a href="#">OFERTAS</a></li>
                    <li><a href="#">LOJAS</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>								
                    <li><a href="#">RECEITAS</a></li>												
                    <li><a href="#">INSTITUCIONAL</a></li>
                    <li><a href="#">CONTATO</a></li>
                    <li className="botao-header"><button type="button" className="btn btn-default botao"><b>CARTÃO FIDELIDADE</b></button></li>
                  </ul>
              {/* </div> */}
            </div>
          </header>
          <div className="localizacao-site">
            Você esta em: Home > Receitas > Bolo Paçoca com Cobertura Cremosa
          </div>
        </div>
      </header>
    );
  }
}

export default App;
