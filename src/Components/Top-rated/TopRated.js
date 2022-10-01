import React,{useState, useEffect} from 'react';
import Axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"; 
import "./toprated.css";
import "../styles.css"




const topratedOg=`https://api.themoviedb.org/3//discover/movie/top_rated?api_key=92bb681c106bb0217e7248d7388420ec&language=en-US&page=1`

// const myVideourl="https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US"

const myImageUrl="https://image.tmdb.org/t/p/original"


function TopRated() {
    const [allMovies, setAllMovies]=useState([])
    const [id,setId]=useState("")

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(topratedOg)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);


    function playTheTrailer(data){
        // we need to get the videoID of the movie we clicked,
        // Youtbe will try to get the video id of the particular video.
        console.log(data)
          console.log(data.title);
          console.log(data.video);
        // movieTrailer("Conjuring");
        movieTrailer(data.name || "")
        .then(function(output)
        {          //output will store the  link fo the video that is to be played.

    const searchid=new URLSearchParams(new URL(output).search)    //here neew URL will search the link and URLSearchParams will search all the parametrs.
            // const movievideoId=;
            setId(searchid.get("v"));
            // console.log(search.get("v"));

        })
        // .catch(function(error){
        //   console.log(error);
        // });
       
    }

    const myOptions={
        height:"600px",
        width:"100%"
    }




    return(
        <div>
            <h1>Top Rated</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="toprateddiv">
                    <img src={myImageUrl+imageName}  className="topratedimg"  onClick={function(){
                        playTheTrailer(i)
                    }}/>
                    </div>
                )
            })}
            </div>

            {id && <Youtube videoId={id}  opts={myOptions}/>}

        </div>
    )

}

export default TopRated;