import { useState, useEffect } from 'react';
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import RentalCard from "../../components/RentalCard/RentalCard";
import { defaultHomeData } from "../../services/defaultData";

export default function Home(){
    const [dataIsLoading, setDataLoading] = useState(false)
    const [rentalsData, setRentalsData] = useState(defaultHomeData)
    useEffect(() => {
        setDataLoading(true)
        fetch("/logements.json")
           .then((response) => response.json()
           .then((result) => {
            setRentalsData(result)
            setDataLoading(false)
           })
        )
     }, [])

    if (dataIsLoading){
        return(
            <main className='main'>
                <p className='loading'>Loading...</p>
            </main>
        )
    }

    return(
        <main className="main">
            <HeroBanner page='Home'/>
            <section className="rental-overview">
                {rentalsData.map((logement) => (
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