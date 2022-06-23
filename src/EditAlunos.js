import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import myaxios from './myaxios'

const EditAlunos = () => {
    const [alunos, setalunos] = useState(null);

    const baixaAlunos = () => {
        myaxios.get("http://localhost:8080/alunos")
        .then(response => setalunos(response.data));
    }

    const deletaAluno = (id) => {
        myaxios.delete("http://localhost:8080/alunos/" + id)
        .then(response => {
            baixaAlunos();
        });
        
    }

    // A lista vazia marca que o que estiver dentro do useEffect vai executar quando a página acabar de montar
    useEffect(() => {
        baixaAlunos();
    }, [])
    return (
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>RM</td>
                        <td>Nome</td>
                        <td>Curso</td>
                        <td>Editar</td>
                        <td>Deletar</td>
                    </tr>
                </thead>
            <tbody>
            {alunos != null ? alunos.map(aluno => (
                <tr>
                    <td>{aluno.rm}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td><Link to={"/editar/"+ aluno.id}>Edit</Link></td>
                    <td><a name="" id="" onClick={() => deletaAluno(aluno.id)} class="btn btn-danger" href="#" role="button">x</a></td>
                </tr>
            )) : null}
            </tbody>
            </table>
        </div>
    )
}

export default EditAlunos
