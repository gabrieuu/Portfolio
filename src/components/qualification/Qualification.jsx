import './qualification.css'

export const Qualification = () => {
    return(
        <section className="qualification section" id='qualification'>
             <h2 className="section__title">Formação</h2>
            <span className="section__subtitle">Minha Jornada</span>
        
            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className="qualification__button qualification__active button--flex">
                        
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i>Education

                    </div>

                    {/* Experiência 

                    <div className="qualification__button qualification__active button--flex">
                        
                        <i className="uil uil-briefcase-alt 
                        qualification__icon"></i>Experiência
                
                    </div>
                    */}
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>

                                <h3 className="qualification__title">Bacharelado em Ciência e Tecnologia</h3>
                                <span className="qualification__subtitle">Brasil - Universidade Federal de Ciencias e Tecnologia</span>
                               
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                                
                            </div>

                        </div>

                        <div className="qualification__data">

                            <div>

                                <h3 className="qualification__title">Técnico de Informatica - Desenvolvedor Web</h3>
                                <span className="qualification__subtitle">Brasil - Instituto Federal de Ciências e Tecnologia</span>
                               
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                        </div>
         
                    </div>
                </div>

            </div>

        </section>
    )
}