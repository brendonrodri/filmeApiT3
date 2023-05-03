import React from "react"
/* import {Link} from "react-router-dom"
 */
export default function Header (){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                      <a href="#main">Inicio</a>
                    </li>
                    <li>
                       <a href="#filmes"> Filmes </a>
                    </li>
                    <li>
                        <a href="#series"> Series </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}