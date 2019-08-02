import React from 'react';
import Buscador from './components/Buscador.js';
import Resultado from './components/Resultado.js';

/* import './App.css'; */

class App extends React.Component {
  state =  {
    termino:'',
  }
  BuscarDatos = (termino)=>{
    this.setState({
      termino:termino,
      imagenes:[]
    })
  }
  ConsultarAPI = () =>{
    const termino = this.state.termino;
    const url= `https://pixabay.com/api/?key=13200780-bf3e307f4f3ad8fb7e0971ba0&q=${termino}&per_page=10`;
    fetch(url)
    .then(response=>response.json())
    .then(response=>this.setState({imagenes:Resultado.hits}))
    .success().error() 
  }
  render(){
    return (
   
    <div className="container">
     <br/>
      <header className="jumbotron">
        <h1 className="lead text-center">Buscador de Imagenes</h1>
        <Buscador/>
         {this.termino}
      </header>
      <main className="justify-content-center">
      <Resultado/>
      </main>
    </div>

      );
  }
  
}

export default App;
