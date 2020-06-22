// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Contact_Item = styled.div`
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
function Contact_Item( {item} ) {
console.log(item)
    return (
        <Styled_Contact_Item className="Homepage Contact Item">
            <img className="Contact_Icon"
                src={item.svg_OFF} width="25" height="25"
            />
            <div>
                {item.path}
            </div>
        </Styled_Contact_Item>
    )
}

// EXPORTS
export default Contact_Item;