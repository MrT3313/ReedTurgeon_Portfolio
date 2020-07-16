// IMPORTS 
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledGeneralSkillItem = styled.div`
    display: flex
    flex-direction: column;

    font-size: 1.5rem;

    margin-bottom: 10px;

    & .TOP {
        font-weight: bold;
    }

    & .SubGroups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    & .Skill_Content {
        display: flex;
        flex-direction: row;

        margin-left: 10px;

        & .SubGroupTitle {
            font-style: italic;
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
                    <div className="Skill_Content SubGroupTitle">
                        Version Control: 
                    </div>
                    {items.version_control.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Development Methodology: 
                    </div>
                    {items.development_methodology.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
            </div>
        </StyledGeneralSkillItem>
    )
}

// EXPORTS 
export default GeneralSkillItem