import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavClass from './nav.js'

class HeaderClass extends React.Component{
    render(){
        return(
            <header className="App-header">
                <img className="App-logo" src={logo} alt="Logo React"></img>
                <h1>Mi primer Aplicaciòn</h1>
                <p>Trabajando con REACT</p>
                <NavClass />
            </header>
        )
    }
}
export default HeaderClass