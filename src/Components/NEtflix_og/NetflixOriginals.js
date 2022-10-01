import  React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./Netflixog.css";
import "../styles.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"; 

//movie trailer willl also help to get the Video ID of the particular movie atahat has been clicked.

const netflixOg=`https://api.themoviedb.org/3/discover/tv/?api_key=92bb681c106bb0217e7248d7388420ec&with_network=123&append_to_response=videos`

const myImageUrl="https://image.tmdb.org/t/p/original"

function NetflixOriginals()
{
    const [allMovies, setAllMovies]=useState([])
    const [id, setId]=useState("")
    //we cannot give the id directly to  videoId as it keeps on changing and so
    //we use useState hook. 

    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(netflixOg)
            const result=output.data.results
            setAllMovies(result)
        };

        fetchData()

    },[]);

    function playTheTrailer(data){
        // we need to get the videoID of the movie we clicked,
        // Youtbe will try to get the video id of the particular video.
          console.log(data.name);
          console.log(data);
        // movieTrailer("Conjuring");
        movieTrailer(data.name || "")
        .then(function(output)
        {          //output will store the  link fo the video that is to be played,which will have the videoID.
      
    //here neew URL will search the  link and URLSearchParams will search all the parametrs.

const searchid=new URLSearchParams(new URL(output).search)
    setId(searchid.get("v"))    
      
    // const movievideoId=;
            // setId(searchid.get("v"));
            // console.log(searchid.get(""));

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
            <h1>Netflix Originals</h1>
            <div className="alldiv">
            {allMovies.map(function(i)
            {
                const imageName=i.backdrop_path
                return(
                    <div className="netflixOgdiv">
                    <img src={myImageUrl+imageName}  className="netflixOgimg" onClick={function(){
                        playTheTrailer(i)
                    }}/>
                    </div>
                )
            })}
            </div>

            {/* //   Write the logic to connect React with Youtube */}

            {id && <Youtube videoId={id}  opts={myOptions}/>}

            {/* so whenever id will get a value ,then only play the video */}


        </div>

    )

}

export default NetflixOriginals;