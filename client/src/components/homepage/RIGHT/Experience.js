// IMPORTS
import React from 'react'

// COMPONENTS
import ExperienceItem from './ExperienceItem.js'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledExperience = styled.div`
    display: flex;
    flex-direction: column;
`

// STATE
const items = [
    {   title: 'Remote Computer Science Section Lead', company: 'Lambda School', date: 'February, 2020 – April, 2020',
        bullets: [
            'Responsible for 16 Team Leads that oversaw ~150 students',
            'Facilitated effective communication between each Team Lead and the Student Success Coordinators',
        ]
    },
    {   title: 'Remote Full Stack Web Development Team Lead', company: 'Lambda School', date: 'July, 2019 – December, 2019',
        bullets: [
            'Technical mentor for 7–10 students. Lead daily 1:1 review and debugging sessions via Zoom',
            'Held daily stand-up meetings to address technical challenges, reinforce lecture material and lead JavaScript whiteboard challenges',
            'Project Lead for 4 Build Weeks, guiding groups of 7-14 developers in delivering one project inclusive of all Lambda’s curriculum tracks (Full Stack Web, Android, IOS, Data Science, and UX)',
        ]
    },
    {   title: 'Acting Startup Comptroller | Co-Operations Manager', company: 'PiraShield', date: 'December, 2016 – July, 2018',
        bullets: [
            'Designed, implemented, and managed all financial systems: bookkeeping, financial reporting, accounts receivable, accounts payable, employee payroll, budgeting and tax filing',
            'Organized and improved an operational management system to identify, track and communicate performance',
            'These systems supported the company through ~3000% revenue growth ($800/Mo – $25,000/Mo) and were integral in the due diligence process and sale of the company to a European competitor',
        ]
    }, 
    {   title: 'Executive Portfolio Manager', company: 'Babson College Fund', date: 'April, 2015 – May, 2016',
        bullets: [
            'Monitored trade orders and oversaw positions within the $2M portfolio to remain compliant with BCF bylaws',
            'Maintained effective communication between Student Sector Managers and the BCF Director'
        ]
    },
]

// __MAIN FUNCTIONAL COMPONENT__
function Experience() {
    return (
        <StyledExperience className="Styled Experience">
            {items.map((item, index) => {
                return <ExperienceItem item={item} key={index}/>
            })}
        </StyledExperience>
    )
}

// EXPORTS
export default Experience