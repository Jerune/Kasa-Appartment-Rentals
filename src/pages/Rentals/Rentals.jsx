import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";
import Gallery from "../../components/Gallery/Gallery";
import DefaultImage from '../../assets/rentals/profile-picture-default.jpg';

export default function Rentals(){
    let params = useParams();
    return(
        <main className="main rentals">
            <Gallery />
            <div className='rentals_generalInfo'>
                <div className="rentals_nameLocationTags">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <h3>Paris, Île-de-France</h3>
                    <ul className="rentals_generalInfo_tags">
                        <li>Cozy</li>
                        <li>Canal</li>
                        <li>Paris 10</li>
                    </ul>
                </div>
                <div className="rentals_ownerRating">
                    <div className="rentals_ownerRating_owner">
                        <h3>Alexandre<br/>Dumas</h3>
                        <img src={DefaultImage} alt="Default Profile Picture" />
                    </div>
                    <ul className="rentals_ownerRating_rating">
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li><FontAwesomeIcon icon={faStar} /></li>
                        <li className='empty'><FontAwesomeIcon icon={faStar} /></li>
                        <li className='empty'><FontAwesomeIcon icon={faStar} /></li>
                    </ul>
                </div>
            </div>
            <section className='rentals_detailInfo'>
                <InfoDropdown />
                <InfoDropdown />
            </section>
        </main>
    )
}