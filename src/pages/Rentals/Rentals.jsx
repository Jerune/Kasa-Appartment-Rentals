import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getAllData } from '../../services/dataManager';
import { StoreContext } from '../../providers/Store';
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";
import Gallery from "../../components/Gallery/Gallery";
import Rating from '../../components/Rating/Rating';
let selectedRental = {};

export default function Rentals(){
    // @ts-ignore
    const [store] = useContext(StoreContext);
    if(store.logements.length=== 0) getAllData();
    let params = useParams();  
    
    if(store.logements.length > 1){
        selectedRental = store.logements.filter(logement => logement.id === params)

    return(
        <main className="main rentals">
            <Gallery id={params} />
            <div className='rentals_generalInfo'>
                <div className="rentals_nameLocationTags">
                    <h1>{selectedRental[0].title}</h1>
                    <h3>{selectedRental[0].location}</h3>
                    <ul className="rentals_generalInfo_tags">
                        {selectedRental[0].tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
                <div className="rentals_ownerRating">
                    <div className="rentals_ownerRating_owner">
                        <h3>{selectedRental[0].host.name}</h3>
                        <img src={selectedRental[0].host.picture} alt={selectedRental[0].host.name} />
                    </div>
                    <ul className="rentals_ownerRating_rating">
                        <Rating amountOfStars={selectedRental[0].rating}/>
                    </ul>
                </div>
            </div>
            <section className='rentals_detailInfo'>
                <InfoDropdown type="rentals" title="Description" content={selectedRental[0].description}/>
                <InfoDropdown type="rentals" title="Equipments" content={selectedRental[0].equipments}/>
            </section>
        </main>
    )
    }
}