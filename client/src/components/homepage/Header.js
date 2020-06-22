// IMPORTS
import React from 'react';

// COMPONENTS
import Contact_Item from '../Contact_Item.js'
import Social_Item from '../Social_Item.js'

// ICONS
import LinkedIn_OFF from '../../assets/icons/LinkedIn_OFF.svg'
import LinkedIn_ON from '../../assets/icons/LinkedIn_ON.svg'
import Github_OFF from '../../assets/icons/Github_OFF.svg'
import Github_ON from '../../assets/icons/Github_ON.svg'

import AtSymbol from '../../assets/icons/AtSymbol.svg'
import Mail_ON from '../../assets/icons/Mail_ON.svg'

import Phone_OFF from '../../assets/icons/Phone_OFF.svg'
import Phone_ON from '../../assets/icons/Phone_ON.svg'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_Header = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    font-size: 30px;

    padding: 10px;

    border: 1px dashed black;

    & .Name {
        margin-bottom: 7px;
    }

    & .Contact_Links, .Social_Links {
        display: flex;
        justify-content: space-around;

        width: 100%;
    }
    `

const contact_info = {
    fullName: 'Reed Turgeon',
    items: [
        {   title: 'Email', path: 'turgeon.dev@gmail.com', link: 'turgeon.dev@gmail.com',
            svg_OFF: AtSymbol, svg_ON: Mail_ON,
        },
        {   title: 'Phone', path: '508 - 446 - 6633', link: '508 - 446 - 6633',
            svg_OFF: Phone_OFF, svg_ON: Phone_ON,
        }
    ]
}

const social_info = [
    {   title: 'LinkedIn', path: '/in/reedturgeon/', link: 'https://www.linkedin.com/in/reedturgeon/', 
        svg_OFF: LinkedIn_OFF, svg_ON: LinkedIn_ON,
    },
    {   title: 'Github', path: '/MrT3313', link: 'https://github.com/MrT3313',
        svg_OFF: Github_OFF, svg_ON: Github_ON,
    },
]

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Header() {
    return (
        <Styled_Homepage_Header className="Homepage Header">
            <div className="Name">
                {contact_info.fullName}
            </div>
            <div className="Social_Links">
                {social_info.map((item, index) => {
                    return <Social_Item item={item} key={index}/>
                })}
            </div>
            <div className="Contact_Links">
                {contact_info.items.map((item, index)=> <Contact_Item item={item} key={index}/>)}
            </div>
            
        </Styled_Homepage_Header>
    )
}

// EXPORTS
export default Homepage_Header;