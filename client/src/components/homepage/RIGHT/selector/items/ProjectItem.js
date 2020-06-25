// IMPORTS
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: column;

    margin: 15px 0 15px 15px;

    & .Project_Item, .Project_Content {
        display: flex;
        font-size: 1.25rem;
    }

    & .TOP {
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;
        width: 100%;

        & .Title, .ProjectLink, .ProjectCodebase { 
            font-size: 1.25rem;
        }

        & .Title {
            font-weight: bold;

            width: 210px;
        }
    }

    & .MIDDLE {
        flex-direction: column;

        margin-bottom: 10px;

        & .SubTitle {
            font-style: italic;
        }

        & .TechStack {
            flex-direction: row;

            & .TechItem { 
                margin-right: 10px;
            }
        } 
    }

    & .BOTTOM {
        padding-left: 30px;
    }
`

// __MAIN FUNCTIONAL COMPONENT
function ProjectItem( {item} ) {
    return (
        <StyledProjectItem>
            <div className="Project_Item TOP">
                <div className="Project_Content Title">{item.title}</div>
                <a className="Project_Content Link" href={item.projectLink} target="_blank" rel="noopener noreferrer">Live Project</a>
                {/* <div className="Project_Content">|</div> */}
                <a className="Project_Content Codebase" href={item.codebase}  target="_blank" rel="noopener noreferrer">Codebase</a>
            </div>
            <div className="Project_Item MIDDLE">
                <div className="Project_Content SubTitle">{item.subTitle}</div>
                <div className="Project_Content TechStack">
                    {item.stack.map((tech, index) => {
                        return (
                            <div 
                                className="Project_Content TechItem"
                                key={index}
                            >
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