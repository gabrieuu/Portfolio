import { ProjectsData } from "./Data"
import { WorksItems } from "./WorksItems"

export const Works = () => {
    return(
        <div>
            <div className="work__container container">
                {ProjectsData.map((item) => {
                    return <WorksItems item = {item} key = {item.id}/>
                })}
            </div>
        </div>
    )
}