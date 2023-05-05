import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
    background-color: darkcyan;
  
`

export const BoxTitle = styled.div`
width:100%;

h2{
    font-size:1.2rem;
    text-align:center;
}
`

export const BoxFilms = styled.section`
    width:22%;
    img{
        width:80%;;
    }
`


export const ContainerMain = styled.main`
    background-image: url(${props => props.background});
    background-size:100% 100%;
    background-repeat:no-repeat;
    height:100vh;
    color:white;
    div{
        border:solid;
    }

`