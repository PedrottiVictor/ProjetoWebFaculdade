import React, { useState } from "react";
import './style.css';

type CriarTodoProps = {
    onEnviar: (tituloTarefa: string) => void;
}

const CriarTodo = ({ onEnviar } : CriarTodoProps) => {
    const [getTitulo, setTitulo] = useState<string>('');

    return(
        <div>
            <h1> Criar Todo </h1>
            <input 
                type="text"
                placeholder="Digite o título da tarefa"    
                onChange={(event) => { 
                    setTitulo(event.target.value)
                }}
            />
            <h3>{getTitulo}</h3>
            <button onClick={() => onEnviar(getTitulo)}>Criar tarefa</button>
        </div>
    )
}

export default CriarTodo;
