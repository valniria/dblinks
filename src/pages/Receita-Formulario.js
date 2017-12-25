import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="receita-ingredientes">
            <br />
            <div id="receita-passo-inicial">Enviada por: <i>DONA BENTA</i></div>
            <div className="botao-header">
                <button type="button" className="btn btn-default botao"><b>ENVIAR RECEITA POR E-MAIL</b></button>
            </div>
            <div className="receita-formulario">
                <form>
                        <div className="form-group col-md-6">
                            <label>E-mail do destinatário: *</label>
                        <input type="email" className="form-control" placeholder="E-mail do destinatário" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Seu Nome: *</label>
                            <input type="text" className="form-control" placeholder="Digite seu nome" />
                        </div>
                    <div className="form-group">
                        <label >Mensagem</label><br/>
                        <textarea  className="form-control"  placeholder="Sua mensagem..."></textarea>
                    </div>
                    <button type="button" className="btn btn-default botao"><b>ENVIAR</b></button>
                </form>
            </div>
        </div>
    );
  }
}

export default App;
