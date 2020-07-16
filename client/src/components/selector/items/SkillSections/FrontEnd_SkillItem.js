// IMPORTS 
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledFrontEndSkillItem = styled.div`
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
function FrontEndSkillItem( {items} ){
console.log('Front End Items', items)
// -- //
    return (
        <StyledFrontEndSkillItem>
            <div className="Skill_Item TOP">
                Front-End
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
                        Libraries/Frameworks
                    </div>
                    {items.libraries_frameworks.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        CSS Compilers
                    </div>
                    {items.css_compilers.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        Styling Libraries
                    </div>
                    {items.styling_libraries.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content SubGroupTitle">
                        API Calls
                    </div>
                    {items.api_calls.map(( item, index) => {
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
            </div>
        </StyledFrontEndSkillItem>
    )
}

// EXPORTS 
export default FrontEndSkillItem