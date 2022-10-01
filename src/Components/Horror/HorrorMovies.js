import React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./horror.css";




const horrorurl=`https://api.themoviedb.org/3"/discover/movie?api_key=92bb681c106bb0217e7248d7388420ec&with_genres=27`

const myImageUrl="https://image.tmdb.org/t/p/original"




function HorrorMovies() {

    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(horrorurl)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    return(
        <div>
            <h1>Horror</h1>
            <div className="horrorall">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="horrordiv">
                    <img src={myImageUrl+imageName}  className="horrorimg"/>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default HorrorMovies;