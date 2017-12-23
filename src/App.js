import React, { Component } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ReceitaTopo from './pages/Receita-Topo';
import ReceitaPreparo from './pages/Receita-Preparo';
import ReceitaFormulario from './pages/Receita-Formulario';
import VejaTambem from './pages/Veja-Tambem';
import './styles/bootstrap/css/bootstrap.min.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ReceitaTopo />
        <ReceitaPreparo />
        <ReceitaFormulario />
        <VejaTambem />
        <Footer />
      </div>
    );
  }
}

export default App;
