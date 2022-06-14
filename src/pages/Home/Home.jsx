import HeroBanner from "../../components/HeroBanner/HeroBanner";
import RentalCard from "../../components/RentalCard/RentalCard";

export default function Home(){
    return(
        <main className="main">
            <HeroBanner />
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