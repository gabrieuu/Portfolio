import { mySkills } from "./Data" 

export const Frontend = () => {
    return(
        <div className="skills__content">

            <div className="skills__box">
                
                <div className="skills__group">
                    
                    {mySkills.map((map) => (
                       
                       <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">{map.skill_name}</h3>
                            <span className="skills__level">{map.skill_level}</span>
                        </div>

                        </div>
                    ))}
                   
                </div>
                
            </div>
        </div>
    )
}