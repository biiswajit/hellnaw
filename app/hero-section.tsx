"use client";
import Image from "next/image";
import url_for_white_logo from "@/public/logo-white.png";
import Beams from "@/ui/beams";

function HeroSection() {
    const handleScroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="px-mobile md:px-desktop h-screen flex flex-col items-center justify-center gap-8">
            <div className="absolute top-0 left-0 w-full h-screen -z-10">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#1E90FF"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                />
            </div>

            <Image src={url_for_white_logo} alt="hellnaw" width={120} className="absolute top-4 md:top-8 lg:top-12" />

            <h1 className="text-center text-white uppercase tracking-tighter font-sans font-bold text-6xl md:text-7xl lg:text-9xl">
                creating <br /> short-form <br /> videos
            </h1>

            <button
                onClick={handleScroll}
                type="button"
                className="bg-primary rounded-button py-2 md:py-3 lg:py-4 px-8 md:px-10 lg:px-12 uppercase tracking-tighter hover:cursor-pointer"
            >
                contact
            </button>
        </div>
    );
}

export default HeroSection;
