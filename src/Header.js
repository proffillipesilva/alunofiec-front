import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
       <a className="navbar-brand" href="#t">Navbar</a>
       <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
           aria-expanded="false" aria-label="Toggle navigation"></button>
       <div className="collapse navbar-collapse" id="collapsibleNavId">
           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
               <li className="nav-item active">
                   <Link to={"/alunos"}><a className="nav-link" href="#t">Home</a></Link>
               </li>
               <li className="nav-item">
                   <Link to={"/edit-alunos"}><a className="nav-link"  href="#t">Editar Alunos</a></Link>
               </li>
               <li className="nav-item">
                   <Link to={"/aluno-form"}><a className="nav-link" href="#t">Criar </a></Link>
               </li>
               </ul>
               
          
       </div>
   </nav>
   
  )
}

export default Header
