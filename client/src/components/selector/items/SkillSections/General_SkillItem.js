// IMPORTS 
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledGeneralSkillItem = styled.div`
    display: flex
    flex-direction: column;

    font-size: 1rem;

    padding: 10px;
    margin-bottom: 10px;

    border: 1px solid black;
    border-radius: 5px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & .TOP {
        margin-bottom: 10px;
        font-weight: bold;
    }

    & .SubGroups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        // justify-content: center;
        // justify-content: space-between;
        // justify-content: space-around;
        justify-content: flex-start;
    }

    & .Skill_Content {
        display: flex;
        flex-direction: column;

        margin-left: 20px;
        // margin-bottom: 10px;

        & .SubGroupTitle {
            font-style: italic;
            margin-bottom: 5px;
        }

        & .Skill{
            display: flex;
            align-items: center;

            margin-left: 25px;
            margin-bottom: 5px; 

            & .Skill_Icon {
                margin-right: 10px;
            }
        }
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function GeneralSkillItem( {items} ){
console.log('General Items', items)
// -- //
    return (
        <StyledGeneralSkillItem>
            <div className="Skill_Item TOP">
                General
            </div>
            <div className="Skill_Item SubGroups">
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Version Control: 
                    </div>
                    {items.version_control.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='20' height='20' alt={item.icon_alt}/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Development Methodology: 
                    </div>
                    {items.development_methodology.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt={item.icon_alt}/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledGeneralSkillItem>
    )
}

// EXPORTS 
export default GeneralSkillItem