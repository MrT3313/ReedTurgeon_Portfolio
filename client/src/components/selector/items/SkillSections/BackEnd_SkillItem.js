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

    padding: 10px;

    border: 1px solid black;
    border-radius: 5px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & .TOP {
        font-weight: bold;
        margin-bottom: 10px;
    }

    & .SubGroups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // justify-content: space-between;
        justify-content: flex-start;

    }

    & .Skill_Content {
        display: flex;
        flex-direction: column;

        margin-left: 20px;
        margin-bottom: 10px;

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
                Back-End:
            </div>
            <div className="Skill_Item SubGroups">
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Fundamentals:
                    </div>
                    {items.fundamentals.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Frameworks:
                    </div>
                    {items.frameworks.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Testing:
                    </div>
                    {items.testing.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
                <div className="Skill_Content">
                    <div className="SubGroupTitle">
                        Deployment:
                    </div>
                    {items.deployment.map(( item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
            </div>
        </StyledBackEndSkillItem>
    )
}

// EXPORTS 
export default BackEndSkillItem