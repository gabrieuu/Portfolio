import './footer.css'

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gabriel</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Sobre</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projetos</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Habilidades</a>
                    </li>
                </ul>

                <div className="footer__social">     
                          
                    <a href="https://github.com/gabrieuu" className="footer__social-link" target="_blank">
                    <i className="uil uil-github"></i></a>

                    <a href="https://www.linkedin.com/in/gabriel-barbosa-44149b207/" className="footer__social-link" target="_blank">
                    <i className="uil uil-linkedin"></i></a>
                    
                    <a href="https://wa.me/5584999838665" className="footer__social-link" target="_blank">
                    <i className="uil uil-whatsapp"></i></a>
                
                </div>   
            
            </div>
        </footer>
    )
}