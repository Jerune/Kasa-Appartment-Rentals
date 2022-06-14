import { store } from "../providers/Store";

async function getAllData(){
    const res = await fetch("./logements.json");
    const answer = await res.json();
    console.log(answer);
    store.set ({
        logements: answer
    });
    console.log(store);
}

export {
    getAllData
}