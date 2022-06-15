import { useContext } from 'react';
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import RentalCard from "../../components/RentalCard/RentalCard";
import { getAllData } from '../../services/dataManager';
import { StoreContext } from '../../providers/Store';

export default function Home(){
    // @ts-ignore
    const [store] = useContext(StoreContext);
    if(store.logements.length=== 0) getAllData();

    return(
        <main className="main">
            <HeroBanner page='Home'/>
            <section className="rental-overview">
                {store.logements.map((logement) => (
                    <RentalCard 
                    key={logement.id}
                    id={logement.id}
                    picture={logement.cover}
                    title={logement.title}
                    />
                ))}
            </section>
        </main>
    )
}