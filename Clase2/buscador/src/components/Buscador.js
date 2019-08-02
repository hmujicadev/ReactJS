import React from 'react';

class Buscador extends React.Component{
    BusquedaRef = React.createRef()
    HandleDatos = (e)=>{
        const termino=this.BusquedaRef.current.value 
        e.preventDefault();
        this.props.BuscarDatos(termino)
    }
    render(){
        return(
            <form onSubmit={this.HandleDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input className="form-control form-control-l" 
                        type="text" placeholder="Busca una imagen"
                        ref={this.BusquedaRef}/>
                    </div>
                   <  div className="form-group col-md-4">
                        <input className="form-control form-control-l" 
                        type="submit" value="Buscar"/>
                    </div>
                </div>
            </form>
        )
    }

}

export default Buscador
