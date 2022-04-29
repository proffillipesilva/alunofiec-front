import React from 'react'
import { Link } from 'react-router-dom'

import {useSelector } from 'react-redux'



 

const Header = () => {
    const loggedIn = useSelector(state => state.loggedIn)
    return (
        <nav>
            {loggedIn ?
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={"alunos"}><a className="nav-link active" href="#">Alunos</a></Link>
                </li>
                <li className="nav-item">
                <Link to={"criar"}><a className="nav-link" href="#">Criar</a></Link>
                </li>
                <li className="nav-item">
                <Link to={""}><a className="nav-link disabled" href="#">Home</a></Link>
                </li>
            </ul>
            : null }
        </nav>
    )
}

export default Header
