import { useParams } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function ChooseSection () {

    const { filmeId } = useParams();
    const [movie,setMovie] = useState({});
    const [error, setError] = useState(false);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
    
        promise.then(response => {
            setMovie(response.data)
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
                <h3>Quinta feira - 24/06/2021</h3>
                <div className="botoes">
                    <button className="hora1"><h4>15:00</h4></button>
                    <button className="hora2"><h4>19:00</h4></button>
                </div>
                <h3>Sexta feira - 25/06/2021</h3>
                <div className="botoes">
                    <button className="hora1"><h4>15:00</h4></button>
                    <button className="hora2"><h4>19:00</h4></button>
                </div>
            </div>
            <div className="barraInferior">
                <div className="moldura2">
                    <div className="movie2">
                        <img src={movie.posterURL} class="movie2"/>
                    </div>
                </div>
                <h5>{movie.title}</h5>
            </div>
        </>
    )
}