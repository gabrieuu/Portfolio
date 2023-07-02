import React, { useState } from "react"
import './header.css'
export const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [toggle, setToggle] = useState(false)




    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Gabriel</a>

                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> Sobre
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file nav__icon"></i> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Formação
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfólio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}