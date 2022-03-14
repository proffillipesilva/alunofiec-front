import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default Header
