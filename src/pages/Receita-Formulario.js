import React, { Component } from 'react';
import imgReceita from '../images/bolo-pacoca.jpg';
import imgPrint from '../images/print.png';
import imgTime from '../images/time.png';
import imgYield from '../images/yield.png';
import '../styles/App.css';
import ToggleDisplay from 'react-toggle-display';


class App extends Component {
  constructor() {
    super();
    this.state = { show: false, text: "hidden" };
  }
 
  handleClick() {
    this.setState({
      show: !this.state.show,
      text: ""

    });
  }

  render() {
    return (
        <div className="receita-ingredientes">
            <br />
            <div id="receita-passo-inicial">Enviada por: <i>DONA BENTA</i></div>
            <div className="botao-header">
                <button type="button" className="btn btn-default botao" onClick={ () => this.handleClick() }>
                <b>ENVIAR RECEITA POR E-MAIL</b></button>
            </div>
            <div className="receita-formulario">
                <ToggleDisplay show={this.state.show}>
                    <form className={this.state.text}>
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
                </ToggleDisplay>
            </div>
        </div>
    );
  }
}

export default App;
