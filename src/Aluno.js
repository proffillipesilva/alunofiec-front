import React from 'react'
import PropTypes from 'prop-types'

const Aluno = props => {
    return (
        <div className="card">
            <img style={{width: 150}} className="card-img-top" src={"http://localhost:8080/images/" + props.profileImage}  alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title">{props.nome}</h4>
                <p className="card-text">{props.curso}</p>
            </div>
            
        </div>
    )
}

Aluno.propTypes = {

}

export default Aluno
