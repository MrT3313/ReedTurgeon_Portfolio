// IMPORTS
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'
import { sizes, devices } from '../../../styles/responsiveSizes.js'


// STYLED COMPONENTS
const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px;
    margin: 10px 10px 10px 10px;

    border: 1px solid black;
    border-radius: 5px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & .Project_Item, .Project_Content {
        display: flex;
    }

    & .TOP {
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;

        & .Title, .ProjectLink, .ProjectCodebase { 
            font-size: 1rem;
        }

        & .Title {
            font-weight: bold;
            width: 180px;
        }

        & .Links {
            justify-content: space-around;
            font-size: .9rem;
            flex-grow: 1
        }
    }

    & .MIDDLE {
        flex-direction: column;

        font-size: .9rem;
        margin-bottom: 10px;

        & .SubTitle {
            font-style: italic;
        }

        & .TechStack {
            & .TechItem { 
                margin-right: 5px;
            }
        } 
    }

    & .BOTTOM {
        padding-left: 10px;
        font-size: .9rem;

        // display: none;

        & li {
            justify-content: flex-start;
            
            display: list-item;
            list-style-type: disc;
            list-style-position: outside;

            font-size: .9rem;
            
            margin: 0 0 5px 15px;
        }
    }

    :hover {
        & .BOTTOM {
            display: flex;
        }
    }
`

// __MAIN FUNCTIONAL COMPONENT
function ProjectItem( {item} ) {
    return (
        <StyledProjectItem className="Styled_ProjectItem">
            <div className="Project_Item TOP">
                <div className="Project_Content Title">{item.title}</div>
                <div className="Project_Content Links">
                    <a className="Project_Content Link" href={item.projectLink} target="_blank" rel="noopener noreferrer">Live Project</a>
                    {/* <div className="Project_Content">|</div> */}
                    <a className="Project_Content Codebase" href={item.codebase}  target="_blank" rel="noopener noreferrer">Codebase</a>
                </div>
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
                <ul><li>{item.desc}</li></ul>
            </div>
        </StyledProjectItem>
    )
}

// EXPORTS
export default ProjectItem