import React from "react";
import './style.css'
import minhaImagem from '../../assets/user.png';

function Sobre(){
    return(
        <div className="profile-container">
            <img src={minhaImagem} alt="Foto do Perfil" className="profile-picture" />
            <h1 className="name">Victor Pedrotti</h1>
            <h2 className="profession">Analista de Sistema</h2>
            <p className="bio">
                <p>Sou um estudante de Engenharia de Software com foco no desenvolvimento de aplicações web utilizando React.</p>
                <p>Atualmente, estou explorando os fundamentos de desenvolvimento frontend, buscando aprimorar minhas habilidades em React e outras tecnologias do ecossistema JavaScript.</p>
                <p>Minha paixão por tecnologia me motiva a aprender continuamente e aplicar meus conhecimentos em projetos práticos durante a faculdade. - ChatGpteco</p>
            </p>
            <a href="https://github.com/VictorPedrotti" className="github-link" target="_blank" rel="noopener noreferrer">Meu GitHub</a>
        </div>
    )
}

export default Sobre;