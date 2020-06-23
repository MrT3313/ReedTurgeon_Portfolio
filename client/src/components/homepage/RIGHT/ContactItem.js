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

    margin: 0 5px;
    padding: 5px;

    font-size: .5em;

    border: 1px solid yellow;

    & .Contact_Icon {
        margin: 0 5px 0 0;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function ContactItem( {item} ) {
    return (
        <StyledContactItem className="Homepage Contact Item">
            <img className="Contact_Icon"
                src={item.svg_OFF} width="25" height="25" alt={`${item.title} icon`}
            />
            <div>
                {item.path}
            </div>
        </StyledContactItem>
    )
}

// EXPORTS
export default ContactItem;