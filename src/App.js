/* import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Filmes from "./components/filmes/filmes"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series"

export default function App (){
  return (
    <>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series/>} />
        </Routes>

      </BrowserRouter>
    </>
    
  )
}

 */

import React from "react"
import Filmes from "./components/filmes/filmes"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series"
import { createGlobalStyle } from "styled-components"
import CarouselComponent from "./components/carousel/carousel"
import NavComponent from "./components/NavBar/navbar"


const GlobalStyles = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:  none;
    font-family:Arial, Helvetica, sans-serif;
    scroll-behavior:smooth;
  }

`

export default function App (){
  return(
    <>
      <Header />
      <Main />
      <Filmes />
      <NavComponent />
      <CarouselComponent />
      <Series />
      <GlobalStyles />
    </>
  )
}