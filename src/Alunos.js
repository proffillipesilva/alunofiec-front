import React, {useState, useEffect} from 'react'
import Aluno from './Aluno'


const Alunos = () => {

  const alunosUrl = "http://localhost:8080/alunos";
  
  const [alunos, setalunos] = useState(null)
  

  const baixaalunos = () => {
    fetch(alunosUrl)
    .then(response => response.json())
    .then(data => setalunos(data))
  }

  useEffect(() => {
    baixaalunos();
  })

  return (
    <div className="container">
    
    
        {alunos != null ? alunos.map(aluno => 
        <Aluno nome={aluno.nome}  curso={aluno.curso}  
         profileImage={aluno.profileImage}  />
         ) : 
         null}


      
    </div>
  )
}

export default Alunos
