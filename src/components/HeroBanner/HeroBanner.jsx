import HomeBanner from "../../assets/home/hero-banner.jpg";
import AboutBanner from "../../assets/about/hero-banner-about.jpg";

export default function HeroBanner(props) {
  return (
    <header className="hero-banner">
      {props.page === "Home" ? (
        <img src={HomeBanner} alt="Home Banner" />
      ) : (
        <img src={AboutBanner} alt="About Banner" />
      )}

      {props.page === "Home" ? <h1>Chez vous, partout et ailleurs</h1> : null}
    </header>
  );
}
