import { useParams } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Informacoes ({day, dayNumber, hour}) {
    return (
        <div>
            <h3>{day} - {dayNumber}</h3>
            <div className="botoes">
                <button className="hora1"><h4>{hour}</h4></button>
            </div>
        </div>
    )
}

export default function ChooseSection () {

    const { filmeId } = useParams();
    const [movie,setMovie] = useState([]);
    const [error, setError] = useState(false);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
    
        promise.then(response => {
            console.log(response.data)
            setMovie([...response.data])
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
                {movie.map((item,index) => <Informacoes key={index} day={item.days.weekday} dayNumber={item.days.date} hour={item.days.name} />)}
            </div>
            <div className="barraInferior">
                <div className="moldura2">
                    <div className="movie2">
                        <img src={movie.posterURL} className="movie2"/>
                    </div>
                </div>
                <h5>{movie.title} {movie.weekday}</h5>
            </div>
        </>
    )
}