import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { getAllData } from '../../services/dataManager';
import { StoreContext } from '../../providers/Store';
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";
import Gallery from "../../components/Gallery/Gallery";
import DefaultImage from '../../assets/rentals/profile-picture-default.jpg';
let selectedRental = {};

export default function Rentals(){
    // @ts-ignore
    const [store, updateStore] = useContext(StoreContext);
    if(store.logements.length=== 0) getAllData();
    let params = 'c67ab8a7';  
    
    if(store.logements.length > 1){
        selectedRental = store.logements.filter(logement => logement.id === params)

        function calculateRating(){
            const ratingNumber = selectedRental[0].rating;
            let ratingArray = []
            for (let i = 0; ratingNumber > i; i++){
                ratingArray.push(<li><FontAwesomeIcon icon={faStar} /></li>)
            }
            for (let i = 5; ratingNumber < i; i--){
                ratingArray.push(<li className='empty'><FontAwesomeIcon icon={faStar} /></li>)
            }
            return ratingArray;
        }

    return(
        <main className="main rentals">
            <Gallery id={params} />
            <div className='rentals_generalInfo'>
                <div className="rentals_nameLocationTags">
                    <h1>{selectedRental[0].title}</h1>
                    <h3>{selectedRental[0].location}</h3>
                    <ul className="rentals_generalInfo_tags">
                        {selectedRental[0].tags.map((tag) => <li>{tag}</li>)}
                    </ul>
                </div>
                <div className="rentals_ownerRating">
                    <div className="rentals_ownerRating_owner">
                        <h3>{selectedRental[0].host.name}</h3>
                        <img src={selectedRental[0].host.picture} alt={selectedRental[0].host.name} />
                    </div>
                    <ul className="rentals_ownerRating_rating">
                        {calculateRating()}
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
}