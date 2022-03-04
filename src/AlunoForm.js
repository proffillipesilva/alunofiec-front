import React, {useState} from 'react'

const AlunoForm = () => {
    let initialState = {}
    const [form, setForm] = useState(initialState);
    

    const handleChange = (e) => {
        //console.log(e.target.name + " " + e.target.value)
        setForm({ [e.target.name] : e.target.value })
        console.log(form)
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                  <label for="rm">RM</label>
                  <input type="number" onChange={handleChange}
                    className="form-control" name="rm" id="rm" aria-describedby="helpId" placeholder="" value="" />
                  <small id="helpId" className="form-text text-muted">Coloque o RM do aluno</small>
                </div>
                <div className="form-group">
                  <label for="nome">Nome</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="nome" id="nome" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" className="form-text text-muted">Coloque o Nome do aluno</small>
                </div>
                <div className="form-group">
                  <label for="curso">Curso</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="curso" id="curso" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" className="form-text text-muted">Coloque o Curso do aluno</small>
                </div>
                <div className="form-group">
                  <label for="profileImage">Imagem</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="profileImage" id="profileImage" aria-describedby="helpId" placeholder="" />
                  <small id="helpId" className="form-text text-muted">Coloque a Imagem do aluno</small>
                </div>
               <button type="submit" className="btn btn-primary">Submit</button> 
            </form>
        </div>
    )
}

export default AlunoForm
