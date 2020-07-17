// IMPORTS 
import React from 'react'

// COMPONENTS
import FrontEndSkillItem from '../items/SkillSections/FrontEnd_SkillItem.js'
import GeneralSkillItem from '../items/SkillSections/General_SkillItem.js'
import BackEndSkillItem from '../items/SkillSections/BackEnd_SkillItem.js'

// ICONS
import AgileDevelopment_icon from '../../../assets/icons/skills/Agile.svg'
import Git_icon from '../../../assets/icons/skills/Git.svg'

import HTML5_icon from '../../../assets/icons/skills/HTML5.svg'
import CSS3_icon from '../../../assets/icons/skills/CSS3.svg'
import JS_icon from '../../../assets/icons/skills/JS.svg'

import React_icon from '../../../assets/icons/skills/React.svg'
import Gatsby_icon from '../../../assets/icons/skills/Gatsby.svg'
import Redux_icon from '../../../assets/icons/skills/Redux.svg'

import LESS_icon from '../../../assets/icons/skills/LESS.svg'
import SASS_icon from '../../../assets/icons/skills/Sass.svg'

import StyledComponents_icon from '../../../assets/icons/skills/StyledComponents.svg'
import MaterialUI_icon from '../../../assets/icons/skills/MaterialUI.svg'

import Axios_icon from '../../../assets/icons/skills/Axios.svg'

import Netlify_icon from '../../../assets/icons/skills/Netlify.svg'

import NodeJS_icon from '../../../assets/icons/skills/NodeJS.svg'
import Python_icon from '../../../assets/icons/skills/Python.svg'
import REST_icon from '../../../assets/icons/skills/REST.svg'
import SQL_icon from '../../../assets/icons/skills/SQL.svg'
import PostgreSQL_icon from '../../../assets/icons/skills/PostgreSQL.svg'

import ExpressJS_icon from '../../../assets/icons/skills/ExpressJS.svg'
import Knex_icon from '../../../assets/icons/skills/Knex.svg'
import Django_icon from '../../../assets/icons/skills/Django.svg'

import Jest_icon from '../../../assets/icons/skills/Jest.svg'

import Heroku_icon from '../../../assets/icons/skills/Heroku.svg'



// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSkills = styled.div`
    display: flex; 
    flex-direction: column; 

    font-size: 1.25rem;
`

// STATE
const items = [
    {   title: 'General', 
        development_methodology: [
            { title: 'Agile Development', icon: AgileDevelopment_icon, icon_alt: 'Agile Icon' },
        ],
        version_control: [
            { title: 'Git', icon: Git_icon, icon_alt: 'Git Icon' },
        ],
    },
    {   title: 'Front-End', 
        fundamentals: [
            { title: 'HTML5', icon: HTML5_icon, icon_alt: 'HTML5 Icon' },
            { title: 'CSS3', icon: CSS3_icon, icon_alt: 'CSS3 Icon' },
            { title: 'JavaScript', icon: JS_icon, icon_alt: 'JavaScript Icon' },
        ],
        libraries_frameworks: [
            { title: 'React (Hooks & Context API)', icon: React_icon, icon_alt: 'React Icon'  },
            { title: 'Gatsby', icon: Gatsby_icon, icon_alt: 'Gatsby Icon'  },
            { title: 'Redux', icon: Redux_icon, icon_alt: 'Redux Icon' },
        ],
        css_compilers: [
            { title: 'LESS', icon: LESS_icon, icon_alt: 'LESS Icon' },
            { title: 'SASS/SCSS', icon: SASS_icon, icon_alt: 'SASS Icon' }  
        ],
        styling_libraries: [
            { title: 'Styled-Components', icon: StyledComponents_icon, icon_alt: 'Styled-Components Icon' },
            { title: 'Material UI', icon: MaterialUI_icon, icon_alt: 'MaterialUI Icon' }
        ],
        api_calls: [
            { title: 'Axios', icon: Axios_icon, icon_alt: 'Axios Icon' },
            { title: 'Fetch API', icon: JS_icon, icon_alt: 'Javascript Icon for Fetch API' },
        ],
        deployment: [
            { title: 'Netlify', icon: Netlify_icon, icon_alt: 'Netlify Icon' }
        ]
    }, 
    {   title: 'Back-End', 
        fundamentals: [
            { title: 'NodeJS', icon: NodeJS_icon, icon_alt: 'NodeJS Icon' },
            { title: 'Python', icon: Python_icon, icon_alt: 'Python Icon' },
            { title: 'REST', icon: REST_icon, icon_alt: 'REST API Icon' }, 
            { title: 'SQL', icon: SQL_icon, icon_alt: 'SQL Icon' },
            { title: 'Postgres', icon: PostgreSQL_icon, icon_alt: 'PostgreSQL Icon' },
        ],
        frameworks: [
            { title: 'Express', icon: ExpressJS_icon, icon_alt: 'ExpressJS Icon' },
            { title: 'Knex', icon: Knex_icon, icon_alt: 'Knex Icon' },
            { title: 'Django', icon: Django_icon, icon_alt: 'Django Icon' },
        ],
        deployment: [
            { title: 'Heroku', icon: Heroku_icon, icon_alt: 'Heroku Icon' }
        ],
        testing: [
            { title: 'Jest', icon: Jest_icon, icon_alt: 'Jest Icon' },
            { title: 'SuperTest', icon: NodeJS_icon, icon_alt: 'NodeJS Icon for SuperTest' }
        ]
    }
]

// __MAIN FUNCTIONAL COMPONENT__ 
function Skills() {
    return (
        <StyledSkills className="Styled_Skills">
            {items.map((discipline, index) => {
                switch(discipline.title) {
                    case 'General': 
                        // return <div style={{display: 'flex'}}>div</div>
                        return <GeneralSkillItem items={discipline} key={index}/>
                    case 'Front-End': 
                        // return <div style={{display: 'flex'}}>div</div>
                        return <FrontEndSkillItem items={discipline} key={index}/>
                    case 'Back-End': 
                        // return <div style={{display: 'flex'}}>div</div>
                        return <BackEndSkillItem items={discipline} key={index}/>
                    default: 
                        throw new Error('No Matching Case')
                }

                // return <SkillItem discipline={discipline} key={index} /> 
            })}
        </StyledSkills>
    )
}

// EXPORTS
export default Skills