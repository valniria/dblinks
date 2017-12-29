import React, { Component } from 'react';
import sorvete from '../images/sorvete-caseiro.jpg';
import pave from '../images/pave-panetone.jpg';
import macarrao from '../images/macarrao-italiana.jpg';
import longuette from '../images/longuette-crocante.jpg';
import arroz from '../images/arroz-forno.jpg';
import churros from '../images/sanduiche-churros.jpg';
import '../styles/App.css';
import '../styles/style.css';

class App extends Component {
  render() {
    return (
    <div className="receita-meio">
        <h3>VEJA TAMBÉM</h3>
         <div className="row"> 
            
            
        <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={sorvete} className="img-ver-tambem" alt="Sorvete Caseiro" />
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Sorvete Caseiro</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={pave} className="img-ver-tambem" alt="Pave Panetone" />
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Pave Panetone</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={macarrao} className="img-ver-tambem" alt="Macarrão Italiano" />
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Macarrão Italiano</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={longuette} className="img-ver-tambem" alt="" />
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Longuette Crocante</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={arroz} className="img-ver-tambem" alt="Arroz de Forno" />
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Arroz de Forno</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-12" data-aos="fade-up">
          <div data-aos="fade-up">
					  <div className="tema-member">
						<div className="team-thumbnail">
						  <img src={churros} className="img-ver-tambem" alt="Sanduiche de Churros" />  
						  <div className="overlay">
							<div className="social-media">
							  <button type="button" className="btn btn-default botao"><b>Ver receita</b></button>
							</div>
							<div className="info">
							  <h5>Sanduiche de Churros</h5>
							</div>						
						  </div>
					  </div>
					</div>
          </div>
        </div>   
      </div>
    </div>
    );
  }
}

export default App;
