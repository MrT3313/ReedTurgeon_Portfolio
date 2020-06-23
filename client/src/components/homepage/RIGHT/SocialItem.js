// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSocialItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 5px;

    & .Social_Icon {
        margin-bottom: 5px;
    }

    & .Social_Text {
        font-size: 1.25rem;
    }
`

// __MAIN FUNCTIONAL COMPONENT__ 
function SocialItem( {item, Active_Contact} ) {
    return (
        <StyledSocialItem>
            <a
                href={item.link} target="_blank"
            ><img className="Social_Icon"
                src={item.svg_OFF} width="50" height="50" alt={`${item.title} icon`}
                onMouseOver={() => Active_Contact[1](item.path)}
            /></a>
        </StyledSocialItem>
    )
}

// EXPORTS
export default SocialItem;