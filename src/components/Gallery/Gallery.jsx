import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DefaultImage from '../../assets/rentals/background_default.jpg';

export default function Gallery(){
  return (
    <header className='gallery'>
        <img src={DefaultImage} alt='Default Image' />
        <FontAwesomeIcon icon={faChevronLeft} className='left' />
        <FontAwesomeIcon icon={faChevronRight} className='right'/>
        <span className='photo-index'>1/1</span>
    </header>
  )
}