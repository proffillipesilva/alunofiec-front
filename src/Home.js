import React, {useState} from 'react'

const Home = props => {
    // O primeiro argumento eh a variavel
    // o segundo argumento eh o nome do metodo que a altera
    const [meuValor, setMeuValor] = useState("Inicio")

    return (
        <div>
             <h1>Componente Home</h1>
            {meuValor}
            <button onClick={() => setMeuValor("Atualizado")}>Atualiza Estado</button>
            {props.children}
        </div>
    )
}

export default Home
