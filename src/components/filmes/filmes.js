import { useState, useEffect } from "react"
import * as S from "../style"
import axios from 'axios'
import Lupa from './image.png'


export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    const [filtrados, setFiltrados] = useState([])
    const [input, setInput] = useState('')
    const [mode, setMode] = useState(false)

    useEffect(() => {
        getFilms()
        filtrar()
    }, [input, filtrados, filmes])

    const getFilms = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)
            console.log(resposta)
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }

    const filtrar = () => {
        const filmesFiltrados = filmes.filter(item => {
            if(item.title.toLowerCase().includes(input.toLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(filmesFiltrados)
    }

    return (
        <S.Container id="filmes">
            <S.BoxTitle>
                <h2>Olá, eu sou a Filmes</h2>
                <div>
                    <img onClick={() => {setMode(!mode)}} src={Lupa} alt='imagem de lupa' />
                    <S.Caixa show={mode === false ? 'none' : 'initial'} value={input} onChange={(e) => {setInput(e.target.value)}}/>
                   
                </div>
            </S.BoxTitle>
            {filtrados.map((item, id )=> (
                <S.BoxFilms key={id}>
                    <img src={item.image} alt={item.title} />]
                    <h3>Name:{item.title}</h3>
                </S.BoxFilms>
            ))}
        </S.Container>
    )
}