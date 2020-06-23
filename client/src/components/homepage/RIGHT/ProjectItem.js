// IMPORTS
import React from 'react'

// COMPONENTS

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: column;

    margin: 5px 0 5px 15px;
    font-size: .5em;

    & .Project_Item {
        display: flex;
        width: 100%;
    }

    & .TOP {
        justify-content: space-between;
    }

    & .MIDDLE {
        display: flex;
        flex-direction: column;

        & .TechStack {
            display: flex;
            flex-direction: row;
        } 
    }
`

// __MAIN FUNCTIONAL COMPONENT
function ProjectItem( {item} ) {
    return (
        <StyledProjectItem>
            <div className="Project_Item TOP">
                <div>{item.title}</div>
                <a href={item.projectLink} target="_blank">Live Project Link</a>
                <a href={item.codebase}  target="_blank">Project Codebase</a>
            </div>
            <div className="Project_Item MIDDLE">
                <div>{item.subTitle}</div>
                <div className="TechStack">
                    {item.stack.map((tech, index) => {
                        return (
                            <div key={index}>
                                {tech}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Project_Item BOTTOM">
                {item.desc}
            </div>
        </StyledProjectItem>
    )
}

// EXPORTS
export default ProjectItem