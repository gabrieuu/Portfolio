import './contact.css'

export const Contact = () => {
    return(
        <section className="contact section" id="contact">
             <h2 className="section__title">Contate-me</h2>

            <div className="contact__container container">
                <div className="contact__content">
                    <h3 className="contact__title">Fale comigo</h3>
                
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="uil uil-envelope contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">gabriel.personal.dev@gmail.com</span>
                        
                            <a href="mailto:gabriel.personal.dev@gmail.com" className="contact__button">enviar mensagem <i className="bx bx-right-arrow-alt 
                            contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="uil uil-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">(84) 99983-8665</span>
                        
                            <a href="https://wa.me/5584999838665" className="contact__button">enviar mensagem <i className="bx bx-right-arrow-alt 
                            contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}