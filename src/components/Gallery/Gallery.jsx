import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Gallery({images}){
  const amountOfImages = images.length;
  const [activeImage, updateImage] = useState({url : images[0], currentIndex: 0})
  
  function toggleImage(direction){
    if (direction === 'right'){
      if (amountOfImages-1 > activeImage.currentIndex){
        updateImage({url: images[activeImage.currentIndex + 1], currentIndex: activeImage.currentIndex + 1})
      } else {
        updateImage({url: images[0], currentIndex: 0})
      }
    } else if (direction === 'left'){
      if (activeImage.currentIndex > 0){
        updateImage({url: images[activeImage.currentIndex - 1], currentIndex: activeImage.currentIndex - 1})
      } else {
        updateImage({url: images[amountOfImages - 1], currentIndex: amountOfImages - 1})
      }
    }
    
  }

  return (
    <header className='gallery'>
        <img src={activeImage.url} alt='dans la logement'/>
        {amountOfImages > 1 ?
          <>
            <FontAwesomeIcon onClick={()=> toggleImage('left')} icon={faChevronLeft} className='left' />
            <FontAwesomeIcon onClick={()=> toggleImage('right')} icon={faChevronRight} className='right'/>
          </>
          : null
        }
        
        <span className='photo-index'>{activeImage.currentIndex+1}/{amountOfImages}</span>
    </header>
  )
}