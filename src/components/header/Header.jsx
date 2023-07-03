import React, { useState } from "react"
import './header.css'
export const Header = () => {
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header')

        if(scrollY >= 80){
            header.classList.add('scroll-header');
        }
        else{
            header.classList.remove('scroll-header');
        }

    })
    /*=============== Toggle Menu ===============*/
    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')



    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Gabriel</a>

                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "nav__link active-link" : 'nav__link'}>
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link" : 'nav__link'}>
                                <i className="uil uil-user nav__icon"></i> Sobre
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? "nav__link active-link" : 'nav__link'}>
                                <i className="uil uil-file nav__icon"></i> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === '#qualification' ? "nav__link active-link" : 'nav__link'}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Formação
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "nav__link active-link" : 'nav__link'}>
                                <i className="uil uil-scenery nav__icon"></i> Projetos
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : 'nav__link'}>
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