import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie]= useState([]);
    const getMovies = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return <h1>{movie.title}</h1>
}

export default Detail;