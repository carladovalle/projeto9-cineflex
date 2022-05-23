import { Link, useLocation } from 'react-router-dom';

export default function Success () {

    const { state } = useLocation();

    return (
            <>
                <div className="topo">
                    <h1>CINEFLEX</h1>
                </div>
                <div className="container">
                    <div className="frase">
                        <h10>Pedido feito com sucesso!</h10>
                    </div>
                    <div className="detalhesCompra">
                        <h11>Filmes e séries</h11>
                        <div className="filme">
                            <h12>{state.titulo}</h12>
                            <h12>{state.data} {state.hora}</h12>
                        </div>

                    </div>
                    <div className="detalhesCompra">
                        <h11>Ingressos</h11>
                        {state.numeroAssento.map(assento => 
                        <h12 key={assento} className="infoSucesso">Assento {assento}</h12>
                    )}
                    </div>
                    <div className="detalhesCompra">
                        <h11>Comprador</h11>
                        <div className="detalhes">
                            <h12>Nome: {state.nome}</h12>
                            <h12>CPF: {state.CPF}</h12>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <button className="voltarHome"><h9>Voltar para Home</h9></button>
                    </Link>
                </div>
            </>
        
    )
}