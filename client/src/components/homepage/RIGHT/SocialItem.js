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

    font-size: .65em;

    margin-bottom: 10px;

    border: 1px solid yellow;

    & .Social_Icon {
        margin: 0 0 5px 0;
    }
`

// __MAIN FUNCTIONAL COMPONENT__ 
function SocialItem( {item} ) {
    return (
        <StyledSocialItem>
            <img className="Social_Icon"
                src={item.svg_OFF} width="50" height="50" alt={`${item.title} icon`}
            />
            <div>
                {item.path}
            </div>
        </StyledSocialItem>
    )
}

// EXPORTS
export default SocialItem;