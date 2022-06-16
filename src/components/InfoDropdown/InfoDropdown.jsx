import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function InfoDropdown({state, type, title, content}){
    const [dropdownState, setDropdownState] = useState(state);

    function ToggleDropdown(status){
        status === 'open' ? setDropdownState('closed') : setDropdownState('open');
    }

    return(
        <article className="info-dropdown">
            <div onClick={() => ToggleDropdown(dropdownState)}>
                <h2>{title}</h2>
                {dropdownState==='closed' ? <FontAwesomeIcon icon={faAngleDown} /> :
                <FontAwesomeIcon icon={faAngleUp} />}
            </div>
            {dropdownState==='open' ? 
                type==='rentals' ? 
                    content.length === 5 ? 
                    <p className='rental-size'>
                        {content.map((element, index) => {
                        return(<span key={index}>{element}</span>)
                        })}
                    </p>
                    : <p className='rental-size'>{content}</p> 
                : <p>{content}</p> 
            : null 
            }
        </article>
    )
}