import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Seat from "./Seat"

export default function ChooseSeats () {

    const [seats,setSeats] = useState([]);

    useEffect (() => {

        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/1/seats');

        promise.then((response) => {
            setSeats(response.data)
        })
        
    },[])

    return (
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="frase">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className="assentos">
                {seats.map(seat => <Seat number={seat.id}/>)}
            </div>
            <div className="status">
                <div className="selecionado">
                    <div className="bolinhaSelecionado"></div>
                    <h7>Selecionado</h7>
                </div>
                <div className="disponivel">
                    <div className="bolinhaDisponivel"></div>
                    <h7>Disponível</h7>
                </div>
                <div className="indisponivel">
                    <div className="bolinhaIndisponivel"></div>
                    <h7>Indisponível</h7>
                </div>
            </div>
            <div className="cadastrar">
                <div className="nome">
                    <h8>Nome do comprador:</h8>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div className="cpf">
                    <h8>Cpf do comprador:</h8>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
                <button className="reservar"><h9>Reservar assento(a)</h9></button>
            </div>
            <div className="barraInferior">
                <div className="moldura2">
                    <div className="movie2">
                        cxcxcx
                    </div>
                </div>
                <h5>cxcxcx</h5>
            </div>
        </>
    )
}