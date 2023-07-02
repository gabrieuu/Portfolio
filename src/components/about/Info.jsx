export const Info = () => {
    return(
        <div className="about__info">
            <div className="about__box">

                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experiência</h3>
                <span className="about__subtitle">1 ano</span>

            </div>      
            <div className="about__box ">

                <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Projetos</h3>
                <span className="about__subtitle">+10 Repositórios</span>

            </div> 
            <div className="about__box">

                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Suporte</h3>
                <span className="about__subtitle">das 8h as 20h </span>

            </div>       
        </div>
    )
}