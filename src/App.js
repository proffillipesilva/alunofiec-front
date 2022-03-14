import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import AlunoForm from './AlunoForm'
import Alunos from './Alunos'
import EditAlunos from './EditAlunos'
import Header from './Header'


const App = () => {
 

  return (
    <>
     <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Alunos />} />
        <Route path='/edit-alunos' element={<EditAlunos />} />
        <Route path='/aluno-form' element={<AlunoForm />} />
        <Route path='/aluno-form/:id' element={<AlunoForm />} />
      </Routes>
    
   
    <Outlet />
    </div>
    </>
  )
}

export default App
