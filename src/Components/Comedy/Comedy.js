import React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./comedy.css";
import "../styles.css";




const comedyurl=`https://api.themoviedb.org/3/discover/tv/?api_key=92bb681c106bb0217e7248d7388420ec&with_network=123`

const myImageUrl="https://image.tmdb.org/t/p/original"




function Comedy() {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(comedyurl)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    return(
        <div>
            <h1>Comedy</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="comedydiv">
                    <img src={myImageUrl+imageName}  className="comedyimg"/>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default Comedy;