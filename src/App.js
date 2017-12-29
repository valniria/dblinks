import React, { Component } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ReceitaTopo from './pages/Receita-Topo';
import VejaTambem from './pages/Veja-Tambem';

import './styles/bootstrap/css/bootstrap.min.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/App.css';
import './styles/App-mobile.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ReceitaTopo />
        <VejaTambem />
        <Footer />
      </div>
    );
  }
}

export default App;
