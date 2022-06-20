import { useContext } from 'react'
import { StoreContext } from '../providers/Store';

async function getAllData( id, {data, setData} ){
    const res = await fetch("/logements.json");
    const answer = await res.json();
    if (id === undefined){
        console.log('ID is undefined, Setting only general data')
        setData ({
            logements: answer,
            currentLogements: {}
        })
    } else {
        console.log('ID is defined, Setting general & specific data')
        const currentRental = data.logements.filter(logement => logement.id === id)[0]
        console.log('data from currentRental is', currentRental)
        setData ({
            logements: answer,
            currentLogement: currentRental
        })
    }
}

export {
    getAllData
}