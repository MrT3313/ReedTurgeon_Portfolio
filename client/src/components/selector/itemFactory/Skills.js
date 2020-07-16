// IMPORTS 
import React from 'react'

// COMPONENTS
import FrontEndSkillItem from '../items/SkillSections/FrontEnd_SkillItem.js'
import GeneralSkillItem from '../items/SkillSections/General_SkillItem.js'
import BackEndSkillItem from '../items/SkillSections/BackEnd_SkillItem.js'

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
            { title: 'Agile Development', icon: null},
        ],
        version_control: [
            { title: 'Git', icon: null },
        ],
    },
    {   title: 'Front-End', 
        fundamentals: [
            { title: 'HTML5', icon: null},
            { title: 'CSS3', icon: null},
            { title: 'JavaScript 6', icon: null},
        ],
        libraries_frameworks: [
            { title: 'React (Hooks & Context API)', icon: null },
            { title: 'Gatsby', icon: null },
            { title: 'Redux', icon: null},
        ],
        css_compilers: [
            { title: 'LESS', icon: null },
            { title: 'SASS/SCSS', icon: null }  
        ],
        styling_libraries: [
            { title: 'Styled-Components', icon: null },
            { title: 'Material UI', icon: null }
        ],
        api_calls: [
            { title: 'Axios', icon: null },
            { title: 'Fetch API', icon: null },
        ],
        deployment: [
            { title: 'Netlify', icon: null }
        ]
    }, 
    {   title: 'Back-End', 
        fundamentals: [
            { title: 'NodeJS', icon: null},
            { title: 'Python 2 & 3', icon: null},
            { title: 'REST', icon: null}, 
            { title: 'SQL', icon: null },
            { title: 'Postgres', icon: null },
        ],
        frameworks: [
            { title: 'Express', icon: null },
            { title: 'Knex', icon: null },
            { title: 'Django', icon: null },
        ],
        deployment: [
            { title: 'Heroku', icon: null }
        ],
        testing: [
            { title: 'Jest', icon: null },
            { title: 'SuperTest', icon: null }
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