import React, { Component } from 'react';
import sorvete from '../images/sorvete-caseiro.jpg';
import pave from '../images/pave-panetone.jpg';
import macarrao from '../images/macarrao-italiana.jpg';
import longuette from '../images/longuette-crocante.jpg';
import arroz from '../images/arroz-forno.jpg';
import churros from '../images/sanduiche-churros.jpg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div className="receita-meio">
        <h3>VEJA TAMBÉM</h3>
        <div className="row">
            <img src={sorvete} className="img-ver-tambem" alt="Imagem Receita" />
            <img src={pave} className="img-ver-tambem" alt="Imagem Receita" />
            <img src={macarrao} className="img-ver-tambem" alt="Imagem Receita" />
            <img src={longuette} className="img-ver-tambem" alt="Imagem Receita" />
            <img src={arroz} className="img-ver-tambem" alt="Imagem Receita" />
            <img src={churros} className="img-ver-tambem" alt="Imagem Receita" />            
        </div>
    </div>
    );
  }
}

export default App;
