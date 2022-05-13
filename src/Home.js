import React, {useState} from 'react'
import QRCode from "react-qr-code";

const Home = props => {
    // O primeiro argumento eh a variavel
    // o segundo argumento eh o nome do metodo que a altera
    const [meuValor, setMeuValor] = useState({"materiaId": "45645464", "numAula": 2})
    
    return (
        
        <div> 
        <QRCode value={ JSON.stringify(meuValor) } />
        </div>
    )


    
}

export default Home
