import  React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./main.css";




const netflixOg=`https://api.themoviedb.org/3/discover/tv/?api_key=92bb681c106bb0217e7248d7388420ec&with_network=123`

const myImageUrl="https://image.tmdb.org/t/p/original"

const mainurl="https://api.themoviedb.org/3/trending/all/week?with_networks=213&api_key=92bb681c106bb0217e7248d7388420ec&language=en-US"



function Main() {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get( mainurl)
            const result=output.data.results

            //we multiply by 20 as math.random generates any number between 0-1,
            //then 0.56*20~10 so that number will be displlayed.
            setAllMovies(result[Math.floor(Math.random() * 20)])
        };

        fetchData()

    },[]);


    return(
        <div>
            <img src={myImageUrl+ allMovies.backdrop_path} className="mainimg" />  
            <h1 class="mainh1">{allMovies.title}</h1>
            <p>{allMovies.overview}</p>
        </div>
    )
}

export default Main;