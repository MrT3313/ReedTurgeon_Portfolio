// IMPORTS 
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledBackEndSkillItem = styled.div`
    display: flex
    flex-direction: column;

    font-size: 1.5rem;

    & .TOP {
        font-weight: bold;
    }

    & .SubGroups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    & .Skill_Content {
        display: flex;
        flex-direction: column;

        & .SubGroupTitle {
            font-style: italic;
        }
`

// __MAIN FUNCTIONAL COMPONENT__
function BackEndSkillItem( {items} ){
console.log('Back End Items', items)
// -- //
    return (
        <StyledBackEndSkillItem>
            <div className="Skill_Item TOP">
                Back-End
            </div>
            <div className="Skill_Item SubGroups">
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Fundamentals
                    </div>
                    {items.fundamentals.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Frameworks
                    </div>
                    {items.frameworks.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Deployment
                    </div>
                    {items.deployment.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Testing
                    </div>
                    {items.testing.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
            </div>
        </StyledBackEndSkillItem>
    )
}

// EXPORTS 
export default BackEndSkillItem