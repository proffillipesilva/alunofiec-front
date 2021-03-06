import React, {useState, useReducer, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import myaxios from './myaxios'


const formReducer = (state, action) => {
  switch(action.type){
    case 'ATUALIZA':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'INICIALIZA_CAMPOS':
      return { ...action.state }
    default:
      return state;
  }
}
const AlunoForm = () => {
    const initialState = { email: "", rm: "", nome: "",  curso: "",  profileImage: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [file, setfile] = useState(initialState)
    const handleChange = (e) => {
        dispatch({
          type: 'ATUALIZA',
          name: e.target.name,
          value: e.target.value
        })
        
    }
    const { id } = useParams();

    const handleImageChange = (e) => {
      setfile(e.target.files[0])
    }

    
    useEffect(() => {
      if(id != null){
        myaxios.put("http://localhost:8080/alunos/" + id)
        
        .then(res => {
          dispatch({
            type: 'INICIALIZA_CAMPOS',
            state: res.data
          })
        })
      }
    }, [])

    const submitForm = (e) => {
      let url = "http://localhost:8080/alunos"
      e.preventDefault();
      console.log(formState)

      if(id!= null){
        url += "/" + id;
        myaxios.put(url, formState)
        .then(res => alert("Dados enviados com sucesso"));

      } else {
        const formData = new FormData();
        formData.append("aluno", JSON.stringify(formState));
        formData.append("foto", file);
        myaxios.post(url + "/comFoto", formData)
        .then(res => alert("Dados enviados com sucesso"));
      }
    }

    return (
        <div className="container">
            <form>
            <div className="form-group">
                  <label for="email">Email</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" 
                    value={formState.email} />
                  <small id="helpId" className="form-text text-muted">Coloque o Email do aluno</small>
                </div>
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
                  <input type="file" onChange={handleImageChange}
                    className="form-control" name="profileImage" id="profileImage" aria-describedby="helpId" placeholder=""
                     />
                  <small id="helpId" className="form-text text-muted">Coloque a Imagem do aluno</small>
                </div>
               <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button> 
            </form>
        </div>
    )
}

export default AlunoForm
