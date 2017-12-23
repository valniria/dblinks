import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
    <div id="box-vermelho">
      <div id="box-novidades">
          <div className="box-elements">
          <div className="col-md-4">
            <div className="titulo-box">Receba nossas novidades.</div>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Digite seu E-mail" />
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-default botao-box">Inscreva-se</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
