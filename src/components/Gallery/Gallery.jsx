import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Gallery({data}){
  const imageArray = data.pictures;
  const amountOfImages = imageArray.length;
  const [activeImage, updateImage] = useState({url : imageArray[0], index: 0})
  
  function toggleImage(direction){
    if (direction === 'right'){
      if (amountOfImages-1 > activeImage.index){
        updateImage({url: imageArray[activeImage.index + 1], index: activeImage.index + 1})
      } else {
        updateImage({url: imageArray[0], index: 0})
      }
    } else if (direction === 'left'){
      if (activeImage.index > 0){
        updateImage({url: imageArray[activeImage.index - 1], index: activeImage.index - 1})
      } else {
        updateImage({url: imageArray[amountOfImages - 1], index: amountOfImages - 1})
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
        
        <span className='photo-index'>{activeImage.index+1}/{amountOfImages}</span>
    </header>
  )
}