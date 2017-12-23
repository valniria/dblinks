import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="receita-meio">
            <div className="row">
                <div className="col-md-6">
                    <p>Compartilhe</p>
                    <ul class="social">
                        <li>
                            <a class="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/supermercadoscarol">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a class="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/supermercadoscarol">
                                <i class="fa fa-google-plus-official"></i>
                            </a>
                            <a class="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/supermercadoscarol">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a class="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/supermercadoscarol">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <br />
                    <div className="receita-ingredientes">
                        <div className="receita-preparo-titulo">MODO DE PREPARO:</div>    
                        <br />             
                        <ul class="receita-passos">
                            <li>Bolo: prepare a mistura DONA BENTA conforme indicado na embalagem. Asse utilizando forma redonda com furo no meio.</li>
                            <li>Cobertura: esfarele a paçoca e separe 3 colheres (sopa) para decorar. Em uma panela, misture a paçoca com o leite condensado e leve ao fogo médio, mexendo sempre deixe até soltar do fundo, ponde de brigadeiro mole.</li>
                            <li>3 colheres (sopa) de margarina</li>
                            <li>Cubra o bolo e sirva morno.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
