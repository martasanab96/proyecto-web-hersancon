import React, {useState} from 'react'

function Component() {
    const [text, setText] =useState(); //Propiedad llamada text conla operación setText

    const textOnChange = (event) => {
        setText(event.target.value)
    } //función
    // value valor de nuestro text, la funcioon qye se llama en el onChange
    return (
        <div>
            <input type="text" value={text} onChange={textOnChange}/> 
            <button>Actualizar</button>
            <p>texto input : {text}</p>
            <p>texto actualizado</p>
        </div>
    )
}

export default Component
