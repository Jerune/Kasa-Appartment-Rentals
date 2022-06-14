import { store } from "../providers/Store";

async function getAllData(){
    const res = await fetch("./logements.json");
    const answer = await res.json();
    store.set ({
        logements: answer
    });
}

export {
    getAllData
}