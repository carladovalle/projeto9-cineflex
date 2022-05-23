import React from "react";
import { useState } from "react";

export default function Seats ({livre, numero, seats}) {

    const [reserva,setReserva] = useState(livre)

    function selecaoAssento () {
        if (reserva === false) {
            alert("Este assento não está disponível")
        } else if (reserva === 'selecionado') {
            setReserva(true);
            seats[numero-1].isAvailable = true;
        } else {
            setReserva('selecionado')
            seats[numero-1].isAvailable = 'selecionado'
        }
    }

    return (
            <div className={`assento ${reserva}`} onClick={() => selecaoAssento(reserva,numero)}>
                {numero}
            </div>
    )
}