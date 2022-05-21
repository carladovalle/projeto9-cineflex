export default function Movie ({diaSemana, data, sessoes}) {
    return (
        <>
            <h3>{diaSemana}- {data} </h3>
            <div className="botoes">
                {sessoes.map(horas => <button className="hora"><h4>{horas.name}</h4></button> )}
            </div>
        </>
    )
}