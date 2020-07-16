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
import SASS_icon from '../../../assets/icons/skills/SASS.svg'

import StyledComponents_icon from '../../../assets/icons/skills/StyledComponents.svg'
import MaterialUI_icon from '../../../assets/icons/skills/MaterialUI.svg'

import Axios_icon from '../../../assets/icons/skills/Axios.svg'

import Netlify_icon from '../../../assets/icons/skills/Netlify.svg'


// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSkills = styled.div`
    display: flex; 
    flex-direction: column; 
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
            { title: 'NodeJS', icon: null, icon_alt: null },
            { title: 'Python 2 & 3', icon: null, icon_alt: null },
            { title: 'REST', icon: null, icon_alt: null }, 
            { title: 'SQL', icon: null, icon_alt: null },
            { title: 'Postgres', icon: null, icon_alt: null },
        ],
        frameworks: [
            { title: 'Express', icon: null, icon_alt: null },
            { title: 'Knex', icon: null, icon_alt: null },
            { title: 'Django', icon: null, icon_alt: null },
        ],
        deployment: [
            { title: 'Heroku', icon: null, icon_alt: null }
        ],
        testing: [
            { title: 'Jest', icon: null, icon_alt: null },
            { title: 'SuperTest', icon: null, icon_alt: null }
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
                        return <GeneralSkillItem items={discipline} key={index}/>
                    case 'Front-End': 
                        return <FrontEndSkillItem items={discipline} key={index}/>
                    case 'Back-End': 
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