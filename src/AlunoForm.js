import React, {useState, useReducer} from 'react'

const formReducer = (state, action) => {
  switch(action.type){
    case 'ATUALIZA':
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state;
  }
}
const AlunoForm = () => {
    const initialState = { rm: "", nome: "",  curso: "",  profileImage: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({
          type: 'ATUALIZA',
          name: e.target.name,
          value: e.target.value
        })
        
    }

    const submitForm = (e) => {
      const url = "http://localhost:8080/alunos"
      e.preventDefault();
      console.log(formState)
      fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formState)
      }).then(response => response.json())
      .then(data => alert("Dados enviados com sucesso"));
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                  <label for="rm">RM</label>
                  <input type="number" onChange={handleChange}
                    className="form-control" name="rm" id="rm" aria-describedby="helpId" placeholder=""
                     value={formState.rm} />
                  <small id="helpId" className="form-text text-muted">Coloque o RM do aluno</small>
                </div>
                <div className="form-group">
                  <label for="nome">Nome</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="nome" id="nome" aria-describedby="helpId" placeholder=""
                     value={formState.nome} />
                  <small id="helpId" className="form-text text-muted">Coloque o Nome do aluno</small>
                </div>
                <div className="form-group">
                  <label for="curso">Curso</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="curso" id="curso" aria-describedby="helpId" placeholder="" 
                    value={formState.curso} />
                  <small id="helpId" className="form-text text-muted">Coloque o Curso do aluno</small>
                </div>
                <div className="form-group">
                  <label for="profileImage">Imagem</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="profileImage" id="profileImage" aria-describedby="helpId" placeholder=""
                     value={formState.profileImage} />
                  <small id="helpId" className="form-text text-muted">Coloque a Imagem do aluno</small>
                </div>
               <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button> 
            </form>
        </div>
    )
}

export default AlunoForm
