import RentalCard from "../../components/RentalCard/RentalCard";

export default function Home(){
    return(
        <main className="main">
            <header className="hero-banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </header>
            <section className="rental-overview">
                <RentalCard />
                <RentalCard />
                <RentalCard />
                <RentalCard />
                <RentalCard />
                <RentalCard />
            </section>
        </main>
    )
}