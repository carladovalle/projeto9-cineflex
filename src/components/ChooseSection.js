import { useParams } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import Movie from "./Movie"

export default function ChooseSection () {

    const { filmeId } = useParams();
    const [movie,setMovie] = useState([]);
    const [movieFooter,setMovieFooter] = useState([]);
    const [error, setError] = useState(false);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
    
        promise.then(response => {
            console.log(response.data)
            setMovie(response.data.days)
            setMovieFooter(response.data)
        })
        .catch(res => {
            setError(true);
        })
    
    },[])

    return (
        <>
            <div className="topo">
                <h1>CINEFLEX</h1> 
            </div>
            <div className="frase">
                <h2>Selecione o horário</h2>
            </div>
            <div className="corpo">
                {movie.map(info => 
                    <Movie
                        diaSemana = {info.weekday}
                        data = {info.date}
                        sessoes = {info.showtimes}
                        key = {info.id}
                    />
                )}
            </div>
            <div className="barraInferior">
                <div className="moldura2">
                    <div className="movie2">
                        <img src={movieFooter.posterURL} className="movie2"/>
                    </div>
                </div>
                <h5>{movieFooter.title}</h5>
            </div>
        </>
    )
}