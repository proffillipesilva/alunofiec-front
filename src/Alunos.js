import React, {useState, useEffect} from 'react'
import Aluno from './Aluno';

const Alunos = () => {
    const [alunos, setalunos] = useState(null);

    const baixaAlunos = () => {
        fetch("http://localhost:8080/alunos")
        .then(response => response.json())
        .then(data => setalunos(data));
    }

    // A lista vazia marca que o que estiver dentro do useEffect vai executar quando a página acabar de montar
    useEffect(() => {
        baixaAlunos();
    }, [])


    return (
        <div>
            {alunos != null ? alunos.map(aluno => (
                <Aluno rm={aluno.rm} nome={aluno.nome} 
                curso={aluno.curso}
                profileImage={aluno.profileImage}  />
            )) : "Nenhum aluno encontrado" }
        </div>
    )
}

export default Alunos
