import React, {useState, useEffect} from "react"
import axios from "axios"
import Carousel from "react-elastic-carousel"

export default function CarouselComponent (){

    const [filmes, setFilmes] = useState([])
    useEffect(()=>{
        getApi()
    },[filmes])
   
    const getApi = async () =>{
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then((resposta)=>{
            const Api = resposta.data.results.map((item)=>{
                return{
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(Api)
            console.log(filmes)
        })
   }
    return (
        <Carousel 
            enableAutoPlay 
            autoPlaySpeed={3000}
            itemsToScroll={4}
            itemsToShow={4}
            itemPadding={[50, 10]}
        >   
            
            {filmes.map((item)=>(
                <div>
                    <img src={item.image} alt={item.title} style={{width: '85%'}} />
                    <h2>{item.title}</h2>
                </div>
            ))}

        </Carousel>
    )
}