import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="receita-ingredientes-maior">
            <div className="receita-preparo-titulo">MODO DE PREPARO:</div>    
            <br />             
            <ul className="receita-passos">
                <li>Bolo: prepare a mistura DONA BENTA conforme indicado na embalagem. Asse utilizando forma redonda com furo no meio.</li>
                <li>Cobertura: esfarele a paçoca e separe 3 colheres (sopa) para decorar. Em uma panela, misture a paçoca com o leite condensado e leve ao fogo médio, mexendo sempre deixe até soltar do fundo, ponde de brigadeiro mole.</li>
                <li>3 colheres (sopa) de margarina</li>
                <li>Cubra o bolo e sirva morno.</li>
            </ul>
        </div>
    );
  }
}

export default App;
