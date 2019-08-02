import React from 'react';
import Imagen from './Imagen';
import Pagina from './Pagina';

class Resultado extends React.Component{
   MostrarImagenes = () =>{
       const imagenes = this.props.imagenes;

       return(
           <>
        <div className="col-12 p-5 row">
        {imagenes.map(
            imagen => (
                <Imagen key={imagen.id} imagen={imagen}/>
            )
        )}
        </div>
        </>
     )
   }
    render(){
        <>{this.MostrarImagenes()}</>
    }

}

export default Resultado
