// IMPORTS
import React from 'react'

// COMPONENTS
import EducationItem from '../items/EducationItem.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledEducation = styled.div`
    display: flex;
    flex-direction: column
`

// STATE
const items = [
    {   title: 'Full Stack Web Development', name: 'Lambda School',
        // date: 'November, 2018 – April, 2020',
        date: 'Nov, 2018 – Apr, 2020',
        location: 'Remote'
    },
    {   title: 'BS: Business Admin, Finance Concentration', name: 'Babson College',
        // date: 'September 2012 – May, 2016',
        date: 'Sept 2012 – May, 2016',
        location: 'Wellesley MA'
    },
    {   title: 'Eagle Scout', name: 'Troop 126',
        // date: 'June, 2010',
        date: 'June, 2010',
        location: 'Franklin MA'
    },
]

// __MAIN FUNCTIONAL COMPONENT__
function Education() {
    return (
        <StyledEducation className="Styled_Projects">
            {items.map((item, index) => {
                return (
                    <EducationItem item={item} key={index}/>
                )
            })}
        </StyledEducation>
    )
}

// EXPORTS
export default Education