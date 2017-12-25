import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import ReceitaPreparo from '../pages/Receita-Preparo';
import ReceitaFormulario from '../pages/Receita-Formulario';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div id="receita-topo">
        <div className="receita-titulo">
            <div id="receita-data">30 de novembro de 2017</div>
            <div id="receita-titulo">BOLO PAÇOCA COM COBERTURA CREMOSA</div>
        </div>
        <div className="col-md-12">
            <div className="col-md-6">
                <img src={imgReceita} className="img-receita" alt="Imagem Receita" />
                <div id="compartilhe">
                    <div className="col-sm-3">
                    <h4><b>Compartilhe</b></h4>
                    </div>
                    <div className="col-sm-9">
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
                <hr className="linha" />
                <br />
                <div className="receita-ingredientes">
                    <div className="receita-preparo-titulo">INGREDIENTES:</div>
                    <div id="receita-passo-inicial">1 embalagem de <b>MISTURA PARA BOLO DONA BENTA SABOR PAÇOCA</b></div>                    
                    <ul className="receita-passos">
                        <li>150 ml de leite</li>
                        <li>3 ovos</li>
                        <li>3 colheres (sopa) de margarina</li>
                        <li>Cobertura</li>
                        <li>300g de paçoca</li>
                        <li>1 lata de leite condensado</li>
                    </ul>
                </div>
                <ReceitaPreparo />
                <ReceitaFormulario />
            </div>
        </div>
    </div>
    );
  }
}

export default App;
