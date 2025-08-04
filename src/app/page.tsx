import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";
import AboutMission from "@/app/sections/AboutMission";
import ProcessSteps from "@/app/sections/ProcessSteps";
import FeaturedListings from "./sections/FeaturedListings";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <AboutMission />
        <ProcessSteps />
        <FeaturedListings />
        <Testimonials />
        <CallToAction />
    </>
  );
}