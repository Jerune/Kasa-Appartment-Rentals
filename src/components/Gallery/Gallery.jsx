import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Gallery({data}){
  const imageArray = data[0].pictures;
  
  return (
    <header className='gallery'>
        <img src={imageArray[0]} alt='inside the appartment'/>
        <FontAwesomeIcon icon={faChevronLeft} className='left' />
        <FontAwesomeIcon icon={faChevronRight} className='right'/>
        <span className='photo-index'>1/1</span>
    </header>
  )
}