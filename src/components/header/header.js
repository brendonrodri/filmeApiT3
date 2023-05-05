import React from "react"
import styled from "styled-components"

const Container = styled.header`
    position:fixed;
    width:100%;
    height:10vh;
    background-color: rgba(108,122,137 /1);
    backdrop-filter: blur(15px);

    ul{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        height:10vh;
        
    }

    a{
        color:white;
        font-size:1.3rem;
    }
`

export default function Header (){
    return(
        <Container>
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
        </Container>
    )
}