import HeroBanner from "components/HeroBanner/HeroBanner";
import InfoDropdown from "components/InfoDropdown/InfoDropdown";

export default function About() {
  return (
    <main className="main">
      <HeroBanner page="About" />
      <div className="strengths">
        <InfoDropdown
          state="closed"
          type="about"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <InfoDropdown
          state="closed"
          type="about"
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <InfoDropdown
          state="closed"
          type="about"
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <InfoDropdown
          state="closed"
          type="about"
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </main>
  );
}
