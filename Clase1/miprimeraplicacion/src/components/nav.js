import React from 'react';

class NavClass extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                    <a href="galeria.html">Galeria</a>
                    </li>
                    <li>
                    <a href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </nav> 
        )
    }
}
export default NavClass