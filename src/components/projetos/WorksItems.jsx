export const WorksItems = ({item}) => {

    const location = (link) => {
        window.open(link, '_blank');
    }

    return(
        <div className="work__card" key={item.id}>
            <img onClick={() => location(item.href)} src={item.image} alt="" className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <a href={() => location(item.href)} className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}