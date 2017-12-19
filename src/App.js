import React, { Component } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
