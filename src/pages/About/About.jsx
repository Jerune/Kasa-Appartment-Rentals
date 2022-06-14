import HeroBanner from "../../components/HeroBanner/HeroBanner";
import InfoDropdown from "../../components/InfoDropdown/InfoDropdown";

export default function About(){
    return(
        <main className="main">
            <HeroBanner page='About'/>
            <section className="strengths">
                <InfoDropdown />
                <InfoDropdown />
                <InfoDropdown />
                <InfoDropdown />
            </section>
        </main>
    )
}