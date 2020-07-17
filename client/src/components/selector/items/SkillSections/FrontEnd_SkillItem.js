// IMPORTS 
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledFrontEndSkillItem = styled.div`
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
        margin-bottom: 10px;

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
`

// __MAIN FUNCTIONAL COMPONENT__
function FrontEndSkillItem( {items} ){
// console.log('Front End Items', items)
// -- //
    return (
        <StyledFrontEndSkillItem>
            <div className="Skill_Item TOP">
                Front-End:
            </div>
            <div className="Skill_Item SubGroups">
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Fundamentals:
                    </div>
                    {items.fundamentals.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Libraries/Frameworks:
                    </div>
                    {items.libraries_frameworks.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='20' height='20' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div> 
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        CSS Compilers:
                    </div>
                    {items.css_compilers.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Styling Libraries:
                    </div>
                    {items.styling_libraries.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        API Calls:
                    </div>
                    {items.api_calls.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Deployment:
                    </div>
                    {items.deployment.map(( item, index) => {
                        return (
                            <div key={index} className='Skill'>
                                {item.icon !== null && 
                                    <img className='Skill_Icon' src={item.icon} width='30' height='30' alt='AgileIcon'/>
                                }
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledFrontEndSkillItem>
    )
}

// EXPORTS 
export default FrontEndSkillItem