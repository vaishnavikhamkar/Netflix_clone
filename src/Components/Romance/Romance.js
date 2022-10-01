import React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./romance.css";




const romanceurl=`https://api.themoviedb.org/3/discover/movie?api_key=92bb681c106bb0217e7248d7388420ec&with_genres=10749`

const myImageUrl="https://image.tmdb.org/t/p/original"




function Romance() {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(romanceurl)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    return(
        <div>
            <h1>Romance</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="romancediv">
                    <img src={myImageUrl+imageName}  className="romanceimg"/>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default Romance;