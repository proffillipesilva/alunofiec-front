import React, {useState, useEffect} from 'react'
import Aluno from './Aluno';
import Pagination from 'react-bootstrap/Pagination'
import myaxios from './myaxios'

const Alunos = () => {
    const [alunos, setalunos] = useState(null);
    const [curPage, setCurPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const baixaAlunos = () => {
        myaxios.get(`/alunos?page=${curPage}&pageSize=2`)
        .then(response => {
            setalunos(response.data.alunos);
            setTotalPages(response.data.totalPages)
        });
    }

    // A lista vazia marca que o que estiver dentro do useEffect vai executar quando a página acabar de montar
    useEffect(() => {
        baixaAlunos();
    }, [])
    
    let items = [];
    for (let number = 0; number < totalPages; number++) {
      items.push(
        <Pagination.Item onClick={() => {
            setCurPage(number)
            baixaAlunos();
        }} key={number} active={number === curPage}>
          {number+1}
        </Pagination.Item>,
      );
    }

    return (
        <div>
            {alunos != null ? alunos.map(aluno => (
                <Aluno rm={aluno.rm} nome={aluno.nome} 
                curso={aluno.curso}
                profileImage={aluno.profileImage}  />
            )) : "Nenhum aluno encontrado" }
<Pagination>
            {items}
            </Pagination>
        </div>
        
    )
}

export default Alunos
