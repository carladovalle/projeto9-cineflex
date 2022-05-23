import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import Seat from "./Seat"

export default function ChooseSeats () {

    const [seats,setSeats] = useState([]);
    const [movieFooter,setMovieFooter] = useState([]);
    const [movieFooter2,setMovieFooter2] = useState([]);
    const [movieFooter3,setMovieFooter3] = useState([]);
    const { idSessao } = useParams();
    const [nome,setNome] = useState("");
    const [CPF,setCPF] = useState("");
    let navigate = useNavigate();

    useEffect (() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            setSeats(response.data.seats)
            setMovieFooter(response.data)
            setMovieFooter2(response.data.movie)
            setMovieFooter3(response.data.day)

        })
        
    },[])

    function reservarAssentos() {
        const dadosCliente = {}
        const numeroAssento = []
        const idAssento = []
        seats.filter(assento => assento.isAvailable === 'selecionado')
                .map(assento => {
                    idAssento.push(assento.id)
                    numeroAssento.push(assento.name)
                })
        dadosCliente.name = nome
        dadosCliente.cpf = CPF
        dadosCliente.ids = idAssento
        const envioSucesso = {
            CPF,
            nome,
            numeroAssento,
            titulo: movieFooter2.title,
            hora: movieFooter.name,
            data: movieFooter3.date
        }
        const envio = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dadosCliente)
        envio.then(navigate("/sucesso", {state: envioSucesso}))
    }

    return (
        <>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <div className="frase">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className="assentos">
                {seats.map(assento => 
                    <Seat
                        livre={assento.isAvailable}
                        numero={assento.name}
                        seats={seats}
                        key={assento.id}
                    />
                )}
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
                    <input placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="cpf">
                    <h8>Cpf do comprador:</h8>
                    <input placeholder="Digite seu CPF..." value={CPF} onChange={e => setCPF(e.target.value)}></input>
                </div>
                <button className="reservar" onClick={reservarAssentos}><h9>Reservar assento(a)</h9></button>
            </div>
            <div className="barraInferior">
                <div className="moldura2">
                    <div className="movie2">
                        <img src={movieFooter2.posterURL} className="movie2"/>
                    </div>
                </div>
                <div className="separar">
                    <h5>{movieFooter2.title}</h5>
                    <div className="separar2">
                        <h5>{movieFooter3.weekday} - {movieFooter.name}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}