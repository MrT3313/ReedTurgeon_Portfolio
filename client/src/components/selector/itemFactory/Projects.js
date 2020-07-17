// IMPORTS
import React from 'react'

// COMPONENTS
import ProjectItem from '../items/ProjectItem.js'

// IMGs
import BookShelf_Homepage from '../../../assets/projectSnapshots/BookShelf/BookShelf_Homepage.png'
import GameOfLife_Homepage from '../../../assets/projectSnapshots/GameOfLife/GameOfLife_Homepage.png'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
`

// STATE
const items = [
    {   title: 'BookShelf', projectLink: 'https://my-book-shelf.netlify.app', codebase: 'https://github.com/MrT3313/BookShelf',
        subTitle: 'A single page application to find, read, and review books',
        stack: ['Postgres', '|', 'Express', '|', 'React', '|', 'NodeJS'],
        desc: 'Independently designed and built with a focus on well documented, small feature releases',
        imgs: [BookShelf_Homepage, ]
    },
    {   title: "Conway's Game of Life", projectLink: 'https://turgeon-gameoflife.netlify.app', codebase: 'https://github.com/MrT3313/GameOfLife',
        subTitle: 'Zero-player cellular automaton', 
        stack: ['React Hooks'],
        desc: 'Built to explore simulation logic and practice React state management with Hooks',
        imgs: [GameOfLife_Homepage, ]
    },
    // {   title: "This Portfolio!", projectLink: 'https://turgeonportfolio.netlify.app/', codebase: 'https://github.com/MrT3313/ReedTurgeon_Portfolio',
    //     subTitle: '', 
    //     stack: ['React', '|', 'Styled Components'],
    //     desc: ''
    // }
]

// __MAIN FUNCTIONAL COMPONENT__
function Projects() {
    return (
        <StyledProjects className="Styled_Projects">
            {items.map((item, index) => {
                return <ProjectItem item={item} key={index}/>
            })}
        </StyledProjects>
    )
}

// EXPORTS
export default Projects