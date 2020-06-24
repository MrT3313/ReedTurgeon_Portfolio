// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledContactItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    & .Contact_Icon {
        margin: 0 5px 0 0;
    }

    & .Contact_Text {
        font-size: 1.25rem;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function ContactItem( {item, Active_Contact} ) {

    if (item.title === 'Email') {
        return (
            <StyledContactItem className="Homepage Contact Item">
                <a
                    href={`mailto:${item.link}`} target="_blank" rel="noopener noreferrer"
                ><img className="Contact_Icon"
                    src={item.svg_OFF} width="50" height="50" alt={`${item.title} icon`}
                    onMouseOver={() => Active_Contact[1](item.path)}
                /></a>
        </StyledContactItem>
        )
    } else {
        return (
            <StyledContactItem className="Homepage Contact Item">
                <img className="Contact_Icon"
                    src={item.svg_OFF} width="50" height="50" alt={`${item.title} icon`}
                    onMouseOver={() => Active_Contact[1](item.path)}
                />
            </StyledContactItem>
        )
    }
}

// EXPORTS
export default ContactItem;