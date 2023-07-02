import React from "react";
import './about.css'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/cv-gabriel.pdf';
import {Info} from './Info'
export const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">Sobre mim</h2>
            <span className="section__subtitle"></span>

            <div className="about__container container">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    
                    <Info/>

                    <p className="about__description">
                    Desenvolvedor Front End apaixonado por criar interfaces de usuário agradáveis. Estou constantemente buscando novos desafios, visando aprimorar minhas habilidades e trazer inovação para meus projetos.
                    </p>

                    <a download ='' href={CV} className="button button--flex">Download CV <i class="uil uil-file-alt"></i></a>

                </div>
            </div>
        </section>
    )
}