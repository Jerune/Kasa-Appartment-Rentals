import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function InfoDropdown(props){
    const [dropdownState, setDropdownState] = useState('closed');

    function ToggleDropdown(state){
        state === 'open' ? setDropdownState('closed') : setDropdownState('open');
        console.log(dropdownState);
    }

    return(
        <article className="info-dropdown">
            <div onClick={() => ToggleDropdown(dropdownState)}>
                <h2>Awesome Title</h2>
                {dropdownState==='closed' ? <FontAwesomeIcon icon={faAngleDown} /> :
                <FontAwesomeIcon icon={faAngleUp} />}
            </div>
            {dropdownState==='open' ? <p>This is a lot of dummy text to see if we can render this explanatory text in a nice and beautiful way so we know if we can afterwards transform it to real data.</p> : null}
        </article>
    )
}