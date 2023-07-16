import { Works } from "./Works"
import './projetos.css'
export const Projeto = () => {
    return(
        <section className="projeto section" id='portfolio'>
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Meus Projetos Recentes</span>

            <Works/>
            
            <a href='https://github.com/gabrieuu' target='_blank' className="button section__button">Ver Todos </a>
        </section>
    )
}