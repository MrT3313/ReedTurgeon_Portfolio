// IMPORTS 
import React from 'react'

// ICONS
// 1 - Development Methodology 
import Agile from '../../assets/icons/skills/Agile.svg'

// 2 - Languages
import JS from '../../assets/icons/skills/JS.svg'
import Python from '../../assets/icons/skills/Python.svg'

// 3 - FrontEnd
import ReactIcon from '../../assets/icons/skills/React.svg'
// import ReactHooks from '../../assets/icons/skills/ReactHooks.svg'
import Redux from '../../assets/icons/skills/Redux.svg'
import HTML5 from '../../assets/icons/skills/HTML5.svg'

// 4 - Styled
import CSS3 from '../../assets/icons/skills/CSS3.svg'
import LESS from '../../assets/icons/skills/LESS.svg'
import Sass from '../../assets/icons/skills/Sass.svg'
import StyledComponents from '../../assets/icons/skills/StyledComponents.svg'

// 5 - Backend
import ExpressJS from '../../assets/icons/skills/ExpressJS.svg'
import NodeJS from '../../assets/icons/skills/NodeJS.svg'
import PostgreSQL from '../../assets/icons/skills/PostgreSQL.svg'
import Django from '../../assets/icons/skills/Django.svg'
import SQL from '../../assets/icons/skills/SQL.svg'

// 6 - Hosting
import Netlify from '../../assets/icons/skills/Netlify.svg'
import Heroku from '../../assets/icons/skills/Heroku.svg'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSkillsFooter = styled.div`
    display: flex;
    flex-direction: column;

    // width: 100%;
    width: 300px;

    & .Footer_Content {
        display: flex;
        justify-content: space-around;

        margin-bottom: 10px;
    }

    & .Agile {
        display: flex;
        padding-left: 10px;
    }

    & .Languages {
        display: flex;
        justify-content: space-around;
        
        width: 50%;
    }

    & .Frontend {
        display: flex;
        justify-content: space-around;

        width: 70%;
    }

    & .Styling {
        display: flex;
        justify-content: space-around;

        width: 90%;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HobbiesFooter() {
    return (
        <StyledSkillsFooter>
            <div className="Footer_Content">
                <div className="Agile">
                    <img src={Agile} width='40' height='40' alt='BikerIcon'/> 
                </div>
            </div>
            <div className="Footer_Content">
                <div className="Languages">
                    <img src={JS} width='40' height='40' alt='BikerIcon'/> 
                    <img src={Python} width='40' height='40' alt='BikerIcon'/> 
                </div>
            </div>
            <div className="Footer_Content">
                <div className="Frontend">
                    <img src={ReactIcon} width='40' height='40' alt='BikerIcon'/> 
                    {/* <img src={ReactHooks} width='40' height='40' alt='BikerIcon'/>  */}
                    <img src={Redux} width='40' height='40' alt='BikerIcon'/> 
                    <img src={HTML5} width='40' height='40' alt='BikerIcon'/> 
                </div>
            </div>
            <div className="Footer_Content">
                <div className="Styling">
                    <img src={CSS3} width='40' height='40' alt='BikerIcon'/> 
                    <img src={Sass} width='40' height='40' alt='BikerIcon'/> 
                    <img src={LESS} width='40' height='40' alt='BikerIcon'/> 
                    <img src={StyledComponents} width='40' height='40' alt='BikerIcon'/> 
                </div>
            </div>
            <div className="Footer_Content Backend">
                <img src={ExpressJS} width='40' height='40' alt='BikerIcon'/> 
                <img src={NodeJS} width='40' height='40' alt='BikerIcon'/> 
                <img src={PostgreSQL} width='40' height='40' alt='BikerIcon'/> 
                <img src={Django} width='40' height='40' alt='BikerIcon'/> 
                <img src={SQL} width='40' height='40' alt='BikerIcon'/> 
            </div>
            {/* <div className="Footer_Content Hosting">
                <img src={Netlify} width='40' height='40' alt='BikerIcon'/> 
                <img src={Heroku} width='40' height='40' alt='BikerIcon'/> 
            </div> */}
        </StyledSkillsFooter>
    )
}

// EXPORTS
export default HobbiesFooter