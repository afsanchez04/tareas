import React from 'react'

function TareaFormulario(props) {
    return (
        <div className="d-flex justify-content-center mt-5">
            <input 
                className='form-control'
                type="text" 
                placeholder='Agrega una tarea'
                name="texto"
            />
            <button className="btn btn-primary">Add</button>
        </div>
    )
}

export default TareaFormulario