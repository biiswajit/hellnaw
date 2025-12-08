import FooterSection from "./footer-section";
import HeroSection from "./hero-section";
import InformationSection from "./information-section";

export default function Home() {
    return (
        <div className="w-screen">
            <HeroSection />
            <InformationSection />
            <FooterSection />
        </div>
    );
}
