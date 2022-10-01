import  React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./Trendingog.css";
import "../styles.css";



// const netflixOg=`https://api.themoviedb.org/3/discover/tv/?api_key=92bb681c106bb0217e7248d7388420ec&with_network=123`

const myImageUrl="https://image.tmdb.org/t/p/original"

const trendingNowURL="https://api.themoviedb.org/3/trending/all/week?with_networks=213&api_key=92bb681c106bb0217e7248d7388420ec&language=en-US"



function TrendingNow() {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(trendingNowURL)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    return(
        <div>
            <h1> Trending Now</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="trendingOgdiv">
                    <img src={myImageUrl+imageName}  className="trendingOgimg"/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default TrendingNow;