import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";
import Gallery from "../../components/Gallery/Gallery";

export default function Rentals(){
    return(
        <main className="main rentals">
            <Gallery />
            <div className="rentals_nameLocationTags">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <h3>Paris, Île-de-France</h3>
                <ul className="rentals_nameLocationTags_tags">
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>
            </div>
            <div className="rentals_ownerRating">
                <div className="rentals_ownerRating_owner">
                    <h3>Alexandre Dumas</h3>
                    <img src="" alt="" />
                </div>
                <div className="rentals_ownerRating_rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} className='empty'/>
                    <FontAwesomeIcon icon={faStar} className='empty'/>
                </div>
            </div>
            <section className='rentals_detailInfo'>
                <InfoDropdown />
                <InfoDropdown />
            </section>
        </main>
    )
}