import { Link } from 'react-router-dom';

export default function Movie ({diaSemana, data, sessoes}) {
    return (
        <>
            <h3>{diaSemana}- {data} </h3>
            <div className="botoes">
                {sessoes.map(horas => <Link to={`/assentos/${horas.id}`} key={horas.id}><button className="hora"><h4>{horas.name}</h4></button></Link> )}
            </div>
        </>
    )
}