import React from 'react'
import Aluno from './Aluno'
import Home from './Home'
import AlunoForm from './AlunoForm'
import Alunos from './Alunos'
import Header from './Header'
import { Routes, Route, Outlet } from 'react-router'
import EditAlunos from './EditAlunos'
import Login from './Login'

import {useSelector } from 'react-redux'


const App = () => {

  const loggedIn = useSelector(state => state.loggedIn)

  return (
    <>
    <header>
      <Header />
    </header>
    <main className="container">
      <Routes>
        {loggedIn ? 
        <>
        <Route index element={<EditAlunos />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/criar"  element={<AlunoForm />} />
        <Route path="/editar/:id"  element={<AlunoForm />} />
        </>
        : 
        <Route path="/*"  element={<Login />} />
        }
      </Routes>
      <Outlet />
      
    </main> 
    </>
  )
}

export default App
