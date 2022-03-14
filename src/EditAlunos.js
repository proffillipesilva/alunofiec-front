import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
import { faPencil, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from 'react-bootstrap'

import FeedbackModal from './FeedbackModal'




const EditAlunos = () => {

  const alunosUrl = "http://localhost:8080/alunos";
  
  const [aluno, setaluno] = useState(null)
  const [alunos, setalunos] = useState(null)
  const [show, setShow] = useState(false);
  const [ok, setok] = useState(false)
  const [feedbackModal, setFeedbackModal] = useState(false)
  
  const handleClose = () => setShow(false);
  const handleShow = (aluno) => {
    setShow(true);
    setaluno(aluno);
  }

  const baixaalunos = useCallback(() => {
    return fetch(alunosUrl)
    .then(response => response.json())
    .then(data => setalunos(data))
  },[]);

  const deletarAluno = (id) => {
    fetch(alunosUrl + '/' + id, {
      method: 'DELETE'
    }).then(response => {
      //alert('Aluno apagado com sucesso!');
      baixaalunos();
      setShow(false);
      setok(true)
      setFeedbackModal(true);
      setTimeout(() => setFeedbackModal(false), 1700)
    })
  };

  useEffect(() => {
    baixaalunos()
  },[baixaalunos])

  return (
    <div className="container">
    
    <table className='table'>
      <thead>
      <tr>
          <td>RM</td>
          <td>NOME</td>
          <td>CURSO</td>
          <td>EDIT</td>
          <td>DELETE</td>
        </tr>
      </thead>
      <tbody>
        {alunos != null ? alunos.map(aluno => 
        (
        <tr key={aluno.id}>
          <td>{aluno.rm}</td>
          <td>{aluno.nome}</td>
          <td>{aluno.curso}</td>
          <td><Link to={"/aluno-form/"+aluno.id} ><FontAwesomeIcon icon={faPencil} />
          
</Link></td>
          <td><button onClick={() => handleShow(aluno)}><FontAwesomeIcon icon={faClose} color="red" /></button></td>
        </tr>
        )
        
         ) : 
         null}
         </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{aluno?aluno.rm:null}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deletar {aluno?aluno.nome:null}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => deletarAluno(aluno.id)}>
            Confirmar Deleção
          </Button>
        </Modal.Footer>
      </Modal>

     <FeedbackModal show={feedbackModal} isOk={ok} />
      
        

    


      
    </div>
  )
}

export default EditAlunos
