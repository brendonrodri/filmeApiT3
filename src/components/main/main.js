import { useState, useEffect } from "react"
import * as S from "../style"
import axios from 'axios';



export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilms()
    })

    const getFilms = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(prevState => prevState = filmes.slice(0, 1))
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }


    return (
        <S.ContainerMain background={fundo.map(item => item.poster)} id="main">

            {fundo.map(item => (
                <div>
                    <h2>Name: {item.title}</h2>
                    <h2>Lançamento: {item.release_date}</h2>
                    <h2>Avaliação: {item.vote_average}</h2>
                    <h2>sinopse: {item.overview}</h2>
                </div>
            ))}


        </S.ContainerMain >
    )
}