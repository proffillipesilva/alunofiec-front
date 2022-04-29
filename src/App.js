import React, {useState} from 'react'
import Aluno from './Aluno'
import Home from './Home'
import AlunoForm from './AlunoForm'
import Alunos from './Alunos'
import Header from './Header'
import { Routes, Route, Outlet } from 'react-router'
import EditAlunos from './EditAlunos'


const App = () => {


  return (
    <>
    <header>
      <Header />
    </header>
    <main className="container">
      <Routes>
        <Route index element={<EditAlunos />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/criar"  element={<AlunoForm />} />
        <Route path="/editar/:id"  element={<AlunoForm />} />
      </Routes>
      <Outlet />
    </main> 
    </>
  )
}

export default App
