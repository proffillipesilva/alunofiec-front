import React, {useState} from 'react'
import Aluno from './Aluno'
import Home from './Home'


const App = () => {
  const var1 = "loga" // nao pode alterar mais
  let var2 = "kiro"  // alterar de novo

 
  const url = "http://localhost:8080/alunos/exemplo";
  const alunosUrl = "http://localhost:8080/alunos";
  
  const [aluno, setaluno] = useState(null)
  const [alunos, setalunos] = useState(null)
  
  const baixaaluno = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => setaluno(data))
  }

  const baixaalunos = () => {
    fetch(alunosUrl)
    .then(response => response.json())
    .then(data => setalunos(data))
  }

  return (
    <div className="container">
      <Home> 
        {alunos != null ? alunos.map(aluno => 
        <Aluno nome={aluno.nome}  curso={aluno.curso}  
         profileImage={aluno.profileImage}  />
         ) : 
         null}


      </Home>
      {aluno != null ? <Aluno nome={aluno.nome}
       curso={aluno.curso} 
       profileImage={aluno.profileImage} 
       /> : null}
      <button onClick={baixaaluno} >Carregar aluno</button>
      <button onClick={baixaalunos} >Carregar todos os alunos</button>
    </div>
  )
}

export default App
