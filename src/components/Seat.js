import React from "react";
import { useState } from "react";

export default function Seats ({livre, numero, assentos}) {

    const [reserva,setReserva] = useState(livre)

    function selecaoAssento () {
        if (reserva === false) {
            alert("Este assento não está disponível")
        } else if (reserva === 'selecionado') {
            setReserva(true);
            assentos[numero-1].isAvailable = true
        } else {
            setReserva('selecionado')
            assentos[numero-1].isAvailable = 'selecionado'
        }
    }

    return (
        <div className="seat">
            <div className={`assento ${reserva}`} onClick={() => selecaoAssento(reserva,numero)}>
                {numero}
            </div>
        </div>
    )
}