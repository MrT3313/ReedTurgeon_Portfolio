// IMPORTS
import React, {useState} from 'react';

// COMPONENTS
import ContactItem from './ContactItem.js'
import SocialItem from './SocialItem.js'

// ICONS
import LinkedIn_OFF from '../../assets/icons/LinkedIn_OFF.svg'
import Github_OFF from '../../assets/icons/Github_OFF.svg'
import AtSymbol from '../../assets/icons/Mail_OFF.svg'
import Phone_OFF from '../../assets/icons/Phone_OFF.svg'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .Name {
        font-size: 2rem;
        margin-bottom: 7px;
    }

    & .Links, .Contact_Links, .Social_Links  {
        display: flex;
        justify-content: space-around;    
    }

    & .Active_Link {
        font-size: 1.25rem;
    }
`

// STATE
const contact_info = {
    fullName: 'Reed Turgeon',
    items: [
        {   title: 'Email', path: 'turgeon.dev@gmail.com', link: 'turgeon.dev@gmail.com',
            svg_OFF: AtSymbol, svg_ON: null,
        },
        {   title: 'Phone', path: '508 - 446 - 6633', link: '508 - 446 - 6633',
            svg_OFF: Phone_OFF, svg_ON: null,
        }
    ]
}

const social_info = [
    {   title: 'LinkedIn', path: '/in/reedturgeon/', link: 'https://www.linkedin.com/in/reedturgeon/', 
        svg_OFF: LinkedIn_OFF, svg_ON: null,
    },
    {   title: 'Github', path: '/MrT3313', link: 'https://github.com/MrT3313',
        svg_OFF: Github_OFF, svg_ON: null,
    },
]

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Header() {
    const [activeContact, setActiveContact] = useState('turgeon.dev@gmail.com')

    return (
        <StyledHomepageHeader className="Homepage_Header">
            <div className="Name">
                {contact_info.fullName}
            </div>
            <div className="Links"
                onMouseLeave={() => setActiveContact('turgeon.dev@gmail.com')}
            >
                <div className="Social_Links">
                    {social_info.map((item, index) => <SocialItem item={item} key={index} Active_Contact={[activeContact, setActiveContact]} />)}
                </div>
                <div className="Contact_Links">
                    {contact_info.items.map((item, index)=> <ContactItem item={item} key={index} Active_Contact={[activeContact, setActiveContact]} />)}
                </div>
            </div>
            <div className="Active_Link">
                {activeContact ? activeContact : null}
            </div>
            
        </StyledHomepageHeader>
    )
}

// EXPORTS
export default Homepage_Header;