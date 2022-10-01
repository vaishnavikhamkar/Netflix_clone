import React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./documentary.css";
import "../styles.css"




const documentaryurl=`https://api.themoviedb.org/3/discover/movie?api_key=92bb681c106bb0217e7248d7388420ec&with_genres=99`

const myImageUrl="https://image.tmdb.org/t/p/original"




function Documentary() {
    const [allMovies, setAllMovies]=useState([])

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(documentaryurl)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    return(
        <div>
            <h1>Documentaries</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="documentarydiv">
                    <img src={myImageUrl+imageName}  className="documentaryimg"/>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default Documentary;