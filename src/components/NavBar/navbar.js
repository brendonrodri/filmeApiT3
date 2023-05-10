import React from "react"
import styled from "styled-components"

const NavContainer = styled.nav`
    display: flex;
    height: 15vh;
    justify-content: space-around;
    align-items: center;
    background-color: black;
`
const NavUl = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-around;
`
const NavItem = styled.li`
    color: #f2f2f2;
    font-size: 1.3rem;
    :hover{
        cursor: pointer;
        transform: scale(1.1);
        text-decoration: underline;
    }

`
const InputSearch = styled.input`
    width: 20%;
    height: 4vh;
`

export default function NavComponent(){

    return(
        <NavContainer>
            <NavList />
            <InputComponent />

        </NavContainer>
    )

}

const NavList = () =>{
    return(
        <NavUl>
            <NavItem>Ação</NavItem>
            <NavItem>Comédia</NavItem>
            <NavItem>Terror</NavItem>
            <NavItem>Drama</NavItem>
            <NavItem>Suspense</NavItem>
            <NavItem>Animação</NavItem>
        </NavUl>
    )
}

const InputComponent = () =>{
    return <InputSearch />
}