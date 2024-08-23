import React, { useState } from "react";
import Todo from "../../pages/todo";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import './style.css'

enum routes {
    home = 'home',
    todo = 'todo',
    sobre = 'sobre'
}

const Router = () => {
    const [getRoute, setRoute] = useState<routes>(routes.home);

    const renderizarPagina = (rotaDaPagina: routes) => {
        switch (rotaDaPagina){
            case routes.home: return <Home />
            case routes.todo: return <Todo />
            case routes.sobre: return <Sobre />
            default: return <Todo />
        }
    }

    const renderizarHeader = () => (
        <div>
            <button onClick={() => setRoute(routes.home)}>Inicio</button>   
            <button onClick={() => setRoute(routes.todo)}>Todo</button>    
            <button onClick={() => setRoute(routes.sobre)}>Sobre</button>    
        </div>
    )

    return (
        <div>
            {renderizarHeader()}
            {renderizarPagina(getRoute)}
        </div>
    )
}

export default Router;