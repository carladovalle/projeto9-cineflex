import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Movie ({source}) {
    return (
        <div className="movie">
            <div className="moldura">
                <img src={source} className="movie"/>
            </div>
        </div>
    );
}

export default function Init () {

    const [movies,setMovies] = useState([]);

    useEffect (() => {

        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    
        promise.then(response => {
            setMovies(response.data)
        })

    })

    return (
        <>
            <div className="topo">
                <h1>CINEFLEX</h1> 
            </div>
            <div className="main">
                <div className="frase">
                    <h2>Selecione o filme</h2>
                </div>
                <div className="catalogo">
                    {movies.map(movie => <Movie source={movie.posterURL} />)}
                </div>
            </div>
        </>

    )
}