import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div id="receita-topo">
        <div className="receita-titulo">
            <div id="receita-data">30 de novembro de 2017</div>
            <div id="receita-titulo">BOLO PAÇOCA COM COBERTURA CREMOSA</div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <img src={imgReceita} className="img-receita" alt="Imagem Receita" />
            </div>
            <div className="col-md-6">
                <div id="receita-ingredientes-icones">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <img src={imgTime} className="img-icones-receita" alt="Imagem Receita" />
                            </div>
                            <div className="col-md-6">
                                <div className="inf-receita-titulo">Tempo de <br /> Preparo</div>
                                <div className="inf-receita-subtitulo">30 min</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <img src={imgYield} className="img-icones-receita" alt="Imagem Receita" />
                            </div>
                                <div className="col-md-6">
                                <div className="inf-receita-titulo">Rendimento</div>
                                <div className="inf-receita-subtitulo">14 porções</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <img src={imgPrint} className="img-icones-receita" alt="Imagem Receita" />
                            </div>
                                <div className="col-md-6">
                                <div className="inf-receita-titulo"><u>Imprimir<br /> Receita</u></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <div className="receita-ingredientes">
                    <div className="receita-preparo-titulo">INGREDIENTES:</div>
                    <div id="receita-passo-inicial">1 embalagem de <b>MISTURA PARA BOLO DONA BENTA SABOR PAÇOCA</b></div>                    
                    <ul class="receita-passos">
                        <li>150 ml de leite</li>
                        <li>3 ovos</li>
                        <li>3 colheres (sopa) de margarina</li>
                        <li>Cobertura</li>
                        <li>300g de paçoca</li>
                        <li>1 lata de leite condensado</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
